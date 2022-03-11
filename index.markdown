---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
layout: home
---

LODA is an assembly language, a computational model, and a distributed tool for mining programs. You can use it to generate and search programs that compute integer sequences from the [On-Line Encyclopedia of Integer Sequences®](https://oeis.org/) (OEIS®). The goal of the project is to find new formulas and more efficient algorithms for a wide range of non-trivial integer sequences.

## The LODA Language

LODA means _Lexicographical Order Descent Assembly_. It is an assembly-based language for solving number-theoretic problems. Its simple syntax combined with its powerful operations makes it ideal for automated search of new programs and algorithms using a process called _program mining_.

For an overview of the LODA language, you can read its [specification](spec). It includes a reference of its operations with examples. You can use the [online editor](editor){: .btn } to try it out yourself. For more programs, you can browse through the lists of mined programs for integer sequences from the OEIS. There are currently more than 65,000 programs available. You can find lists with descriptions and links below. Except for a few hand-witten ones, these programs have been generated using distributed miners.

* [A000001-A049999](list0), [A050000-A099999](list1), [A100000-A149999](list2), [A150000-A199999](list3)
* [A200000-A249999](list4), [A250000-A299999](list5), [A300000-A349999](list6), [A350000-A399999](list7)

## Mining Programs for Integer Sequences

LODA includes a tool for mining new and more efficient programs for integer sequences. There are continuously running miners generating programs every day. Have a look at the [mining dashboard](http://dashboard.loda-lang.org/grafana) to get an overview of the currently running miners. Below you see a chart of the number of programs since the start of the project.

<img src="https://raw.githubusercontent.com/loda-lang/loda-programs/main/program_counts.png" width=400 />

If you want to mine programs, you need to [install the LODA command-line tool](install) first. After the installation you can start mining using the command `loda mine` (single-core) or the command `loda mine -p` (multi-core). The tool allows you to **include your name in mined programs**. All mined programs are stored in the [loda-programs](https://github.com/loda-lang/loda-programs) repository.

To receive updates on new miner findings, you can check out the commits in [loda-programs](https://github.com/loda-lang/loda-programs/commits/main) or subscribe to the [@lodaminer](https://twitter.com/lodaminer) channel on Twitter, or join other LODA followers in the [loda-lang workspace](https://loda-lang.slack.com/) on Slack. It includes a channel that posts new programs in real-time.

## Development

The source code of LODA is hosted in the [loda-lang organization](https://github.com/loda-lang) on GitHub. These are some of its main repositories:

* [loda-cpp](https://github.com/loda-lang/loda-cpp): Interpreter and miner written in C++.
* [loda-rust](https://github.com/loda-lang/loda-rust): Interpreter and web interface written in Rust.
* [loda-programs](https://github.com/loda-lang/loda-programs): Mined programs for OEIS sequences.

## Contributors

* [Christian Krause](https://github.com/ckrause)
* [Simon Strandgaard](https://github.com/neoneye)
* [Jamie Morken](https://github.com/jmorken)
* [Antti Karttunen](https://github.com/karttu)
* [Jon Maiga](https://github.com/jonmaiga)

## Related Projects

* [Sequence Machine](http://sequencedb.net) by [Jon Maiga](http://www.jonkagstrom.com/) is a database of mathematical conjectures on many machine-generated integer and decimal sequences.
* [Superseeker](https://oeis.org/ol.html) from the OEIS is an automatic email server for identifying integer sequences.
* [jOEIS](https://github.com/archmageirvine/joeis) by Sean A. Irvine and Georg Fischer is a collection of pure Java programs implementing sequences from the OEIS.
* [The Ramanujan Machine](https://www.ramanujanmachine.com/) by [Shahar Gottlieb](https://github.com/ShaharGottlieb) is an algorithmic approach to discover new mathematical conjectures.
* [QSynt](http://grid01.ciirc.cvut.cz/~thibault/synt.html) by [Thibault Gauthier](https://github.com/barakeel) is a program synthesis tool for OEIS integer sequences.
