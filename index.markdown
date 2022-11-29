---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
layout: home
---

LODA is an assembly language, a computational model, and a distributed tool for mining programs. You can use it to generate and search programs that compute integer sequences from the [On-Line Encyclopedia of Integer Sequences®](https://oeis.org/) (OEIS®). The goal of the project is to reverse engineer formulas and efficient algorithms for a wide range of non-trivial integer sequences.

## The LODA Language

LODA means _Lexicographical Order Descent Assembly_. It is an assembly-based language for solving number-theoretic problems. It has a simple syntax and a rich set of arithmetic operations. This enables an automated search of new programs and algorithms using a process called _program mining_. In a nutshell, we use distributed compute power, smart search algorithms and machine-learning to find
programs and formulas for the integer sequences from the OEIS database.

To get an idea of the language, you can browse through the lists of [programs](programs).
It includes basic examples, programs for "popular" integer sequences and a complete list of all mined programs.
A comprehensive overview of the language concepts and the supported operations is available in the [language specification](spec).

## Mining Programs for Integer Sequences

LODA includes tools for mining new and more efficient programs for integer sequences. There are continuously running miners generating programs and formulas every day. You can use the [mining dashboard](http://dashboard.loda-lang.org/grafana) to get an overview of the currently running miners. Below you see a chart of the number of programs since the start of the project.

<img src="https://raw.githubusercontent.com/loda-lang/loda-programs/main/program_counts.png" width=400 />

You have two options for mining programs:

1. Join the [LODA project on BOINC](https://boinc.loda-lang.org/loda/).
2. Use the [LODA command-line tool](install).

We honor your contributions: you can include your name in mined programs. All mined programs are stored in the [loda-programs](https://github.com/loda-lang/loda-programs) repository.

To receive updates on new miner findings, you can check out the [latest commits](https://github.com/loda-lang/loda-programs/commits/main) or subscribe to the [@lodaminer](https://twitter.com/lodaminer) channel on Twitter, or [join us on Slack](https://loda-lang.slack.com/). It includes a channel that posts new programs in real-time.

## Development

The source code of LODA is hosted in the [loda-lang organization](https://github.com/loda-lang) on GitHub. These are some of its main repositories:

* [loda-cpp](https://github.com/loda-lang/loda-cpp): Interpreter and miner written in C++.
* [loda-rust](https://github.com/loda-lang/loda-rust): Interpreter and web interface written in Rust.
* [loda-programs](https://github.com/loda-lang/loda-programs): Mined programs for OEIS sequences.

## Contributors

Running the LODA miners is a community project. We are grateful for the many contributions we receive.
You can view the [list of top contributors](https://boinc.loda-lang.org/loda/top_users.php) of the LODA BOINC project to get an overview.

The main development is currently done by [Christian Krause](https://github.com/ckrause) and [Simon Strandgaard](https://github.com/neoneye). We are also grateful to [Antti Karttunen](https://github.com/karttu), [Jamie Morken](https://github.com/jmorken) and [Jon Maiga](https://github.com/jonmaiga) for their contributions. If you would like to contribute code, please contact us on GitHub.

## Related Projects

* [Sequence Machine](http://sequencedb.net) is a database of mathematical conjectures on many machine-generated integer and decimal sequences.
* [Superseeker](https://oeis.org/ol.html) from the OEIS is an automatic email server for identifying integer sequences.
* [jOEIS](https://github.com/archmageirvine/joeis) is a collection of pure Java programs implementing sequences from the OEIS.
* [NumberFields@home](https://numberfields.asu.edu/NumberFields/) is a BOINC project to do research in number theory.
* [The Ramanujan Machine](https://www.ramanujanmachine.com/) is an algorithmic approach to discover new mathematical conjectures.
* [QSynt](http://grid01.ciirc.cvut.cz/~thibault/synt.html) is a program synthesis tool for OEIS integer sequences.
* [OEIS-Search-GCD-reduced](https://github.com/HugoPfoertner/OEIS-Search-GCD-reduced) is an extended search in OEIS with GCD reduction and data variants.
