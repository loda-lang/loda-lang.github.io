---
layout: page
title: Installation
permalink: /install/
nav_order: 2
---

The LODA command-line tool is available for Linux, macOS and Windows. To install it, follow the instructions for your operating system below. If you are only interested in program mining, you can also join the [LODA project on BOINC](https://boinc.loda-lang.org/loda/) and skip the manual installation.

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

Commands:
  eval      <program>  Evaluate an integer sequence program (see -t,-b,-s)
  check     <program>  Verify correctness of an integer sequence program (see -b)
  mine                 Mine programs for integer sequences (see -i,-p,-P,-H)
  submit  <file> [id]  Submit an integer sequence program to the central repository
  export    <program>  Export a program and print the result (see -o,-t)
  optimize  <program>  Optimize a program and print the result
  minimize  <program>  Minimize a program and print the result (see -t)
  profile   <program>  Measure program evaluation time (see -t)
  fold <program> <id>  Fold a subprogram given by ID into a seq-operation
  unfold    <program>  Unfold the first seq-operation of a program
  mutate    <program>  Mutate a program to mine for integer sequences
  setup                Run interactive setup to configure LODA
  update               Update integer sequence and program data
  upgrade              Check for and install the latest LODA version

Targets:
  <file>               Path to a LODA file (file extension: *.asm)
  <id>                 ID of an integer sequence (example: A000045)
  <program>            Either an <file> or an <id>

Options:
  -t <number>          Number of sequence terms (default: 8)
  -b                   Print result in the OEIS b-file format
  -o <string>          Export format (formula,loda,pari,range)
  -d                   Export with dependencies to other programs
  -s                   Evaluate program and return number of execution steps
  -c <number>          Maximum number of execution steps (no limit: -1)
  -m <number>          Maximum number of used memory cells (no limit: -1)
  -z <number>          Maximum evaluation time in seconds (no limit: -1)
  -l <string>          Log level (values: debug,info,warn,error,alert)
  -i <string>          Name of miner configuration from miners.json
  -p                   Parallel mining using default number of instances
  -P <number>          Parallel mining using custom number of instances
  -H <number>          Number of mining hours (default: unlimited)
```

## Upgrading LODA

To upgrade to the latest version, run `loda upgrade`. If you want to change installation parameters later, run `loda setup`.
