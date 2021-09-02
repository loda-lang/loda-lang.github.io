---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

# The LODA Language

The LODA language is an assembly language with focus on arithmetic and number-theoretic operations. It supports an unbounded set of memory cells storing integer, arithmetic operations and a loop based on a lexicographical order descent on memory regions.

## A000045

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


