---
title: IoTGoat Walkthrough
description: My Walkthrough of IoTGoat.
date: ''
categories:
- IoTGoat
- firmware
- vulnerability
published: false
---

# About IoTGoat

Taken directly from IoTGoat's [github](https://github.com/OWASP/IoTGoat), "IoTGoat is a deliberately insecure firmware created to educate software developers and security professionals with testing commonly found vulnerabilities in IoT devices."

For the purpose of the walkthrough, I assume you are on some linux machine but it's probably possible to follow along on Windows & MacOS.

# Walkthrough & Steps
## Step 0: Download the Image

I have downloaded the IoTGoat-raspberry-pi2.img file from the [v1.0 release](https://github.com/OWASP/IoTGoat/releases/tag/v1.0) found on their github. We will use this firmware image as the basis of the walkthrough for now.

## Step 1: Understanding the Image

Alright, so we have the image, now what? Well, we need to see if the image has anything useful. We can start by running binwalk. If you've never used it before, most package managers will have it available or you can visit their [github.](https://github.com/ReFirmLabs/binwalk/tree/binwalkv3)
We'll start by using binwalk to see what the file contains:
```bash
binwalk IoTGoat-raspberry-pi2.img
```
The output will be fairly so I will trim large sections to only contain the important information, you can find the full output [here.](https://github.com/morganconnors/IoTGoat-Walkthrough/blob/main/Walkthrough-Files/Step-1-binwalk)
```text
DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
29360128      0x1C00000       Squashfs filesystem, little endian, version 4.0, compression:xz, size: 3946402 bytes, 1333 inodes, blocksize: 262144 bytes, created: 2019-01-30 12:21:02
```
There's a bunch of junk info in this output, but at the very end of this file e see a Squashfs filesystem. This is useful, so we'll want to get extract this part of the image.

## Step 2: Getting some data

Since I don't really want the rest of the system right now I will use ```dd``` to only get this section. 
```bash
dd if=IoTGoat-raspberry-pi2.img bs=1 skip=29360128 of=SquashFS.bin
```

If I did want the contents of the entire system, I could run:
```bash
binwalk -e Contents/firmware-dump.bin
```

Next, we will need to make this .bin file useful.
```bash
sudo unsquashfs SquashFS.bin
```
Output:
```bash
Parallel unsquashfs: Using 4 processors
1225 inodes (1008 blocks) to write

[======================================================================================/] 2233/2233 100%

created 1011 files
created 108 directories
created 213 symlinks
created 1 device
created 0 fifos
created 0 sockets
created 0 hardlinkso unsquashfs SquashFS.bin
```

