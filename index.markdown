---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: The LODA Language
layout: home
---

LODA is an assembly language, a computational model and a tool for mining integer sequences. You can use it to search programs that calculate integer sequences from the [On-Line Encyclopedia of Integer Sequences®](http://oeis.org/) (OEIS®).

* [loda-programs](https://github.com/loda-lang/loda-programs): Mined LODA programs for OEIS sequences
* [loda-rust](https://github.com/loda-lang/loda-rust): Interpreter and web interface written in Rust
* [loda-lang](https://github.com/loda-lang/loda-lang): LODA language specification

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


