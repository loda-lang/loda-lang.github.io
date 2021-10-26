---
layout: page
title: Installation
permalink: /install/
nav_order: 2
---

To install the LODA command-line tool, follow the instuctions for your operating system below.

# Ubuntu and macOS

To install LODA in Ubuntu or macOS, you first need to map your operating system version
to a LODA executable using the following table:

| Operating System             | LODA Executable  |
|------------------------------|------------------|
| Ubuntu 18.04 (Bionic Beaver) | `loda-ubuntu-18` |
| Ubuntu 20.04 (Focal Fossa)   | `loda-ubuntu-20` |
| macOS 11 (Big Sur)           | `loda-macos-11`  |

Open a terminal and set a temporary environment variable:

```bash
export LODA_EXEC=...
```

Next, you need to choose an installation directory for the executable and all files needed
by LODA. The default is in your home directory at `$HOME/loda`.

```bash
export LODA_HOME=$HOME/loda
```

Now, you are ready to install LODA by running the following commands (copy & paste should work):

```bash
mkdir -p $LODA_HOME/bin
cd $LODA_HOME/bin
curl -fsSLo loda https://github.com/loda-lang/loda-cpp/releases/latest/download/$LODA_EXEC
chmod u+x loda
./loda setup
```

This will start the interactive setup on the command line. On macOS, you may need to follow the guidelines for 
[Safely opening apps](https://support.apple.com/en-us/HT202491).

Follow the instructions to finish the installation. After that, you can try `loda eval A000045` as a Hello World example or directly start mining using `loda mine`! 

# Windows

Windows is currently not supported, but planned for future releases.

## Updating LODA

To install updates, run `loda setup`. This command will check if updates are available and ask you whether to install them.
