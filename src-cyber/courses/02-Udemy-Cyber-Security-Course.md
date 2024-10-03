# +Udemy-Cyber-Security-Course

## [COURSE](https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/learn/lecture/21375116#overview)

<details>
<summary>1. Private IP Addresses </summary>

## Private IP Addresses

- Range from 10.0.0.0 to 10.255.255.255 — a 10.0.0.0 network with a 255.0.0.0 or an /8 (8-bit) mask 
- Range from 172.16.0.0 to 172.31.255.255 — a 172.16.0.0 network with a 255.240.0.0 (or a 12-bit) mask
- A 192.168.0.0 to 192.168.255.255 range, which is a 192.168.0.0 network masked by 255.255.0.0 or /16 
- A special range 100.64.0.0 to 100.127.255.255 with a 255.192.0.0 or /10 network mask

# #END</details>

<details>
<summary>2. What is DNS ? </summary>

## What is DNS ?

Domain Name Server (DNS) is a standard protocol that helps Internet users discover websites using human readable addresses. Like a phonebook which lets you look up the name of a person and discover their number, DNS lets you type the address of a website and automatically discover the Internet Protocol (IP) address for that website. 

# #END</details>

<details>
<summary>3. What is DHCP ? </summary>

## What is DHCP ?

Dynamic Host Configuration Protocol (DHCP) is a network management protocol used to automate the process of configuring devices on IP networks, thus allowing them to use network services such as DNS, NTP, and any communication protocol based on UDP or TCP. A DHCP server dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks. 

# #END</details>

<details>
<summary>3. What is a Router ?  </summary>

## What is a Router ? 

- A router is a device that communicates between the internet and the devices in your home that connect to the internet. As its name implies, it “routes” traffic between the devices and the internet.
- A router is a physical or virtual appliance that passes information between two or more packet-switched computer networks. A router inspects a given data packet's destination Internet Protocol address (IP address), calculates the best way for it to reach its destination and then forwards it accordingly.
- A router is a common type of gateway. It is positioned where two or more networks meet at each point of presence on the internet. Hundreds of routers might forward a single packet as it moves from one network to the next on the way to its final destination.

# #END</details>

<details>
<summary>4. Penetration Testing Steps  </summary>

## Penetration Testing Steps

1. Information Gathering
2. Scanning
3. Gaining Access (Exploitation)
4. Maintaining Access
5. Covering Tracks

# #END</details>

<details>
<summary>5. Linux Shortcuts - Print working directory </summary>

## Linux Shortcuts - Print working directory

```x
pwd
```

/home/whitehacker

# #END</details>

<details>
<summary>6. Linux Shortcuts - List directory Files </summary>

## Linux Shortcuts - List directory Files

```x
ls
```

Desktop Documents Music Pictures Public Templates Videos 

# #END</details>

<details>
<summary>7. Linux Shortcuts - Open a directory </summary>

## Linux Shortcuts - Open a directory

```x
cd Documents
pwd
```

/home/whitehacker/Documents

# #END</details>

<details>
<summary>8. Linux Shortcuts - Go one step back </summary>

## Linux Shortcuts - Go one step back

```x
cd ..
pwd
```

/home/whitehacker

# #END</details>

<details>
<summary>9. Linux Shortcuts - Create a File </summary>

## Linux Shortcuts - Create a File

```x
cd Desktop
touch file1.txt
ls
```

file1.txt

# #END</details>

<details>
<summary>10. Linux Shortcuts - Write Content into File (Replace all)</summary>

## Linux Shortcuts - Write Content into File (Replace all)

```x
echo Today is a really good day! > file1.txt
ls
```

file1.txt

# #END</details>

<details>
<summary>11. Linux Shortcuts - Read Content from File </summary>

## Linux Shortcuts - Read Content from File

```x
cat file1.txt
```

Today is a really good day!

# #END</details>

<details>
<summary>12. Linux Shortcuts - Add Content to File (Append new line) </summary>

## Linux Shortcuts - Add Content to File (Append new line)

```x
echo Hello World! >> file1.txt
cat file1.txt
```

```txt
Today is a really good day!
Hello World!
```

# #END</details>

<details>
<summary>13. Linux Shortcuts - Use Nano to Create File </summary>

## Linux Shortcuts - Use Nano to Create File

```x
nano file2.txt
```

<img width="1131" alt="image" src="https://github.com/user-attachments/assets/cd394c3a-6996-4579-a926-3b0ce9e533f0">

## To Save and Exit Nano

```x
Ctrl + O
Enter
Ctrl + X
```

## To View created File

```x
cat file2.txt
```

```x
This is the second File
I love the Summers more
```

<img width="1131" alt="image" src="https://github.com/user-attachments/assets/c476cd36-9054-4d07-af5b-e49dd5fc0cdb">

# #END</details>

<details>
<summary>14. Linux Shortcuts - Create and Run python File with Nano </summary>

## Linux Shortcuts - Create and Run python File with Nano

```x
nano greeting.py
```

<img width="1131" alt="image" src="https://github.com/user-attachments/assets/c649366d-5099-452c-aba4-0ae538b72d32">

## Run Python file

```x
python3 greeting.py
```

<img width="1131" alt="image" src="https://github.com/user-attachments/assets/7a04f921-3796-47cc-a86f-52629e3fd627">

# #END</details>

<details>
<summary>15. Linux Shortcuts - Create New Directory </summary>

## Linux Shortcuts - Create New Directory

```x
mkdir myfolder
ls
```

file1.txt  file2.txt  greeting.py  myfolder

<img width="1131" alt="image" src="https://github.com/user-attachments/assets/e4b0c859-083a-49ca-91b8-5b883c035f69">

# #END</details>

<details>
<summary>16. Linux Shortcuts - Move File into Directory </summary>

## Linux Shortcuts - Move File into Directory

```x
mv greeting.py myfolder
ls
```

file1.txt  file2.txt  myfolder

<img width="1131" alt="image" src="https://github.com/user-attachments/assets/6021d2e2-efc2-4fc5-8798-6e5ec87eb532">

# #END</details>

<details>
<summary>17. Linux Shortcuts - Copy a File </summary>

## Linux Shortcuts - Copy a File

```x
cp file2.txt file3.txt
```

<img width="995" alt="image" src="https://github.com/user-attachments/assets/e3dde66b-dfe9-451f-b1f4-b96d62eaf21a">

# #END</details>

<details>
<summary>18. Linux Shortcuts - Delete a File </summary>

## Linux Shortcuts - Delete a File

```x
rm file3.txt
```

<img width="995" alt="image" src="https://github.com/user-attachments/assets/6bb9f671-0c89-4bbb-a536-105bb32b6e88">

# #END</details>

<details>
<summary>19. Linux Shortcuts - Delete a Directory </summary>

## Linux Shortcuts - Delete a Directory

```x
cd myfolder
mkdir myfolder2
ls
rm -r myfolder2
```

<img width="995" alt="image" src="https://github.com/user-attachments/assets/63ab122d-5303-4eef-b277-1da99eadb419">

# #END</details>

<details>
<summary>20. Linux Shortcuts - Switching to Sudo Super User </summary>

## Linux Shortcuts - Switching to Sudo Super User

```x
sudo su

exit
```

<img width="995" alt="image" src="https://github.com/user-attachments/assets/9a7cb8fd-7bb2-4eef-aba7-341b299ff096">

# #END</details>

<details>
<summary>21. Information Gathering - Using nslookup, whois and ping </summary>

## Information Gathering - Using nslookup, whois and ping

```x
ping facebook.com
ping etf.bg.ac.rs
```

```x
nslookup facebook.com
nslookup etf.bg.ac.rs
```

```x
whois facebook.com
whois etf.bg.ac.rs
```

<img width="1067" alt="image" src="https://github.com/user-attachments/assets/0a73613e-ba75-42b4-aa1c-517b3696d4fa">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/da773dab-e3c2-4c9c-b152-ad6f58cf0dc9">
<img width="1076" alt="image" src="https://github.com/user-attachments/assets/8f3ce071-078c-40b5-bbb8-3c9f6ddf65c8">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/8396128a-8f56-4b32-b24e-250b4a614299">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/a6342c87-6006-4c9e-a793-07f3c61d8172">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/879358a6-9779-460e-9a55-2736bb597895">

# #END</details>

<details>
<summary>22. Information Gathering - Using Whatweb Stealth Scan </summary>

## Information Gathering - Using Whatweb Stealth Scan

```x
whatweb
whatweb --help
whatweb arh.bg.ac.rs
whatweb arh.bg.ac.rs -v
```

<img width="1067" alt="image" src="https://github.com/user-attachments/assets/5404d603-0d3e-437e-83e3-4363d56fd8df">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/5b642d1b-4abe-4eb7-8589-c38d0f0b8ddf">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/d0a69b77-5bed-4a3b-96d6-3d2cb1f5e88d">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/3a3a0ac7-3364-4b53-b790-57968aef2944">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/e89dab81-841e-4aeb-9b52-213e12c28bbd">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/8d84b5d3-b956-4a87-a6da-84ff712fe1a1">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/906e4da2-cdbe-4ccf-be41-892b9d2e35e4">

# #END</details>

<details>
<summary>23. Information Gathering - Using Whatweb for range of IP Addresses </summary>

## Information Gathering - Using Whatweb for range of IP Addresses

```x
ifconfig
--> 10.0.2.4

whatweb 10.0.2.1-10.0.2.255 --aggression 3 -v --no-errors
```

```x
nslookup facebook.com
whois facebook.com
--> 157.240.3.35

whatweb 157.240.3.30-157.240.3.40 --aggression 1 -v --no-errors
```

<img width="1067" alt="image" src="https://github.com/user-attachments/assets/1655b188-6c1b-48ad-b28d-cdcb5f31601d">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/9c85f88f-9df2-4dd6-81a1-895eb959f436">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/06736936-6103-4aec-9308-ad3710e6fad3">

# #END</details>

<details>
<summary>24. Information Gathering - Using Whatweb for saving output in File </summary>

## Information Gathering - Using Whatweb for saving output in File

```x
whatweb --help

whatweb 157.240.3.30-157.240.3.40 --aggression 1 -v --no-errors --log-verbose=output
whatweb 10.0.0.1-10.0.0.255 --aggression 3 -v --no-errors --log-verbose=outputhome
```

<img width="1067" alt="image" src="https://github.com/user-attachments/assets/888c6f13-fdcb-4066-9218-f010d53c63f8">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/28f6854e-ab79-40bb-8358-21bd8ff4a29b">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/bc713b0b-9ff0-4d44-b7fd-796df3e71ee8">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/5b1731c1-6b07-4b9c-ab0b-8a88b73ef470">

# #END</details>

<details>
<summary>25. Information Gathering - Gathering Emails Using theHavester & Hunter.io </summary>

## Information Gathering - Gathering Emails Using theHavester & Hunter.io

```x
theHarvester --help
theHarvester-d ucalgary.ca -b all
theHarvester-d ucalgary.ca -b google
theHarvester-d ucalgary.ca -b all -l 500
```

```x
www.hunter.io
```

<img width="1094" alt="image" src="https://github.com/user-attachments/assets/9494eb92-5c56-4a06-9658-88da379fea01">
<img width="1094" alt="image" src="https://github.com/user-attachments/assets/1b321a60-a357-45c0-b93d-e18bf9ec7fd3">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/5cbd927a-a0c5-4e13-8d73-049cc9c739c9">

# #END</details>

<details>
<summary>26. Information Gathering - Finding Usernames with Sherlock </summary>

## Information Gathering - Finding Usernames with Sherlock

```x
git clone https://github.com/Tuhinshubhra/RED_HAWK
git clone https://github.com/sherlock-project/sherlock
cd sherlock
pipx install sherlock_project
sherlock --version
sherlock --help
sherlock PoojaMedia
```

<img width="1067" alt="image" src="https://github.com/user-attachments/assets/016b21c4-4b15-4871-ae32-75bac54a74dc">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/fe56ba23-b053-4638-ab7c-ca13d7f8374b">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/01a40877-3506-4539-84e1-75c8404db967">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/136b757f-e313-4c86-ab88-4d83c4909cdd">
<img width="1067" alt="image" src="https://github.com/user-attachments/assets/7385149e-d4e7-4143-8447-54029010b79b">
<img width="1094" alt="image" src="https://github.com/user-attachments/assets/3c6d5bdc-ed17-4ce1-90cc-de18af6eecd5">
<img width="1094" alt="image" src="https://github.com/user-attachments/assets/af9927cd-b4f1-4773-9282-683ae053d2e2">

# #END</details>

# +Light-House-Cyber-Security-Course

## [COURSE](https://web.compass.lighthouselabs.ca/p/cyber/days/w01d1)

# Cyber Security Training Course

- Chapter 1 - Introduction to Cyber Security
    - What is Cyber Security?
        
        
- Chapter 2 - Linux Basics
    - Linux Commands I
        - Get all Users in Linux
            
            `cat /etc/passwd`
            
        - Stop Firewall
            
            sudo systemctl stop ufw
            
            sudo systemctl stop firewalld
            
    - Linux Commands II
        - Check if Firewall is running
            
            sudo ufw status
            
            sudo systemctl status ufw
            
            sudo systemctl status firewalld
            
        - Stop Firewall
            
            sudo systemctl stop ufw
            
            sudo systemctl stop firewalld
            
        - Start Firewall
            
            sudo systemctl start ufw
            
            sudo systemctl start firewalld
            
        - Disable firewall
            
            sudo ufw disable
            
            sudo systemctl disable ufw
            
            sudo systemctl disable firewalld
            
        - Enable firewall
            
            sudo ufw enable
            
            sudo systemctl enable ufw
            sudo systemctl enable firewalld
            
        
- Chapter 3 - Python Basics
    - Python Basics I
        - Comments
            
            ```python
            # This is a comment. Name is a variable. It contains a string
            name = input("Please, type in your name: ")
            print("Hello " + name + ", it's very nice to meet you!")
            ```
            
        - Regex
            - Regex Practice Websites
                
                [regex101: build, test, and debug regex](https://regex101.com/)
                
                [RegExr: Learn, Build, & Test RegEx](https://regexr.com/3e4a2)
                
            - Regex Cheat Sheet
                
                [web.mit.edu](https://web.mit.edu/hackl/www/lab/turkshop/slides/regex-cheatsheet.pdf)
                
                [Examples of regular expressions - Google Workspace Admin Help](https://support.google.com/a/answer/1371417?hl=en)
                
    - Python Basics II
        - 
            
            sudo ufw status
            
            sudo systemctl status ufw
            
            sudo systemctl status firewalld
            
- Chapter 4 - Information Gathering (Reconnaissance)
    - Linux Commands I
- Chapter 5 - Scanning
    - Nmap
    - Wireshark
- Chapter 6 - Monitoring
    - Paessler PRTG
        - Lighthouse Labs
            
            [Understanding Paessler PRTG (Cyber Security Immersive)](https://web.compass.lighthouselabs.ca/p/cyber/days/w02d3/activities/2851)
            
            [Setting up PRTG (Cyber Security Immersive)](https://web.compass.lighthouselabs.ca/p/cyber/days/w02d3/activities/2852)
            
        - Video 1 - PRTG Introduction
            
            [Video: Quick overview of PRTG](https://www.paessler.com/support/videos-and-webinars/videos/quick-overview)
            
        - Video 2 - PRTG Architecture and Components
            
            [Video: Distributed monitoring with PRTG](https://www.paessler.com/support/videos-and-webinars/videos/distributed_monitoring)
            
        - Video 3 - PRTG Device Tree
            
            [https://www.youtube.com/watch?v=2YPMKzLSa10&ab_channel=PRTGTutorialsbyPaessler](https://www.youtube.com/watch?v=2YPMKzLSa10&ab_channel=PRTGTutorialsbyPaessler)
            
        - Video 4 - PRTG use Auto-Discovery Groups (Create Templates)
            
            [https://www.youtube.com/watch?v=jVZR1CbAGSc&ab_channel=PRTGTutorialsbyPaessler](https://www.youtube.com/watch?v=jVZR1CbAGSc&ab_channel=PRTGTutorialsbyPaessler)
            
        - **PRTG Tutorials by Paessler (YouTube)**
            
            [Overview](https://www.youtube.com/playlist?list=PLo96JbGt1LS-twIdz3By52poqgHEZ9QI3)
            
            [PRTG Tutorials by Paessler](https://www.youtube.com/@PRTGtutorials/videos)
            
        
    - Types of Cyber Attacks
        - Top 20 Most Common Cyber Attacks
            
            [Top 20 Most Common Types Of Cyber Attacks | Fortinet](https://www.fortinet.com/resources/cyberglossary/types-of-cyber-attacks)
            
    - Risk
        
        Risk refers to the potential for loss, damage, or destruction of assets or data resulting from a threat exploiting a vulnerability. 
        
        - It's the intersection of assets, threats, and vulnerabilities.
        - **Components**: Risk is typically assessed based on the likelihood of a threat exploiting a vulnerability and the potential impact on the organization.
        - **Example**: The risk of a data breach increases if a company's web server has known vulnerabilities and faces frequent cyberattacks.
    - Vulnerability
    - Exploit
    - Threat
    - Virus-Total Search
        
        [VirusTotal](https://www.virustotal.com/gui/home/search)
        
    - Virus-Share Hashes
        
        [VirusShare.com](https://virusshare.com/hashes)
        
- Chapter 7 - Terminologies
    - Paessler PRTG
        - Lighthouse Labs
            
            [Understanding Paessler PRTG (Cyber Security Immersive)](https://web.compass.lighthouselabs.ca/p/cyber/days/w02d3/activities/2851)
            
            [Setting up PRTG (Cyber Security Immersive)](https://web.compass.lighthouselabs.ca/p/cyber/days/w02d3/activities/2852)
            
        - Video 1 - PRTG Introduction
            
            [Video: Quick overview of PRTG](https://www.paessler.com/support/videos-and-webinars/videos/quick-overview)
            
        - Video 2 - PRTG Architecture and Components
            
            [Video: Distributed monitoring with PRTG](https://www.paessler.com/support/videos-and-webinars/videos/distributed_monitoring)
            
        - Video 3 - PRTG Device Tree
            
            [https://www.youtube.com/watch?v=2YPMKzLSa10&ab_channel=PRTGTutorialsbyPaessler](https://www.youtube.com/watch?v=2YPMKzLSa10&ab_channel=PRTGTutorialsbyPaessler)
            
        - Video 4 - PRTG use Auto-Discovery Groups (Create Templates)
            
            [https://www.youtube.com/watch?v=jVZR1CbAGSc&ab_channel=PRTGTutorialsbyPaessler](https://www.youtube.com/watch?v=jVZR1CbAGSc&ab_channel=PRTGTutorialsbyPaessler)
            
        - **PRTG Tutorials by Paessler (YouTube)**
            
            [Overview](https://www.youtube.com/playlist?list=PLo96JbGt1LS-twIdz3By52poqgHEZ9QI3)
            
            [PRTG Tutorials by Paessler](https://www.youtube.com/@PRTGtutorials/videos)
            
        
    - Types of Cyber Attacks
        - Top 20 Most Common Cyber Attacks
            
            [Top 20 Most Common Types Of Cyber Attacks | Fortinet](https://www.fortinet.com/resources/cyberglossary/types-of-cyber-attacks)
            
    - Risk
        
        Risk refers to the potential for loss, damage, or destruction of assets or data resulting from a threat exploiting a vulnerability. 
        
        - It's the intersection of assets, threats, and vulnerabilities.
        - **Components**: Risk is typically assessed based on the likelihood of a threat exploiting a vulnerability and the potential impact on the organization.
        - **Example**: The risk of a data breach increases if a company's web server has known vulnerabilities and faces frequent cyberattacks.
    - Vulnerability
    - Exploit
    - Threat
    - Virus-Total Search
        
        [VirusTotal](https://www.virustotal.com/gui/home/search)
        
    - Virus-Share Hashes
        
        [VirusShare.com](https://virusshare.com/hashes)
        
- Chapter 8 - Frameworks
    - NIST
        - Search NIST NVD (National **Vulnerability Database)**
            
            [NVD - Search and Statistics](https://nvd.nist.gov/vuln/search)
            
    - MITRE ATT&CK ( MITRE Adversarial Tactics, Techniques, and Common Knowledge)
        - Matrices Website
            
            [Matrix - Enterprise - Linux | MITRE ATT&CK®](https://attack.mitre.org/matrices/enterprise/linux/)
            
        - Search CVE (**Common Vulnerabilities and Exposures)** List
            
            [CVE -
            
            Search CVE List](https://cve.mitre.org/cve/search_cve_list.html)
            
- Tutorials
    - python.org
        
        [Python For Beginners](https://www.python.org/about/gettingstarted/)
        
    - Python Datetime
        
        [datetime — Basic date and time types](https://docs.python.org/3/library/datetime.html)
        
    - Netacad
        
        [Python Essentials 1 – Skills for All](https://www.netacad.com/courses/python-essentials-1?courseLang=en-US&instance_id=d0f08829-e868-4dd0-b7d5-b5efaeb6b1c9)
        
    - W3schools
        
        [W3Schools.com](https://www.w3schools.com/cybersecurity/index.php)
        
        [W3Schools.com](https://www.w3schools.com/python/default.asp)
        
    - TutorialTeacher
        
        [TutorialsTeacher - Learn Technologies](https://www.tutorialsteacher.com/)
        
        [Python Tutorials: Learn Python Step-by-Step](https://www.tutorialsteacher.com/python)
        
    - RealPython
        
        [Variables in Python – Real Python](https://realpython.com/python-variables/)
        
        [Strings and Character Data in Python – Real Python](https://realpython.com/python-strings/)
        
        [Lists vs Tuples in Python – Real Python](https://realpython.com/python-lists-tuples/)
        
        [Dictionaries in Python – Real Python](https://realpython.com/python-dicts/)
        
        [Conditional Statements in Python – Real Python](https://realpython.com/python-conditional-statements/)
        
        [Python "while" Loops (Indefinite Iteration) – Real Python](https://realpython.com/python-while-loop/)
        
- Interview Questions
    - Set 1
        - Question 1 - **What does the `ls` command do?**
            
             It lists the contents of a directory.
            
        - Question 2 - **How do you view hidden files and directories in Linux?**
            
            Use the **`ls -a`** command to view hidden files and directories.
            
        - Question 3 - **How do you view file and directory permissions in Linux?**
            
            Use the **`ls -al`** command to view permissions.
            
        - Question 4 - **How do you represent Linux file permissions of a directory?**
            
            Linux File permissions can be represented with read-write-execute commands.
            
             `d rwxr-xr-x 15 user user 4096 Nov 11 10:22 user`  
            
             `(directory) (user)(group)(others) (No. of files) (owner) (group) (size of dir) (Date/Time of last Access) (dir name)`
            
        - Question 5 - **How do you convert Linux file permissions to Numerical format?**
            
            r=4, w=2, x=1
            
             `rw-r----x = (rw-)(r--)(--x) = (4+2)(4)(1) = 641`  (641)
            
             `rwxrwxrwx = (rwx)(rwx)(rwx) = (4+2+1)(4+2+1)(4+2+1) = 777`  (777)
            
        - Question 6 - **What command is used to change file or directory permissions in Linux?**
            
            The **`chmod`** command is used to change file permissions.
            
            Example 1: Change Permissions with Number
            
            `sudo chmod 770 ~/Lantern-Labs/development-scripts` 
            
            Example 2: Change Permission with r-w-x
            
            `sudo chmod rwxrwxrwx ~/Lantern-Labs/development-scripts`  (641)
            
            `sudo chmod rw-r----x ~/Lantern-Labs/development-scripts`  (777)
            
        - Question 7 - **How do you display the current directory you are in, in Linux?**
            
            Use the **`pwd`** command to display the present working directory.
            
        - Question 8 - **How do you create a new directory in Linux?**
            
            The **`mkdir`** command is used to create a new directory.
            
            Example: 
            
            `sudo mkdir ~/Lantern-Labs` 
            
            `sudo mkdir ~/Lantern-Labs/research-projects` 
            
            `sudo mkdir ~/Lantern-Labs/financial-reports` 
            
            `sudo mkdir ~/Lantern-Labs/development-scripts` 
            
        - Question 9 - **How do you create a User Account in Linux?**
            
            The **`sudo useradd <user>`** command is used to create a new User Account.
            
            Example: 
            
            `sudo useradd aiden` 
            
            `sudo useradd bella` 
            
            `sudo useradd calvin` 
            
            `sudo useradd dana` 
            
        - Question 10 - **How do you create a Group Account in Linux?**
            
            The **`sudo groupadd <group>`** command is used to create a Group Account.
            
            Example: 
            
            `sudo groupadd research_team`  
            
            `sudo groupadd finance_team`  
            
            `sudo groupadd dev_team`  
            
        - Question 11 - **How do you assign a User Account to a Group Account in Linux?**
            
            The **`sudo usermod -aG <group> <user>`** command is used to create a Group Account.
            
            Example: 
            
            `sudo usermod -aG research_team aiden`  
            
            `sudo usermod -aG finance_team bella`  
            
            `sudo usermod -aG dev_team calvin`  
            
        - Question 12 - **How do you list all User Accounts in Linux?**
            
            The **`/etc/passwd`** contains the User Accounts.
            
            Example: 
            
            `sudo **cat /etc/passwd**`  
            
            `sudo cut -d: -f1 /etc/passwd`  
            
        - Question 13 - **How do you list all Group Accounts in Linux?**
            
            The **`/etc/group`** contains the Group Accounts.
            
            Example: 
            
            `sudo **cat /etc/group**`  
            
            `sudo cut -d: -f1 /etc/group`  
            
        - Question 14 - **How do you assign ownership of Directories to Accounts in Linux?**
            
            The **`sudo chown :<account> <directory>`** command assigns a directory to an Account.
            
            Example: 
            
            `sudo **chown :research_team ~/Lantern_Labs/research**`  
            
            `sudo **chown :finance_team ~/Lantern_Labs/financial**`  
            
            `sudo **chown :dev_team ~/Lantern_Labs/development**`  
            
        - Question 15 - **How do you view ONLY User Processes in Linux?**
            
            The **`ps`** command shows the User Processes.
            
        - Question 16 - **How do you view all Processes (User and OS) in Linux?**
            
            The **`ps -aux`** command shows all Processes.
            
            <aside>
            💡
            
            To Get all Processes with a particular process name:
            
            </aside>
            
            `ps -aux | grep <process name>`  
            
            `ps -aux | grep firefox`  
            
            <aside>
            💡
            
            To Show the first 15 lines of all Processes:
            
            </aside>
            
            `ps -aux | head -n 15`
            
            <aside>
            💡
            
            To Get all Processes in real-time:
            
            </aside>
            
            `top` 
            
        - Question 17 - **How do you stop/kill processes by their process name in Linux?**
            
            The **`sudo pkill <process name>`** command stops the process.
            
            Example: 
            
            `sudo pkill firefox`  
            
            `sudo pkill wireshark`  
            
        - Question 18 - **How do you stop/kill processes by their process ID (PID) in Linux?**
            
            The **`sudo kill <process ID>`** command stops the process.
            
            Example: 
            
            `sudo pgrep firefox`  ⇒ (4420)
            
            `sudo kill 4420`  
            
            <aside>
            💡
            
            To Force kill a process by ID:
            
            </aside>
            
            `sudo kill -9 4420`  
            
    - Set 2
        - Question 1 - **What is network segmentation and why is it important?**
            
            Network segmentation is the practice of dividing a network into smaller, distinct subnetworks to improve performance and increase security by limiting access and reducing the broadcast domain.
            
        - Question 2 - **Can you name and briefly describe the 7 layers of the OSI model?**
            1. **Physical Layer:** Deals with the hardware connections and electrical signals.
            2. **Data Link Layer:** Manages frame-level communication, including MAC addresses.
            3. **Network Layer:** Handles packet forwarding and routing (e.g., IP addresses).
            4. **Transport Layer:** Manages end-to-end communication and error checking (TCP/UDP).
            5. **Session Layer:** Manages sessions and connections between applications.
            6. **Presentation Layer:** Translates data between the application layer and the network format.
            7. **Application Layer:** Interacts directly with end-user software (e.g., HTTP, FTP).
        
        ### **TCP/IP concepts and their use on the network**
        
        1. **Q: What is the difference between TCP and UDP?**
            - **A:** TCP (Transmission Control Protocol) is connection-oriented and ensures reliable data transfer with error checking and acknowledgments. UDP (User Datagram Protocol) is connectionless and faster but does not guarantee delivery or order.
        
        ### **CIA triad**
        
        1. **Q: What does CIA stand for in cybersecurity?**
            - **A:** CIA stands for Confidentiality, Integrity, and Availability, which are the three core principles to guide information security policies.
        
        ### **How changes to a network affect confidentiality, integrity, availability**
        
        1. **Q: How can a change to network configuration impact the CIA triad?**
            - **A:** Changes can potentially expose sensitive data (affecting confidentiality), alter data (compromising integrity), or disrupt services (affecting availability).
        
        ### **Adjusting an existing network**
        
        1. **Q: What steps would you take to add a new subnet to an existing network?**
            - **A:** Identify network requirements, update network diagrams, configure network devices like routers and switches, update IP addressing schemes, and test the new subnet for connectivity.
        
        ### **Risks, vulnerabilities, exploits, and threats**
        
        1. **Q: What is the difference between vulnerabilities, threats, and exploits?**
            - **A:** A vulnerability is a weakness that can be exploited. A threat is a potential cause of an unwanted incident. An exploit is the actual instance where a vulnerability is used to cause harm.
        
        ### **Risk/vulnerability assessment tools**
        
        1. **Q: Can you name some common tools used for vulnerability assessment?**
            - **A:** Common tools include Nessus, OpenVAS, Metasploit, and Nmap.
        
        ### **Appropriate mitigations**
        
        1. **Q: What are some mitigations for SQL injection attacks?**
            - **A:** Use parameterized queries, stored procedures, and input validation to prevent SQL injection attacks.
        
        ### **The threat landscape**
        
        1. **Q: What is the current major threat facing organizations?**
            - **A:** Ransomware is a significant threat, where attackers encrypt data and demand a ransom for its release.
        2. **Q: How can phishing attacks be mitigated?**
            - **A:** Through user training, implementing email filtering solutions, and using multi-factor authentication (MFA).
        
        ### **Basic cryptographic processes**
        
        1. **Q: What is encryption and why is it important?**
            - **A:** Encryption is the process of converting plaintext into ciphertext to protect data from unauthorized access during transmission or storage.
        2. **Q: How does the decryption process work?**
            - **A:** Decryption converts ciphertext back into plaintext using a specific key.
        
        ### **Key exchange**
        
        1. **Q: What is key exchange in cryptographic systems?**
            - **A:** Key exchange is the process of securely exchanging cryptographic keys between parties to enable encrypted communication.
        
        ### **Signed certificates**
        
        1. **Q: What is the role of a signed certificate in cybersecurity?**
            - **A:** A signed certificate ensures the authenticity of a public key, confirming the identity of the entity that holds the corresponding private key.
        
        ### **Log, system, and network traffic analysis and mapping**
        
        1. **Q: Why is log analysis important in cybersecurity?**
            - **A:** Log analysis helps in identifying security incidents, understanding system behaviors, and ensuring compliance with security policies.
        2. **Q: What is network traffic analysis and why is it important?**
            - **A:** Network traffic analysis involves monitoring data flow across a network to detect unusual activities, potential intrusions, or policy violations.
        
        ### **Demographic and chronological questioning**
        
        1. **Q: How have advancements in technology changed the threat landscape over the past decade?**
            - **A:** Advancements like IoT, cloud computing, and AI have expanded the attack surface, leading to more sophisticated threats such as advanced persistent threats (APTs) and AI-powered attacks.
        
        ### **Threats that may affect various types of organizations**
        
        1. **Q: What specific threats might a healthcare organization face?**
            - **A:** Healthcare organizations are particularly vulnerable to ransomware, data breaches, and insider threats due to valuable personal health information (PHI).
        
        ### **Managing single-site networks**
        
        1. **Q: What are the best practices for managing a single-site network?**
            - **A:** Implement strong access controls, use network segmentation, regularly update and patch systems, use firewalls and intrusion detection systems, and perform regular audits.
        
        ### **Risks, vulnerabilities, exploits, and threats**
        
        1. **Q: How can you prioritize vulnerabilities after a scan?**
            - **A:** Prioritization is based on the severity of the vulnerabilities (e.g., CVSS score), the criticality of the affected systems, and the potential impact on the business.
        
        ### **Network segmentation**
        
        1. **Q: What benefits does network segmentation provide for security?**
            - **A:** It limits the spread of malware, contains breaches, reduces the attack surface, and helps in regulatory compliance.
        
        ### **Adjusting an existing network**
        
        1. **Q: How would you approach expanding the storage capacity of a network?**
            - **A:** Assess current and projected storage needs, choose scalable storage solutions (e.g., SAN, NAS, cloud storage), plan for data migration, and ensure redundancy and backups.
        
        ### **Basic cryptographic processes**
        
        1. **Q: What is the importance of key management in encryption?**
            - **A:** Proper key management ensures that cryptographic keys are stored, used, and retired securely, preventing unauthorized access to encrypted data.
        
        ### **Log, system, and network traffic analysis and mapping**
        
        1. **Q: What tools can be used for network traffic analysis?**
            - **A:** Tools like Wireshark, SolarWinds, and Splunk can be used for analyzing network traffic.
        
        ### **Risk/vulnerability assessment tools**
        
        1. **Q: What features should a good risk assessment tool have?**
            - **A:** It should have comprehensive scanning capabilities, a user-friendly interface, detailed reporting, integrated threat intelligence, and support for regulatory compliance.
- Projects
    - Create Citation
        
        [https://www.citationmachine.net/apa](https://www.citationmachine.net/apa)
        
        [Citation Machine®: Format & Generate - APA, MLA, & Chicago](https://www.citationmachine.net/)
        
    - Project WK 1
        
        https://youtu.be/A3jS6DzteR0
        
        [https://youtu.be/A3jS6DzteR0](https://youtu.be/A3jS6DzteR0)
        
    - Project WK 2
        
        https://youtu.be/A3jS6DzteR0
        
        [https://youtu.be/A3jS6DzteR0](https://youtu.be/A3jS6DzteR0)
        
- Community Repositories
    - PyPI
        
        [PyPI · The Python Package Index](https://pypi.org/)
        
- References & Readings
    - WK3
        - **Bash scripting vs Python**
            
            [Bash scripting vs Python](https://linuxconfig.org/bash-scripting-vs-python)
            
        - Python Escape Characters
            
            [Escape Characters — Python Reference (The Right Way) 0.1 documentation](https://python-reference.readthedocs.io/en/latest/docs/str/escapes.html)

<details>
<summary>1. Introduction </summary>

## Introduction

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

```x

```

# #END</details>
