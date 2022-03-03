---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
layout: home
---

LODA is an assembly language, a computational model and a distributed tool for mining integer sequence programs. You can use it to generate and search programs that compute integer sequences from the [On-Line Encyclopedia of Integer Sequences®](https://oeis.org/) (OEIS®).

There are continuously running miners that generate [new programs every day](http://dashboard.loda-lang.org/grafana)!

*The LODA project is looking for additional mining resources. If you have spare capacity and you like the project, please consider running miners. You can include your name in mined programs! See below for more information.*

## The LODA Language

LODA means _Lexicographical Order Descent Assembly_. To get an overview of the language, you can take a look at its [specification](spec). It includes a reference of its operations with examples. You can use the [online editor](edit/?oeis=45){: .btn } to try it out yourself.

<a href="https://loda-lang.org/edit/?oeis=2994"><img src="https://github.com/loda-lang/loda-lang.github.io/raw/master/loda-editor.png" width=300></a>

If you want to see more programs, you can browse through the lists of mined programs for OEIS sequences. There are currently more than 65,000 programs available! You can find lists with descriptions and links here:

* [A000001-A049999](list0), [A050000-A099999](list1), [A100000-A149999](list2), [A150000-A199999](list3)
* [A200000-A249999](list4), [A250000-A299999](list5), [A300000-A349999](list6), [A350000-A399999](list7)

Except for a few hand-witten ones, these programs have been generated using distributed miners.

## Mining Programs for Integer Sequences

There are continuously running miners generating new or improved programs every day. You can take a look at the [mining dashboard](http://dashboard.loda-lang.org/grafana) to get an overview of the currently running miners and their latest findings. Below you see a chart of the number of programs since the start of the project.

<img src="https://raw.githubusercontent.com/loda-lang/loda-programs/main/program_counts.png" width=400 />

To mine programs, you need to [install the LODA command-line tool](install). Then you can start mining using the `loda mine` command (single-core) or the `loda mine -p` (multi-core).

_If you contribute mining resources, LODA allows you to specify your name to be included in the mined programs! All mined programs are stored in the [loda-programs](https://github.com/loda-lang/loda-programs) repository._

<a href="https://github.com/loda-lang/loda-lang.github.io/raw/master/loda-mine.png"><img src="https://github.com/loda-lang/loda-lang.github.io/raw/master/loda-mine.png" width=300></a>

To receive updates on new miner findings, you can check out the commits in [loda-programs](https://github.com/loda-lang/loda-programs/commits/main) or subscribe to the [@lodaminer](https://twitter.com/lodaminer) channel on Twitter, or join other LODA followers in the [loda-lang workspace](https://loda-lang.slack.com/) on Slack.
It includes a channel that posts new programs in real-time.

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
