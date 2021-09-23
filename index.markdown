---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
layout: home
---

LODA is an assembly language, a computational model and a tool for mining integer sequences. You can use it to generate and search programs that calculate integer sequences from the [On-Line Encyclopedia of Integer Sequences®](https://oeis.org/) (OEIS®). There are continuously running miners that generate [new programs every day](http://dashboard.loda-lang.org/grafana)!

## Getting Started

To get an overview of the LODA language, you can take a look at its [Specification](spec). It includes a reference of its operations with examples. You can use the [Online Editor](edit/?oeis=45){: .btn } to try it out yourself!

<a href="https://loda-lang.org/edit/?oeis=2994"><img src="https://github.com/loda-lang/loda-lang.github.io/raw/master/loda-editor.png" width=300></a>

If you want to see more programs, you can browse through the lists of mined programs for OEIS sequences. There are currently more than 38,000 programs available! You can find lists with descriptions and links here:

* [A000001-A049999](list0), [A050000-A099999](list1), [A100000-A149999](list2), [A150000-A199999](list3)
* [A200000-A249999](list4), [A250000-A299999](list5), [A300000-A349999](list6)

There are miners continously running. You can take a look at the [Mining Dashboard](http://dashboard.loda-lang.org/grafana) to see the current activity of the miners.

<a href="http://dashboard.loda-lang.org/grafana"><img src="https://github.com/loda-lang/loda-lang.github.io/raw/master/loda-dashboard.png" width=300></a>

If you want mine programs yourself, you can [install the LODA command-line tool](install) and start mining using the `loda mine` command. Find out more about the tool at [loda-cpp](https://github.com/loda-lang/loda-cpp).

<a href="http://loda-lang.org/install"><img src="https://github.com/loda-lang/loda-lang.github.io/raw/master/loda-cpp.png" width=300></a>

If you want to receive updates on new miner findings, you can follow the [commits in loda-programs](https://github.com/loda-lang/loda-programs/commits/main) or subscribe to the [@lodaminer](https://twitter.com/lodaminer) channel on Twitter, or join us in the [loda-lang workspace](https://loda-lang.slack.com/) on Slack.

## Development

The source code of LODA is hosted in the [loda-lang organization](https://github.com/loda-lang) on GitHub. These are some of its main repositories:

* [loda-cpp](https://github.com/loda-lang/loda-cpp): Interpreter and miner written in C++.
* [loda-rust](https://github.com/loda-lang/loda-rust): Interpreter and web interface written in Rust.
* [loda-programs](https://github.com/loda-lang/loda-programs): Mined programs for OEIS sequences.

## Contributors

* [Christian Krause](https://github.com/ckrause)
* [Simon Strandgaard](https://github.com/neoneye)
* [Antti Karttunen](https://github.com/karttu)
* [Jon Maiga](https://github.com/jonmaiga)
* [Jamie Morken](https://github.com/jmorken)
