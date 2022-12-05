---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
layout: home
---

LODA is an assembly language, a computational model, and a distributed tool for mining programs. You can use it to generate and search programs that compute integer sequences from the [On-Line Encyclopedia of Integer Sequences®](https://oeis.org/) (OEIS®). The goal of the project is to reverse engineer formulas and efficient algorithms for a wide range of non-trivial integer sequences.

## The LODA Language

LODA means _Lexicographical Order Descent Assembly_. It is an assembly-based language for solving number-theoretic problems. It has a simple syntax and a rich set of arithmetic operations. This enables an automated search of new programs and algorithms using a process called [program mining](/mining). In a nutshell, we use distributed compute power, smart search algorithms and machine-learning to find
programs and formulas for the integer sequences from the OEIS database.

To get an idea of the language, you can search browse through the available [programs](https://programs.loda-lang.org/?keywords=loda) or search using keywords.
A comprehensive overview of the language concepts and the supported operations is available in the [language specification](spec).

## Contributors and Development

Running the [LODA miners](/mining) is a community project. We are grateful for the many contributions we receive.
You can view the [list of top contributors](https://boinc.loda-lang.org/loda/top_users.php) of the LODA BOINC project to get an overview.

The source code of LODA is hosted in the [loda-lang](https://github.com/loda-lang) organization on GitHub. Please open issues if you find bugs or if you have feature requests. For generation questions, please use GitHub discussions.
If you would like to contribute code, please contact us on GitHub or open PRs directly.

## Related Projects

* [Sequence Machine](http://sequencedb.net) is a database of mathematical conjectures on many machine-generated integer and decimal sequences.
* [Superseeker](https://oeis.org/ol.html) from the OEIS is an automatic email server for identifying integer sequences.
* [jOEIS](https://github.com/archmageirvine/joeis) is a collection of pure Java programs implementing sequences from the OEIS.
* [NumberFields@home](https://numberfields.asu.edu/NumberFields/) is a BOINC project to do research in number theory.
* [The Ramanujan Machine](https://www.ramanujanmachine.com/) is an algorithmic approach to discover new mathematical conjectures.
* [QSynt](http://grid01.ciirc.cvut.cz/~thibault/synt.html) is a program synthesis tool for OEIS integer sequences.
* [OEIS-Search-GCD-reduced](https://github.com/HugoPfoertner/OEIS-Search-GCD-reduced) is an extended search in OEIS with GCD reduction and data variants.
