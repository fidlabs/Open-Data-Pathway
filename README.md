# Open-Data-Pathway

Contact: mplocic@fidl.tech or @DamianPudlo on Filecoin Slack

Background:
- The details of this allocator pathway were initially described in an application to the Fil+ Governance Team in December 2023: [LINK](https://github.com/filecoin-project/notary-governance/issues/996). 

Below is an summary of the key client requirements and processes that the Filecoin Incentive Design Lab (FIDL) team will follow to oversee proper due diligence while insuring compliance to Fil+ guidelines for DataCap allocations.

Current Scope: 
- Any client looking to onboard an open, public dataset to Filecoin can apply to this allocator pathway. 

Minimum client requirements:
- At least two sealed copies of a dataset, stored with two separate Storage Provider entities, each in different regional locations.
- The dataset is made readily retrievable (via an unsealed copy) on the network and can be regularly verified (through the use of manual or automated verification that includes retrieving data over the course of the DataCap allocation timeframe).
- Clients disclose their storage provider partners upfront or designate an approved network tool they will use for SP selection
- Clients are required to apply for DataCap using the following GitHub repo [LINK](https://github.com/fidlabs/Open-Data-Pathway/issues/new/choose) which contains questions related to the client role, data preparation, financing, dataset details, and storage provider distribution plan

Once an application is submitted, diligence to be completed on clients includes:

New User Check
  - Is this a completely new GitHub ID? (less than 2 months old)
  - Is this the first time this GitHub ID has applied for DataCap in this or other allocotor pathways?
  - If yes to either, applicants will have a maximum DataCap allowance for their first application (see allocation breakdown below)

Client ID Check (KYC)
- All applicants will be asked if they are willing to complete a free Know Your Customer (KYC) check to confirm themself as a human user associated with a speicific GitHub ID.
- If they decline the check, they will be significantly limited in the maximum amount of DataCap they can request unless they are able to provide other forms of client identification.
- With our KYC check design, users are asked to validate their ID via gitcoin passport, which confirms it and then provides us with a numerical analysis result. None of the personally identifiable information is collected by gitcoin passport, or anyone associated with FIDL. To pass the KYC process, a user must have a score of at least 20.
  
Client Business Check (KYB)

If a client is applying as a dataset owner for a commerical dataset, all dataset owner businesses must complete a know your business, KYB, check to confirm the business exists, is legit, and someone from the data owner team (business) has approved onboarding of the dataset. We currently offer two options for KYB check:
We offer a third party KYB service partnership with Synaps.io (cost of $100), that will review business and data owner documentation. Link to site: https://efilplus.synaps.me/
Or a client can request a virtual meeting with the client(lead SP), data owner and member of the allocator team to review the dataset, confirm ownership (proof of employment, employer signoff, sharing the business license) and validate storage of the data by the client/applicant is approved and a contract with the SP(s) is in place. If requested by a client, we will utilize various non-disclosure agreements to collect required information on clients and data-owners while maintaining their privacy.

Storage Provider (SP) Usage Check
Clients are free to select their own SPs. However, if a client does not intend to use SPs from the vetted SP marketplace, or a vetted Protocol Labs network tool (example: SPADE), then they will be required to provide additional proof of business (KYB) information on the SPs they will use to onboard data, in order to get additional allocations approved. Examples of info include: Business license, proof of datacenter address

Allocation Tranche Schedule to clients:
- As mentioned above, each application will have the GitHub ID assessed to confirm if they are a new GitHub ID (less than 2 months old) or first time user to the allocator. If so they will follow first allocation schedule below:

First Time User Allocation Schedule: 
- Did you complete the third party KYC check or another form of KYC? If yes, then they become eligible to receive up to 50 TiBs of DataCap
If no, the max they will be allowed receive at anytime is 10 TiBs of DataCap

Note: For users utilizing a GitHub ID older than 2 months and have successfully onboarded public open datasets in the LDN pathway (before 2024)
their onboarding experience will be reviewed to confirm no issues and a positive community reputation. If so, they will be considered a trusted GitHub ID user and can bypass the first allocation schedule above and be considered for the trusted user schedule below.  If not, they will follow the first time user allocation schedule.

Trusted User Allocation Schedule:
- If a user has successfully onboarded a dataset using the First time allocation schedule OR they are a trusted GitHub ID user
AND have completed the third party KYC check or other form of KYC, then they become eligible to apply for up to 5 PiBs of DataCap
- If they have onboarded a dataset successfully in the the past, but they did not complete or chose not to complete any form of KYC check, the max they will be allowed to apply for at any time  is 10 TiBs of DataCap

Note: if first time applicants apply for multiple applications at the same time, only after a completion of one, will the count be included and increased allocation sizes become available.

The allocation schedule for trusted users is:                                     
- 1st allocation         5%
- 2nd allocation        15%
- 3rd allocation        30%
- 4th allocation        50%

After successful onboarding of 5PiBs of a dataset as a trusted GitHub ID, users then become eligible to apply for 5PiB+ as needed to meet their demand.

Subsequent allocation schedule:
- When clients use up > 75% of the prior DataCap allocation, a request for additional DataCap in the form of the next tranche is automatically kicked off (via the subsequent allocation bot). The allocator team will set an SLA (Service Level Agreement) to keep up with allocation review and comment on bot messages within 3 days.

Two other points to note about DataCap allocation and subsequent usage: 
1) There is an expiration date of three months on any allocation of DataCap. From an allocation date, we will measure three months time and if the allocation has not been used (open or closed status), the application will be closed and remaining DataCap removed.
2) The expectation when the complete amount of requested DataCap is allocated is that the client has completely finished onboarding their dataset and replicas. If a client receives a Datacap allocation, then closes their application before completion, they will be questioned as to why. Likewise, if a client receives a DataCap allocation and abandons the application and becomes completely non responsive, their GitHub ID will be flagged from any future participation in the pathway. 

Compliance check mechanisms for the client applications:
- After each allocation we will manually review the on-chain deal making activity of the applicant to confirm compliance mostly relying on the AC Bot, which runs weekly, to identify non-compliance of deal making, distribution and retrievals and that information will be used to drive action on applications. The bot will be set up to automatically close applications after several allocations if thresholds are not met.
- At any point if clients are caught providing fake or misleading information about themselves or their SP partners, we will close any open applications and add the GitHub user IDs and miner IDs involved and block them from future participation in the allocator

Disputes/Appeals:
- For any disputes between our allocator and a client, hereby termed appeal(s), we will source the appeals through the Open Data Allocator Appeals Form (https://docs.google.com/forms/d/e/1FAIpQLSfkdb_p9sg5sx_bnSlX0r9rdKXFGmz4dGC1cBtMEYuDym3Ecw/viewform) where all our clients can submit an appeal and someone on the allocator team will address it with a 14 day SLA. 
- We would like to respect the privacy of the client and do not plan to host a public resolution process.
- For disputes raised by community members/non-clients about our allocation approach and strategy, we will comply with the public dispute tracker that is being built by the Filecoin Foundation Governance team. We can commit an SLA for such disputes to be 21 days.
