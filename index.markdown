---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

title: Overview
layout: home
---

LODA is a language and an open-source project focused on the systematic discovery and analysis of programs and formulas for integer sequences.

The project centers around a assembly language designed for:
* enabling automated and distributed program mining,
* supporting efficient execution and optimization,
* allowing conversion to formulas,
* feeding them back into computer algebra systems and theorem provers.

LODA uses distributed computing to search for new programs automatically. Volunteers contribute computing power through BOINC to help discover shorter, more efficient programs for sequences that don't yet have known algorithms. This process has generated thousands of programs for OEIS sequences.

This enables a neat workflow. Starting from the OEIS sequence database, LODA programs are automatically discovered via mining. These programs can then be automatically converted into formulas, and finally exported to computer algebra systems like PARI/GP for further mathematical analysis.

LODA includes AI integration through the Model Context Protocol, REST APIs for programmatic access, and libraries for multiple programming languages, creating bridges between mathematical research and software development.

## Getting Started

- Install the [LODA command-line tool](/install) to execute programs on your local machine.
- Browse the [LODA program database](/programs) to access a wide range of programs corresponding to OEIS sequences.
- Explore [connections and integrations](/connect) including BOINC distributed computing, API access, and community platforms.
- Read the [LODA specification](/spec) for a comprehensive guide to the language's syntax and operational semantics.
