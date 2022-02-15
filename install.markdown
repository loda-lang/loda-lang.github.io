---
layout: page
title: Installation
permalink: /install/
nav_order: 2
---

The LODA command-line tool is available for Linux, macOS and Windows. To install it, follow the instuctions for your operating system below.

# Linux and macOS

Before installing LODA on Linux or macOS, please make sure you have [git](https://git-scm.com/) installed.

Then map your operating system version to a LODA executable using the following table:

| Operating System                   | LODA Executable  |
|------------------------------------|------------------|
| Linux x86-64 (Intel/AMD64)         | `loda-linux-x86` |
| Linux ARM64 (compatible with Raspberry Pi OS (64-bit) | `loda-linux-arm64` |
| macOS 11 / 12 (Big Sur / Monterey) | `loda-macos-11`  |

Open a terminal and set a temporary environment variable:

```bash
export LODA_EXEC=...
```

Next, you need to choose an installation directory for the executable and all files needed
by LODA. The default is in your home directory at `$HOME/loda`.

```bash
export LODA_HOME=$HOME/loda
```

Now, you are ready to install LODA by running the following commands (you can use copy & paste):

```bash
mkdir -p $LODA_HOME/bin
cd $LODA_HOME/bin
curl -fsSLo loda https://github.com/loda-lang/loda-cpp/releases/latest/download/$LODA_EXEC
chmod u+x loda
./loda setup
```

This will start the interactive setup on the command line.
Follow the instructions to finish the installation. After that, you can try `loda eval A000045` as a Hello World
example, or start mining programs using `loda mine` (single core) or `loda mine -p` (multi-core). 

# Windows

Before installing LODA, you need to install [Git for Windows](https://git-scm.com/download/win). After that you can install LODA as follows.

Click on the start menu and type **Git CMD**. Open this app and execute the following commands (you can use copy & paste):

```
md "%USERPROFILE%\loda\bin"
cd "%USERPROFILE%\loda\bin"
curl -fsSLo loda.exe https://github.com/loda-lang/loda-cpp/releases/latest/download/loda-windows-19
loda setup
```

This will start the interactive setup in the command line.
Follow the instructions to finish the installation. After that, you can try `loda eval A000045` as a Hello World example or directly start mining using `loda mine`! 

## Updating LODA

To install updates, run `loda setup`. This command will check if updates are available and ask you whether to install them.
