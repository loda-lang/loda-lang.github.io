---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
layout: home
---

LODA is an assembly language, a computational model and a tool for mining integer sequences. You can use it to search programs that calculate integer sequences from the [On-Line Encyclopedia of Integer Sequences®](http://oeis.org/) (OEIS®).

## Get Started

To get started, you can check out these resources:

* [Specification](spec) of the LODA language.
* [Online Editor](edit/?oeis=45){: .btn } to try it out yourself.
* [Mined Programs](https://github.com/loda-lang/loda-programs) of OEIS integer sequences.

If you want to receive updates on new miner findings, you can follow the [commits in loda-programs](https://github.com/loda-lang/loda-programs/commits/main) or subscribe to the [@lodaminer](https://twitter.com/lodaminer) channel on Twitter, or join us on [loda-lang workspace](https://loda-lang.slack.com/) on Slack.

## Details

The source code of LODA is hosted in the [loda-lang organization](https://github.com/loda-lang) on GitHub. These are some of its main repositories:

* [loda-programs](https://github.com/loda-lang/loda-programs): Mined LODA programs. This repository contains programs that generate integer sequences from the OEIS. The vast majority of these programs has been automatically generated using [loda-cpp](https://github.com/loda-lang/loda-cpp), but there are also a few hand-written programs.
* [loda-cpp](https://github.com/loda-lang/loda-cpp): Interpreter and miner written in C++.
* [loda-rust](https://github.com/loda-lang/loda-rust): Interpreter and web interface written in Rust.

There are currently more than 35k programs available! You can find lists with descriptions and links here:

* [A000001-A050000](https://github.com/loda-lang/loda-programs/blob/main/oeis/list0.md)
* [A050001-A100000](https://github.com/loda-lang/loda-programs/blob/main/oeis/list1.md)
* [A100001-A150000](https://github.com/loda-lang/loda-programs/blob/main/oeis/list2.md)
* [A150001-A200000](https://github.com/loda-lang/loda-programs/blob/main/oeis/list3.md) 
* [A200001-A250000](https://github.com/loda-lang/loda-programs/blob/main/oeis/list4.md)
* [A250001-A300000](https://github.com/loda-lang/loda-programs/blob/main/oeis/list5.md)
* [A300001-A350000](https://github.com/loda-lang/loda-programs/blob/main/oeis/list6.md)
* [A350001-A400000](https://github.com/loda-lang/loda-programs/blob/main/oeis/list7.md)

## Example

[Edit](edit/?oeis=45){: .btn }

```
mov $3,1
lpb $0
  sub $0,1
  mov $2,$1
  add $1,$3
  mov $3,$2
lpe
mov $0,$1
```

## Contributors

* [Christian Krause](https://github.com/ckrause)
* [Simon Strandgaard](https://github.com/neoneye)
* [Antti Karttunen](https://github.com/karttu)
