import axios from "axios";
import { Buffer } from "buffer";

/**
 * Fetches the list of filenames that have been changed in a given pull request.
 *
 * @param {string} owner - The owner of the GitHub repository.
 * @param {string} repo - The name of the GitHub repository.
 * @param {number} prNumber - The pull request number.
 * @param {string} githubToken - The GitHub API token.
 * @returns {Promise<string[]|null>} - A promise resolving to an array of filenames or null in case of error.
 */
async function fetchChangedFilesInPR(owner, repo, prNumber, githubToken) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/files`;
  const headers = { Authorization: `token ${githubToken}` };

  try {
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (err) {
    console.error('Error fetching changed files:', err);
    return null;
  }
}

/**
 * Fetches the content of a JSON file based on its SHA.
 *
 * @param {string} owner - The owner of the GitHub repository.
 * @param {string} repo - The name of the GitHub repository.
 * @param {string} sha - The SHA of the file.
 * @param {string} githubToken - The GitHub API token.
 * @returns {Promise<Object|null>} - A promise resolving to the parsed JSON content or null in case of error.
 */
async function fetchJSONFileContent(owner, repo, sha, githubToken) {
  const url = `https://api.github.com/repos/${owner}/${repo}/git/blobs/${sha}`;
  const headers = { Authorization: `token ${githubToken}` };

  try {
    const { data } = await axios.get(url, { headers });
    const fileContent = Buffer.from(data.content, 'base64').toString('utf-8');
    return JSON.parse(fileContent);
  } catch (err) {
    throw new Error('Error fetching JSON file content:', err);
  }
}


/**
 * Merges a given pull request.
 *
 * @param {string} owner - The owner of the GitHub repository.
 * @param {string} repo - The name of the GitHub repository.
 * @param {number} prNumber - The pull request number.
 * @param {string} githubToken - The GitHub API token.
 * @returns {Promise<void>} - A promise indicating the completion of the operation.
 */
async function mergePullRequest(owner, repo, prNumber, githubToken) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/merge`;
  const headers = { Authorization: `token ${githubToken}` };
  
  try {
    const { data } = await axios.put(url, {}, { headers });
    console.log('Successfully merged:', data);
  } catch (err) {
    throw new Error('Error merging PR:', err);
  }
}

/**
 * Processes a pull request to determine if it should be automatically merged.
 * Criteria for merging include having only one changed file that is a JSON file
 * with specific properties.
 *
 * @param {string} owner - The owner of the GitHub repository.
 * @param {string} repo - The name of the GitHub repository.
 * @param {number} prNumber - The pull request number.
 * @param {string} githubToken - The GitHub API token.
 * @returns {Promise<void>} - A promise indicating the completion of the operation.
 */
async function processPullRequest(owner, repo, prNumber, githubToken) {
  const changedFiles = await fetchChangedFilesInPR(owner, repo, prNumber, githubToken);

  if (!changedFiles) {
		throw new Error('No changed files.');
  }
  const changedFilenames = changedFiles.map(file => file.filename);
  
  console.log('Changed files:', changedFilenames);

  if (changedFilenames.length === 1 && changedFilenames[0].endsWith('.json')) {
    console.log('A single JSON file has been modified.');
    const fileContent = await fetchJSONFileContent(owner, repo, changedFiles[0].sha, githubToken);

    if (!fileContent) {
			throw new Error('No file content found.');
    }

    if (
      fileContent?.Lifecycle?.State === "Granted" && 
        (
          fileContent?.Lifecycle?.['Validated At'] !== "" ||
          fileContent?.Lifecycle?.Active === false 
        )
    ) {
      console.log("Conditions met for automatic merge.");
      await mergePullRequest(owner, repo, prNumber, githubToken);
    } else {
      throw new Error("Conditions not met for automatic merge.");
    }
  } else {
    throw new Error('Either multiple files are modified or the modified file is not a JSON.');
  }
}

const owner = process.env.OWNER;
const repo = process.env.REPO;
const prNumber = process.env.PR_NUMBER;
const githubToken = process.env.GITHUB_TOKEN;

(async function run() {
  try {
    await processPullRequest(owner, repo, prNumber, githubToken);
    console.log('Automerge PR completed successfully.')
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();