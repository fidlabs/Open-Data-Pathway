/**
 * Flow Validator Script
 * 
 * Use Cases:
 * - When an application is in "submitted state"
 *  · application.Lifecycle['Validated By'] must be empty
 *  · application.Lifecycle['Validated At']  must be empty
 *  · application.Lifecycle['Active Request ID']  must be empty
 *  · application['Allocation Requests'] array must be empty
 * - When an aplication is in some other state
 *  · actor must be filplus-github-bot-read-write[bot]
 */

import axios from "axios";

const FILPLUS_BOT="filplus-github-bot-read-write[bot]";

/**
 * This is the main function that will be executed by the workflow and it will validate the application flow
 * 
 * @param {string} owner 
 * @param {string} repo 
 * @param {number} prNumber 
 * @param {string} githubToken 
 * @returns 
 */
async function processPullRequest(owner, repo, prNumber, githubToken) {
  const lastCommitAuthor = await fetchLastCommitAuthor(owner, repo, prNumber, githubToken);
  if (!lastCommitAuthor) {
    throw new Error('Error fetching last commit author.');
  }
  console.log('Author of the last commit:', lastCommitAuthor);

  const changedFiles = await fetchChangedFiles(owner, repo, prNumber, githubToken);
  if (!changedFiles) {
    throw new Error('Error fetching changed files.');
  }

  const changedFilenames = changedFiles.map(file => file.filename);
  
  console.log('List of files changed in PR:', changedFilenames);


  if (changedFilenames.length > 1 || !changedFilenames[0].endsWith('.json')) {
    throw new Error('Either multiple files are modified or the modified file is not a JSON.');
  }

  const application = await fetchJSONFileContent(owner, repo, changedFiles[0].sha, githubToken);

  if (!application) {
    throw new Error('Error fetching file content.');
  }

  application?.Lifecycle?.State == 'Submitted' 
    ? await validateSubmittedState(application)
    : await validateOtherState(lastCommitAuthor);

}

/**
* Fetches the author of the last commit in a given pull request.
*
* @param {string} owner - The owner of the GitHub repository.
* @param {string} repo - The name of the GitHub repository.
* @param {number} prNumber - The pull request number.
* @param {string} githubToken - The GitHub API token.
* @returns {Promise<string|null>} - A promise resolving to the author of the last commit,
*                                   or null in case of error.
*/
async function fetchLastCommitAuthor(owner, repo, prNumber, githubToken) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/commits`;
  const headers = { Authorization: `token ${githubToken}` };

  try {
    const { data: commits } = await axios.get(url, { headers });
    const lastCommit = commits[commits.length - 1];
    return lastCommit.author.login;
  } catch (err) {
    throw new Error('Error fetching last commit author:', err);
  }
}

/**
* Fetches the list of filenames that have been changed in a given pull request.
*
* @param {string} owner - The owner of the GitHub repository.
* @param {string} repo - The name of the GitHub repository.
* @param {number} prNumber - The pull request number.
* @param {string} githubToken - The GitHub API token.
* @returns {Promise<Array|null>} - A promise resolving to an array containing the changed filenames,
*                                  or null in case of error.
*/
async function fetchChangedFiles(owner, repo, prNumber, githubToken) {
  const url = `https://api.github.com/repos/${owner}/${repo}/pulls/${prNumber}/files`;
  const headers = { Authorization: `token ${githubToken}` };

  try {
    const { data } = await axios.get(url, { headers });
    return data;
  } catch (err) {
		throw new Error('Error fetching changed files:', err);
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
 * This function validates an application in a "Submitted" state
 * 
 * @param {Application} application - The application to validate
 * @returns Boolean - True if the application is valid, false otherwise
 */
async function validateSubmittedState(application) {
  console.log('Application is in a "Submitted" state');

  if(application?.Lifecycle?.['Validated by']) {
    throw new Error('Application is already validated (Validated by field is not empty)');
  }

  if(application?.Lifecycle?.['Validated at']) {
    throw new Error('Application is already validated (Validated time field is not empty)');
  }

  if(application?.Lifecycle?.['Active Request ID']) {
    throw new Error('Application has an allocation assigned (Current allocation id field is not empty)');
  }

  if(application?.['Allocation Requests'].length > 0) {
    throw new Error('Application has an allocation assigned (Datacap allocations array is not empty)');
  }

  console.log('Application is valid');
}

/**
 * This function validates an application in a state different than "Submitted"
 * 
 * @param {Application} application 
 * @returns Boolean - True if the application is valid, false otherwise
 */
async function validateOtherState(lastCommitAuthor) {
  console.log('Application is in a state different than "Submitted"');
  if (lastCommitAuthor !== FILPLUS_BOT) {
    throw new Error(`Invalid author. Expected ${FILPLUS_BOT}, got ${lastCommitAuthor}`);
  }
	console.log('Application is valid');

}

const owner = process.env.OWNER;
const repo = process.env.REPO;
const prNumber = process.env.PR_NUMBER;
const githubToken = process.env.GITHUB_TOKEN;

(async function run() {
  try {
    await processPullRequest(owner, repo, prNumber, githubToken);
    console.log('Flow validation completed successfully.')
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
})();
