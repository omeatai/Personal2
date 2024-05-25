
## LINKEDIN Prepare for the AWS Certified Solutions Architect - Associate (SAA-C03) Certification

### +AWS Certified Solutions Architect - Associate (SAA-C03) Cert Prep: 1 Cloud Services Overview

### +AWS Certified Solutions Architect - Associate (SAA-C03) Cert Prep: 2 Storage Design

<details>
<summary>1. AWS Storage Services </summary>

# AWS Storage Services

AWS offers a variety of storage services, requiring understanding to choose the right ones.

- Simple Storage Service (S3)
- Glacier
- CloudFront
- Elastic Block Store (EBS)
- The Storage Gateway 
- The Snow Family
- Databases

## Simple Storage Service (S3)

- Simple Storage Service (S3) is a primary service for general storage needs.
- It was one of the first storage services that Amazon ever offered with AWS.
- File storage, akin to S3 object storage, deals with objects or chunks of information.
- With file storage, we're dealing with objects, or chunks of information.
- AWS uses something similar to file storage with S3 called object storage, so they treat a file like an object.
- File storage is used all the time on our local networks with NAS devices. So, if you've ever connected a network-attached-storage device to your network, even at home, and you put files on there, you are using file-based storage.
- Now, within that NAS device, you don't actually access it at the allocation vector level, or the block or sector level. Instead, you're dealing with it as a file, or in S3 terminology, as an object.

## Glacier

- Glacier is suitable for archiving large amounts of data not frequently accessed.
- Glacier is for that archival data, someplace to put a large amount of data that you want to keep for a long time, but you're not necessarily worried about accessing it frequently or instantly.

## CloudFront

- CloudFront optimizes content delivery by caching data near users.
- CloudFront is about getting the stuff close to your users.
- It is simply making sure that web information, this kind of data that's accessed frequently by your website visitors, is cached at an Edge location that's near the customer.

## Elastic Block Store (EBS)

- Elastic Block Store (EBS) provides fast block-level access for instances.
- Block storage, used with EBS, offers data access similar to local hard drives.
- Elastic Block Store is the best storage solution to use for your instances when you want those instances to have very fast block-level access rather than object-level access. S3 is object level.
- It's used on local networks all the time. We use it with ISCSI; internet SCSI, or Fiber channel, et cetera. These are done to connect to storage area networks usually.
- Basically, what we're doing is, across the network, being able to get access to data in a similar way we do to local hard drives.
- AWS can use block storage with virtual machines within the AWS Cloud when you use Elastic Block Store, or EBS.

## The Storage Gateway 

- The Storage Gateway enables accessing cloud storage as if it's local.
- It is basically an appliance that you put on your local network, either a software appliance or a hardware appliance, that acts as a VPN connection into the Amazon Cloud so that you can access your storage as if it's local storage.

## The Snow Family

- The Snow Family assists in migrating massive data to the cloud.
- It is a collection of really three primary products that can be used in order to migrate data from your local data stores into the cloud when you have massive amounts of data that you need to move.

## Databases

- Databases also serve as storage solutions.

# Factors to consider when choosing a Storage Service:

- Consider factors like size, performance, and cost when selecting a storage service.
- Performance includes both access speed and the time it takes for data retrieval.
- Balance performance requirements with cost considerations; Glacier offers cost savings but delayed access.
- Choose storage services based on the urgency of data access and budget constraints.

# #END</details>

<details>
<summary>2. S3 Storage Class Overview </summary>

# S3 Storage Class Overview

- S3 is an AWS storage service focused on object storage.
- Objects are stored within buckets, which can hold files or any data chunks.
- Objects are automatically distributed across at least three Availability Zones for redundancy, except for the 1A class which uses only one zone for lower cost but reduced availability.
- S3 supports encryption and automatic data classification.
- Data classification aids in security and management tasks such as moving data to Glacier based on usage patterns.
- AWS enables direct big data analytics against data stored in S3 buckets without the need for database migration.
- S3 primarily offers object storage, not file storage.
- Different classes of S3 storage provide varying levels of availability and cost.
- Choose the appropriate method for data ingestion based on requirements and constraints.

# Getting Data into S3

## AWS APIs

- AWS APIs allow direct integration into applications for uploading data.

## Amazon Direct Connect

- Amazon Direct Connect establishes VPN connections for data transfer.

## Storage Gateway

- Storage Gateway synchronizes or replicates local data with S3.

## Kinesis Firehose

- Kinesis Firehose facilitates analytical data transfer to S3.

## Transfer Acceleration

- Transfer Acceleration speeds up data uploads globally but at increased cost.

## The Snow Family

- Snowball, Snowball Edge, and Snowmobile offer scalable solutions for data migration.
- Snowmobile is a large trailer capable of storing exabytes of data.
- Snowball Edge can run instances for analytics on-premises before transferring data to AWS.

![image](https://github.com/omeatai/src-aws/assets/32337103/74d73bd8-81bc-4d21-a445-4d92d99aac10)

# #END</details>

<details>
<summary>3. S3 Terminology </summary>

# S3 Terminology

- Buckets: Containers for storing objects in S3, with a default limit per AWS account.
- Regions: Geographic locations where buckets are created, affecting data accessibility and latency.
- Objects: Data stored within buckets, similar to files, but can also include structured data.
- Keys: Logical names of objects within buckets, analogous to file names.
- Object URLs: Unique URLs assigned to each object for internet access.
- Eventual Consistency: Objects may take some time to replicate across availability zones, leading to eventual consistency.
- Static Website Hosting: S3 is suitable for hosting static websites due to quick access and URL accessibility.

# S3 Operations:
- Creating and deleting buckets.
- Writing, reading, and deleting objects.
- Managing object properties.
- Listing keys in buckets.
 
# REST Interface (API):
- Represents S3's API for programming access.
- Utilizes CRUD operations (Create, Read, Update, Delete) mapped to HTTP methods (PUT, POST, GET, DELETE).
- Important for developers but less emphasized in architect or designer certifications.

# #END</details>

<details>
<summary>4. S3 Advanced Features </summary>

# S3 Advanced Features

## Prefixes and Delimiters:

- Used for organizing data within S3 buckets, resembling folder structures.
- Prefixes are strings of characters indicating hierarchy, while delimiters separate prefixes.

## Storage Classes:

- Different options for storing data in S3, including S3 Standard, S3 Infrequent Access, S3 Reduced Redundancy Storage, and Glacier.
- Vary in availability, redundancy, and cost.

![image](https://github.com/omeatai/src-aws/assets/32337103/8347fdc8-d31f-4829-a434-0d81d08d7dcc)

## Object Lifecycle Management:

- Automates the transition of objects between different storage classes over time based on predefined rules.
- Helps optimize costs by moving data to the most suitable storage class as per its usage pattern.

## Encryption:

- Server-side Encryption: AWS encrypts objects after upload and decrypts them upon access automatically.
- Client-side Encryption: Objects are encrypted locally before upload, ensuring security during transit.

## Versioning:

- Enables the storage of multiple versions of objects within S3 buckets.
- Once enabled, cannot be disabled, but can be suspended to prevent new versions from being created.

## Additional Features:

- Multifactor Authentication Delete (MFA Delete): Requires additional authentication (e.g., code sent to phone) to delete objects, enhancing security.
- Multipart Upload: Accelerates uploads of large files by splitting them into multiple parts for faster transmission and reassembly.
- Range GETs: Allows retrieval of specific portions of large files within S3 objects.
- Cross-Region Replication: Replicates data between S3 buckets in different AWS regions to ensure data durability and availability.
- Logging and Event Notifications: Logs actions performed on buckets and sends notifications for specified events, facilitating monitoring and management.
- Understanding these advanced features is crucial for effectively managing and optimizing S3 storage for various use cases and cost-efficiency.

# #END</details>

<details>
<summary>5. Creating S3 Buckets Lab </summary>

# Creating S3 Buckets Lab

- Everything related to Amazon S3 can be managed through the GUI interface of the AWS Management Console.

## Creating a Bucket:

- Navigate to the S3 management console.
- Click on "Create Bucket".
- Choose a DNS compliant bucket name, ensuring uniqueness globally across all of Amazon S3.
- Configure properties such as versioning, logging, tags, encryption, and access permissions.
- Review the settings and create the bucket.

## Bucket Properties:

- After creating the bucket, explore its properties, including options like versioning, server access logs, static website hosting, object-level logging, default encryption, tags, and more.
- Properties can be configured both during the creation process and afterward.

## Versioning:

- Enable versioning to store multiple versions of objects in the bucket.
- Once enabled, versioning cannot be disabled; it can only be suspended.

## Conclusion:

- Basic process of creating an S3 bucket involves choosing a unique name, configuring properties, and reviewing settings before creation.
- Further customization options include exploring bucket properties and enabling features like versioning for data management and security.

## Lab

![image](https://github.com/omeatai/src-aws/assets/32337103/3a2ce10b-a4e5-4793-8b7b-5819e9c01669)
![image](https://github.com/omeatai/src-aws/assets/32337103/4cf9ef63-9e59-44ab-8801-755382a519af)
![image](https://github.com/omeatai/src-aws/assets/32337103/b10d28ec-12b6-4bb0-a573-2ca2b79a2bb0)
![image](https://github.com/omeatai/src-aws/assets/32337103/b864b0f6-d911-4382-b5e9-7807a2d0eb60)
![image](https://github.com/omeatai/src-aws/assets/32337103/a3250eaa-147b-4e2d-9dc3-b2ec53e1c33a)
![image](https://github.com/omeatai/src-aws/assets/32337103/244157b4-9477-4878-a07a-56b048eb6f8c)
![image](https://github.com/omeatai/src-aws/assets/32337103/53e0b407-8933-4416-8c81-81c6e88298df)
![image](https://github.com/omeatai/src-aws/assets/32337103/86c681e9-f71c-4a57-a0a6-8fea87b5fb0e)
![image](https://github.com/omeatai/src-aws/assets/32337103/bc2b0e52-37bd-4c70-82b4-3dc6104e93a7)
![image](https://github.com/omeatai/src-aws/assets/32337103/c13b7c2a-412b-42f9-b13b-1fb3d8e60254)
![image](https://github.com/omeatai/src-aws/assets/32337103/28356447-5458-4e83-8fe0-5e9733167da8)
![image](https://github.com/omeatai/src-aws/assets/32337103/7df4a408-05c0-4388-abcb-76a202b0b7a2)

# #END</details>

<details>
<summary>6. S3 Bucket Properties </summary>

# S3 Bucket Properties

## Static Web Hosting:

- Allows hosting a static website within an S3 bucket by uploading HTML, image, and audio files.
- Can be enabled through the S3 management console, providing a URL for accessing the website.
- Consider using DNS redirection for a friendlier URL.

## Encryption:

- Two options available: AES and KMS.
- AES: Keys managed fully by AWS, simpler setup.
- KMS: Keys managed through Key Management Service, offering more management flexibility.
- Both options provide server-side encryption for stored objects.
  
## Tags:
- Customizable metadata for organizing and managing buckets.
- Useful for categorizing buckets based on departments, purposes, etc.

## Permissions:

- Managed at both bucket and object levels.
- Bucket-level permissions inherited by objects.
- Account permissions: Control access for the AWS account.
- Public access: Allows anonymous access with specified permissions (listing, reading, writing).
- Bucket policy: JSON-based policy for fine-grained access control.
- CORS (Cross-Origin Resource Sharing): Used for web application frameworks.

## Management:
- Lifecycle rules: Automate transitions and expiration of objects based on specified criteria (prefixes, tags, storage class transitions, expiration).
- Replication: Cross-region replication for redundancy and disaster recovery.
- Analytics, metrics, and inventory: Monitoring and analysis tools for bucket management.

## Conclusion:

- S3 bucket properties play a crucial role in managing objects effectively.
- Options include hosting static websites, encryption, tagging, permissions management, and lifecycle rules.
- Understanding and configuring these properties ensures efficient and secure storage and access of objects within S3 buckets.

## POLICY JSON DOCUMENT

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1710784997612",
      "Action": "s3:*",
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::marketing-omeatai"
    }
  ]
}
```

## [https://awspolicygen.s3.amazonaws.com/policygen.html](https://awspolicygen.s3.amazonaws.com/policygen.html)

![image](https://github.com/omeatai/src-aws/assets/32337103/dbca9abe-064d-40e1-9ee7-ce7a94902147)

# #END</details>

<details>
<summary>7. S3 managing Objects Lab </summary>

# S3 managing Objects Lab

## Creating Folders:

- Folders in S3 are simulated using prefixes and delimiters.
- You can create "folders" through the S3 management console.
- Despite being called folders, they are actually objects displayed as folders.

## Uploading Files:

- Use the "Upload" button to add files to the bucket.
- Files can be uploaded individually or in bulk.
- Permissions and properties can be configured during the upload process.

## File Properties:

- Properties of uploaded files include encryption, tags, and permissions.
- Tags can be used for lifecycle management and organization.

## Object Management:

- Objects can be managed individually, including actions like download, rename, delete, etc.
- Permissions can be set for each object separately.

## Versioning:

- Versioning can be enabled for the bucket.
- Uploading a new version of a file preserves previous versions.
- Deleted files are marked for deletion but can be recovered.
- Features like versioning, folder creation, and object management enhance flexibility and control.
- S3 provides robust options for organizing, securing, and managing data, surpassing simple file storage solutions like Dropbox.

## Lab

<img width="1093" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/7be01e0b-a236-413e-a8ce-0ef8f4aaea92">
<img width="1097" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/81faeebb-ad4b-4f96-a4ad-4f5ee464d7b5">
<img width="1094" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/48ef1440-235f-47c8-9b43-b6f3c55e1aa0">
<img width="1091" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/f2bf3d2f-192b-4313-9a61-cb2cfed3d900">
<img width="1100" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/88c9310b-8315-496b-8ed7-8084d2172772">
<img width="1095" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/4edef75c-ddbe-4a4f-802f-85348fdface3">
<img width="1096" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/91a3a259-cacd-4e8f-968c-52b77586ca49">
<img width="1097" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/6f66875d-9347-4225-b4a6-be8d9056f30d">
<img width="1095" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/6da14c77-b299-4c2b-90e9-117c194cfba0">

# #END</details>

<details>
<summary>8. AWS Glacier </summary>

# AWS Glacier

## Glacier Overview:

- Glacier is an archival data storage solution provided by AWS.
- Designed for storing data that is not frequently accessed, often referred to as "cold data."
- Offers significantly lower storage costs compared to active storage solutions.
- Provides three access methods: expedited (3-5 minutes), standard (3-5 hours), and bulk (5-12 hours), with varying costs.

## Integration with S3:

- Glacier can be integrated with Amazon S3 as a storage class.
- S3 cold data can be automatically moved to Glacier using lifecycle rules.

## Data Import:

- Snow devices can be used to import large amounts of data into Glacier.
- Storage Gateways provide connectivity to Glacier for backup and archiving purposes.
  
## Key Concepts:

- Archives: Data stored in Glacier, analogous to objects in S3.
- Vaults: Containers used to store archives, replacing buckets in S3.
- Vault Locks: Security measures to restrict access to vaults and prevent unauthorized retrieval.
  
## Data Retrieval:

- Up to 5% of data retrieval is free each month, without rollover.
- Vaults can be configured to limit retrieval costs and control access to data.
- Decision-making processes should be established to ensure cost-effective use of Glacier, especially for large data retrievals.

## Conclusion:

- Glacier offers a cost-effective solution for storing archival data.
- Proper planning and management are essential to optimize costs and control access to data.

# #END</details>

<details>
<summary>9. Setting up Glacier Vault Lab </summary>

# Setting up Glacier Vault Lab 

## Creating a Glacier Vault:

- Navigate to the Glacier Management Console within the AWS Services Interface.
- Choose "Create Vault" to begin setting up a new vault.
- Select the AWS region where the vault will be located.
- Provide a name for the vault, such as "My Archive Vault," and proceed to the next step.

## Event Notifications:

- Decide whether to enable event notifications for the vault.
- Options include creating a new SNS topic, using an existing SNS topic, or not enabling notifications.

## Review and Submission:

- Review the summary of vault configuration.
- Click "Submit" to create the vault.

## Vault Management:

- Once the vault is created, view information about the vault, including its region, creation date, ARN, and status.
- Configure permissions, vault locks, and tags for the vault as needed.

## Data Storage and Retrieval:

- Upload files to the vault using various methods, such as Storage Gateway, application APIs, or the command-line interface.
- Define retrieval policies for the vault, including options like free tier only, max retrieval rate, or no retrieval limit.
- After setting up the vault and configuring its properties, users can begin storing data in Glacier, where files are referred to as archives.

## Lab

<img width="1100" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/e8b6217d-0bf4-40b6-98e5-72511fcbc481">
<img width="1093" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/824876df-972b-4020-a321-4e417b893157">
<img width="1101" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/c6dc4010-c064-43a0-abec-8d78f48036ed">
<img width="1102" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/cd8db0ca-03ee-405a-a95b-fc6717194d91">
<img width="1099" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/7794a22d-4c2f-4e65-94c1-b7cb2ce20db3">
<img width="1101" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/5b3f2a80-4751-43cb-8e67-1880be424dc8">
<img width="1091" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/c839e20e-8978-45dc-b010-117d8dcbd006">
<img width="1093" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/fb353138-8c82-44ad-8498-cef8112ad10e">
<img width="1101" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/b4c8f931-870e-4582-b9d0-4c3bf2b23f87">
<img width="1097" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/41c28e6c-5e1e-40f7-81e4-91c6f07ae6e9">
<img width="1101" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/cb5db2aa-4df4-4bf3-8835-976288e69cc0">

# #END</details>

<details>
<summary>10. S3 and Tape Gateway </summary>

# S3 and Tape Gateway

## Introduction to Tape Gateway:

- Despite technological advancements, tape backups are still prevalent in many systems.
- AWS offers the Tape Gateway service to facilitate tape backups and integrates it with S3 and other applications.

## Finding the Tape Gateway:

- Access the Tape Gateway through the Storage Gateway section of the AWS Management Console.
- Tape Gateway is one of the sub-components alongside File and Volume Gateways.

## Setting Up Tape Gateway:

- Choose the Tape Gateway option and proceed with setup, selecting the host platform (usually an EC2 instance) and configuring endpoint accessibility.
- Depending on whether it's for EC2 instances or outside servers, choose between a publicly-accessible endpoint or one accessible within the VPC.

## Virtual Tape Library (VTL):

- Upon setup, the Tape Gateway creates a Virtual Tape Library (VTL), which is a collection of virtual tapes.
- Virtual tapes are stored as objects in an S3 bucket, not as physical tapes.

## Integration with Amazon Glacier Deep Archive:

- Virtual tape libraries stored in S3 buckets can be configured with Glacier Deep Archive storage class.
- Glacier Deep Archive offers very low-cost storage suitable for long-term archival purposes.
- Access to data stored in Glacier Deep Archive is restricted, similar to accessing data on physical tapes, requiring advance notice.
- Tape Gateway enables tape backups for systems requiring them, with virtual tapes stored in S3 buckets and offering cost-effective storage with Glacier Deep Archive.

<img width="1105" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/3c21fe27-c96b-4dfe-aae2-4366dc4dab37">
<img width="1091" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/d8feed04-ec83-411a-9d2f-cd56a3cc8730">
<img width="1092" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/13867705-8238-48e2-8b75-3bc7d0ba38a5">
<img width="1090" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/446dcee5-b78f-4be3-8278-14120a3ce48c">
<img width="1094" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/3406be8a-1276-4e22-a035-5d4e8daf456d">
<img width="1089" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/351b1297-2d54-4ea6-ba9b-89ef8e0b349f">
<img width="1090" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/75b2b064-cf32-4237-9bac-d7da848952fb">

# #END</details>

<details>
<summary>11. Enhanced S3 Features </summary>

# Enhanced S3 Features

## Introduction to Enhanced S3 Features:

- AWS provides advanced features for S3 to improve file management and cost optimization.
- These features include object locking, intelligent tiering, and batch processing.

## Intelligent Tiering:

- Accessible through the AWS Management Console under S3 buckets' lifecycle rules.
- Allows automatic transition of objects to lower-cost storage tiers based on predefined rules.
- Users can specify transition conditions, such as transitioning to Glacier storage after a certain number of days.

## Object Locking:

- Enables "write once, read many" (WORM) functionality, preventing modification of stored objects after creation.
- Object locking must be enabled during bucket creation or via AWS customer service if not done initially.
- Accessed through the AWS Management Console by enabling object lock during bucket creation and then applying it to individual objects within the bucket.

## Batch Processing:

- Facilitates automated operations on objects within S3 buckets.
- Accessed through the AWS Management Console under the "Batch Operations" section.
- Users create jobs based on manifests containing lists of objects and define actions to be performed, such as moving, deleting, or changing properties of objects.
- Enhanced S3 features provide users with advanced management capabilities, including cost-effective storage with intelligent tiering, data protection with object locking, and automated file management through batch processing.'

<img width="1098" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/84797147-042c-41a0-9e1c-5f47dfbc8ee6">
<img width="1093" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/e38260ba-3893-48c9-90b1-0774b6b6ab88">
<img width="1093" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/e0e12ab7-db58-43e8-9a1c-9e28def1fe0d">
<img width="1095" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/accc6900-1a36-438b-a900-e0a1f7294e75">
<img width="1089" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/ad9c5dc6-9ee0-4be3-85e1-f308d4af29f7">
<img width="1096" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/5563a62a-aebf-460d-be86-a510ed3c620a">
<img width="1093" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/b248ea05-b98d-4cf4-90a8-b3e62649c86c">
<img width="1095" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/02d6c70d-0115-4d6d-82dc-8b7188476514">
<img width="1092" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/e7b36f89-67c9-40bf-8bf5-a8946078c75b">
<img width="1096" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/bd45fdea-c371-4736-b426-213b61280b7b">
<img width="1094" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/d31033f2-273d-4ae3-a36b-574b9d26f176">
<img width="1093" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/696bd605-5c11-4254-a909-4564505eab32">
<img width="1092" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/e6a5d704-0d6b-407c-a784-4970cea289e6">
<img width="1095" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/0c48549b-2dba-4323-a10b-77df92a28d52">
<img width="1094" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/44a91329-384f-46b3-839a-772daccf58d1">
<img width="1096" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/69f9dffa-0a3e-4a5a-80bd-a13136587689">
<img width="1095" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/673d8fc5-3868-4437-a324-e16845b9fb34">
<img width="1094" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/ea16495b-758d-40bf-ae17-aa89e5eeb603">
<img width="1097" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/d50d0007-1c6e-4782-a65d-2de034f3188a">
<img width="1096" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/5e2aae15-7f4b-4e52-aaab-27f8c9e55472">
<img width="1093" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/35a57e7d-f372-4b0f-aaf0-584c9d41a370">
<img width="1094" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/7fe5be29-b33e-4820-b78e-9c19db6f40fc">
<img width="1090" alt="image" src="https://github.com/omeatai/src-aws/assets/32337103/368dc18b-8a8d-41ef-a480-7a044f74c233">

# #END</details>

<details>
<summary>12. Elastic Block Store (EBS) </summary>

# Elastic Block Store (EBS)

## Introduction to Elastic Block Store (EBS):

- EBS is a storage technology in AWS used for storing data in instances, analogous to local hard drives in computers.
- Instances in AWS, which are virtual machines, require storage for data, and EBS provides this capability.

## Types of EBS Volumes:

### Magnetic Volumes:

- Lowest cost option.
- Slowest performance compared to other types.

### SSD (Solid State Drive) Volumes:

- Faster performance compared to magnetic volumes.
- Offers two main types: General Purpose SSD and Provisioned IOPS SSD.

### General Purpose SSD:

- Provides a baseline performance level suitable for most applications.

### Provisioned IOPS SSD:

- Offers higher performance with a guaranteed level of IOPS (Input/Output Operations Per Second).
- Necessary when needing 10,000 or more IOPS.

## Optimization and Management of EBS:

### EBS-Optimized Instances:

- Required to fully utilize the performance capabilities of SSD storage.
- Ensures that the instance's network bandwidth is dedicated to EBS I/O.
  
### Snapshotting:

- Used for data recovery and duplication.
- Snapshots can be restored to bring an EBS volume back to a previous state or duplicated to create identical volumes for multiple instances.

### Volume Recovery:

- Involves attaching volumes from one instance to another for data access and recovery, similar to plugging in an external hard drive.

### Encryption:
- Provides volume-level encryption to protect data stored on EBS volumes.
- Ensures data security and compliance with regulations.

## Conclusion:

- EBS offers various types of volumes catering to different performance requirements and cost considerations.
- Snapshotting, volume recovery, and encryption are essential features for optimizing and managing EBS volumes effectively in AWS environments.

# #END</details>

<details>
<summary>13. Creating  </summary>

# Creating

```x

```

```x

```

```x

```

```x

```

```x

```

```x

```

# #END</details>

