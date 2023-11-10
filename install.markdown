---
layout: page
title: Installation
permalink: /install/
nav_order: 2
---

The LODA command-line tool is available for Linux, macOS and Windows. To install it, follow the instructions for your operating system below.

# Linux and macOS

Please make sure you have [git](https://git-scm.com/) installed.
To download and install LODA, run this command:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/loda-lang/loda-cpp/main/install.sh)"
```

# Windows

Before installing LODA, you need to install [Git for Windows](https://git-scm.com/download/win). Then click on the start menu and type **Git CMD**. Open this app and execute the following commands:

```
md "%USERPROFILE%\loda\bin"
cd "%USERPROFILE%\loda\bin"
curl -fsSLo loda.exe https://github.com/loda-lang/loda-cpp/releases/latest/download/loda-windows.exe
loda setup
```

## Getting Started

To evaluate the program of the OEIS sequence for the Fibonacci numbers, run `loda eval A000045`.
To run the miner to search for new or better programs, execute `loda mine` (single core) or `loda mine -p` (multi-core). A detailed overview of all commands and options is shown below.

```
Usage: loda <command> <options>

Core Commands:
  evaluate <program>  Evaluate a program to an integer sequence (see -t,-b,-s)
  export   <program>  Export a program print result (see -o)
  optimize <program>  Optimize a program and print it
  minimize <program>  Minimize a program and print it (see -t)
  profile  <program>  Measure program evaluation time (see -t)

OEIS Commands:
  mine                Mine programs for OEIS sequences (see -i,-p,-P,-H)
  check <program>     Check a program for an OEIS sequence (see -b)
  mutate <program>    Mutate a program and mine for OEIS sequences
  submit <file> [id]  Submit a program for an OEIS sequence

Admin Commands:
  setup               Run interactive setup to configure LODA
  update              Run non-interactive update of LODA and its data

Targets:
  <file>              Path to a LODA file (file extension: *.asm)
  <id>                ID of an OEIS integer sequence (example: A000045)
  <program>           Either an <file> or an <id>

Options:
  -t <number>         Number of sequence terms (default: 10)
  -b                  Print result in b-file format from offset 0
  -B <number>         Print result in b-file format from a custom offset
  -o <string>         Export format (formula,loda,pari)
  -d                  Export with dependencies to other programs
  -s                  Evaluate program to number of execution steps
  -c <number>         Maximum number of interpreter cycles (no limit: -1)
  -m <number>         Maximum number of used memory cells (no limit: -1)
  -l <string>         Log level (values: debug,info,warn,error,alert)
  -i <string>         Name of miner configuration from miners.json
  -p                  Parallel mining using default number of instances
  -P <number>         Parallel mining using custom number of instances
  -H <number>         Number of mining hours (default: unlimited)
```

## Updating LODA

To install updates, run `loda update`. If you want to change installation parameters later, run `loda setup`.
