# Open-Data-Pathway

Background:
The details of this allocator pathway were initially described in an application to the Fil+ Governance Team in December 2023: [LINK](https://github.com/filecoin-project/notary-governance/issues/996). 

Below is an summary of the key client requirements and processes that the Filecoin Incentive Design Lab (FIDL) team will follow to oversee proper due diligence while insuring compliance to Fil+ guidelines for DataCap allocations.

Current Scope: 
Any client looking to onboard an open, public dataset to Filecoin can apply to this allocator pathway. 

Minimum requirements:
- At least two sealed copies of a dataset, stored with two separate Storage Provider entities, each in different regional locations.
- The dataset is made readily retrievable (via an unsealed copy) on the network and can be regularly verified (through the use of manual or automated verification that includes retrieving data over the course of the DataCap allocation timeframe).

Client requirements: 
Clients are required to apply for DataCap using the following GitHub repo LINK (coming soon) which contains questions related to the client role, data preparation, financing, dataset details, and storage provider distribution plan

Diligence on clients includes:
New User Check
Is this a completely new GitHub ID? (less than 2 months old)
Is this the first time this GitHub ID has applied for DataCap in this or other allocotor pathways?
If yes to either, applicants will have a maximum DataCap allowance for their first application (see allocation breakdown below)

Client Check (KYC)
All applicants will be asked if they are willing to complete a free know your customer (KYC) check to confirm themself as a human user associated with a speicific GitHub ID. If they decline the check, they will be significantly limited in the maximum amount of DataCap they can request unless they are able to provide other forms of client identification.
With our solution design, users are asked to validate their ID and livelihood via a link on filplus.storage and their submitted information is then encrypted, stored in a decentralized manner across the third party provider, Togggle.io, servers, and never shared in public with the allocator team or in our GitHub repo. 

Storage Provider Usage
This pathway will have access to an SP Marketplace tool (link soon) and clients are free to work with SPs from the vetted list. 
Clients are also free to select their own storage providers. However, if a client does not intend to use SPs from the vetted SP marketplace, or a vetted Protocol Labs network tool (example: SPADE), then they will be required to provide additional proof of business (KYB) information on the SPs they will use to onboard data, in order to get additional allocations approved. Examples of info include: Business license, proof of datacenter address


Allocation Tranche Schedule to clients:
As mentioned above, each application will have the GitHub ID assessed to confirm if they are a new GitHub ID (less than 2 months old) or first time user to the allocator. If so they will follow first allocation schedule below:

First Time User Allocation Schedule: 
Did you complete the third party KYC check or another form of KYC? If yes, then they become eligible to receive up to 50 TiBs of DataCap
If no, the max they will be allowed receive at anytime is 10 TiBs of DataCap

Note: For users utilizing a GitHub ID older than 2 months and have successfully onboarded public open datasets in the LDN pathway (before 2024)
their onboarding experience will be reviewed to confirm no issues and a positive community reputation. If so, they will be considered a trusted GitHub ID user and can bypass the first allocation schedule above and be considered for the trusted user schedule below.  If not, they will follow the first time user allocation schedule.

Trusted User Allocation Schedule:
If a user has successfully onboarded a dataset using the First time allocation schedule OR they are a trusted GitHub ID user:
AND have completed the third party KYC check or other form of KYC, then they become eligible to apply for up to 5 PiBs of DataCap
If they have onboarded a dataset successfully in the the past, but they did not complete or chose not to complete any form of KYC check, the max they will be allowed to apply for at any time  is 10 TiBs of DataCap

Note: if first time applicants apply for multiple applications at the same time, only after a completion of one, will the count be included and increased allocation sizes become available.

The allocation schedule for trusted users is:
                                         
1st allocation         5%
2nd allocation        15%
3rd allocation        30%
4th allocation        50%

After successful onboarding of a dataset as a trusted GitHub ID, users then become eligible to apply for 5PiB+ as needed to meet their demand.

When clients use up > 75% of the prior DataCap allocation, a request for additional DataCap in the form of the next tranche is automatically kicked off (via the subsequent allocation bot'). We will set an SLA (Service Level Agreement) to keep up with allocation review and comment on bot messages within 3 days.

Two other things to note about DataCap granting timelines: 
1) There is an expiration date on allocated DataCap of 3 months. There is already built into the allocation bot a stale check that will close applications after 14 days of being idle. That bot will continue to be in effect,  however, clients can comment before 14 days to keep open or, if closed, request for closed applications to be reopened as needed. However, from an allocation date, we will measure 3 months time and if the allocation has not been used (open or closed status), the application will be closed and remaining DataCap removed.
2) The expectation when the complete amount of requested DataCap is allocated is that the client has completely finished onboarding their dataset and replicas. If a client closes the application early, they will be questioned as to why. Also, if a client abandons the application and becomes non responsive, their GitHub ID will be flagged. 
