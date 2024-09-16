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
