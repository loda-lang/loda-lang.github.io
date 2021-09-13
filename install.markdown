---
layout: page
title: Installation
permalink: /install/
nav_order: 2
---

To install the LODA command-line tool, follow the instuctions for your operating system below.

# Ubuntu 18.04 (Bionic Beaver)

The following instructions install LODA in your home directory at `$HOME/loda/`.
If you want to install it somewhere else, please update the commands accordingly.

```bash
mkdir -p $HOME/loda/bin
cd $HOME/loda/bin
curl -fsSLo loda https://github.com/loda-lang/loda-cpp/releases/latest/download/loda-ubuntu-18
chmod u+x loda
./loda setup
```

# MacOS 11 (Big Sur)

Open a terminal and execute the following commands:

```bash
curl -fsSLo loda https://github.com/loda-lang/loda-cpp/releases/latest/download/loda-macos-11 && chmod u+x loda && open .
```

This opens a Finder window. Right-click on the `loda` executable and select `Open`. After you agreed to open this file for the first time, you can run `loda` on the command-line.
