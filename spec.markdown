---
layout: page
title: Specification
permalink: /spec/
nav_order: 1
---

<a name="overview"/>

## Overview

LODA is a minimalist, assembly-like programming language designed for expressing number-theoretic and combinatorial algorithms, and for generating integer sequences.
The simple language design enables efficient execution, optimization, and synthesis of programs using evolutionary search, distributed computing and machine learning.

### Content

This document is organized as follows:

- [Overview](#overview)
- [Language Overview](#language-overview)
  - [Basic Structure and Semantics](#basics)
  - [Memory](#memory)
  - [Operations](#operations)
  - [Integer Sequences](#integer-sequences)
- [Operations Reference](#operations-ref)
  - [Assignment and Arithmetic Operations](#assignment-and-arithmetics)
    - [`mov` (Assignment)](#mov)
    - [`add` (Addition)](#add)
    - [`sub` (Subtraction)](#sub)
    - [`trn` (Truncated Subtraction)](#trn)
    - [`mul` (Multiplication)](#mul)
    - [`div` (Division)](#div)
    - [`dif` (Conditional Division)](#dif)
    - [`dir` (Repeated Division)](#dir)
    - [`mod` (Modulus)](#mod)
    - [`pow` (Power)](#pow)
  - [Combinatorics and Number Theory](#combinatorics-and-number-theory)
    - [`bin` (Binomial Coefficient)](#bin)
    - [`fac` (Falling/Rising Factorial)](#fac)
    - [`gcd` (Greatest Common Divisor)](#gcd)
    - [`lex` (Largest Exponent)](#lex)
    - [`log` (Discrete Logarithm)](#log)
    - [`nrt` (Discrete n-th Root)](#nrt)
    - [`dgs` (Digit Sum)](#dgs)
    - [`dgr` (Digital Root)](#dgr)
  - [Comparison Operations](#comparison)
    - [`equ` (Equal)](#equ)
    - [`neq` (Not Equal)](#neq)
    - [`leq` (Less or Equal)](#leq)
    - [`geq` (Greater or Equal)](#geq)
    - [`min` (Minimum)](#min)
    - [`max` (Maximum)](#max)
  - [Bitwise Operations](#bitwise)
    - [`ban` (Bitwise And)](#ban)
    - [`bor` (Bitwise Or)](#bor)
    - [`bxo` (Bitwise Xor)](#bxo)
  - [Control Flow and Special Operations](#control-flow-special)
    - [`lpb..lpe` (Loop / Conditional)](#lpb)
    - [`seq` (Sequence)](#seq)
    - [`clr` (Clear)](#clr)
- [Termination](#termination)

<a name="language-overview"/>

## Language Overview

<a name="basics"/>

### Basic Structure and Semantics

A LODA program consists of a sequence of operations, each on its own line, executed from top to bottom (except for loops and conditionals, which alter control flow). Each instruction follows the format `opcode target,source`.

Comments start with a semicolon (`;`) and continue to the end of the line. Use comments to clarify the purpose of instructions or document the logic of your program.

Below is a complete LODA program that computes the n-th Fibonacci number ([A000045](https://oeis.org/A000045)):

```asm
; A000045: Fibonacci numbers.
mov $1,0      ; Initialize $1 = 0 (F(0))
mov $2,1      ; Initialize $2 = 1 (F(1))
lpb $0        ; Loop while the loop counter $0 (n) >= 0
  mov $3,$2   ; Store previous Fibonacci value: $3 := $2
  add $2,$1   ; $2 := $2 + $1 (next Fibonacci number)
  mov $1,$3   ; $1 := $3 (advance previous value)
  sub $0,1    ; Decrement the loop counter $0 (n := n - 1)
lpe           ; End of loop
mov $0,$1     ; Output result: $0 := F(n)
```

LODA's syntax is intentionally simple and assembly-like, with a small set of well-defined operations. Programs are concise and easy to analyze, making the language ideal for mathematical experimentation and sequence generation. See the following sections for details on memory, operands, and available operations.

<a name="memory"/>

### Memory

LODA programs operate on an unbounded array of integer-valued memory cells, indexed as `$0`, `$1`, `$2`, and so on. Each cell can store any integer value, positive or negative. Memory is conceptually infinite to the right, and all cells are initialized to zero by default.

There are three types of operands in LODA:

1. **Constants** — Literal integer values, e.g., `5`, `-3`, `0`.
2. **Direct memory access** — Accesses a specific memory cell by index, e.g., `$5` refers to the value stored in cell 5.
3. **Indirect memory access** — Uses the value of a memory cell as an address to access another cell, e.g., `$$7` means: look up the value in `$7`, then use that value as the index to access the target cell. For example, if `$7 = 13`, then `$$7` refers to `$13`.

**Examples:**

```asm
mov $0,42    ; Store 42 in cell $0
mov $1,5     ; Store 5 in cell $1
mov $2,$1    ; Copy value from $1 (5) to $2
mov $3,2     ; Store 2 in cell $3
mov $4,$$3   ; Since $3 = 2, $$3 refers to $2 (which is 5), so $4 := 5
```

Uninitialized memory cells are always read as zero. There are no negative memory indices: using a negative index for direct access (e.g., `$-1`) is a compile-time error, while indirect access that resolves to a negative index (e.g., `$$3` when `$3 = -1`) causes a runtime error.

<a name="operations"/>

### Operations

LODA instructions operate on memory cells and constants using a simple, assembly-like syntax. Each operation has the form `opcode target,source`.

- **opcode**: The operation to perform (e.g., `add`, `mul`, `div`, `mov`, etc.).
- **target**: The memory cell to update (direct or indirect access).
- **source**: The value to use (can be a constant, direct, or indirect memory access).

LODA uses [Intel assembly syntax](https://en.wikipedia.org/wiki/X86_assembly_language), meaning the target comes before the source. The target cell is usually updated by the operation; the source is read-only.

**Examples:**

```asm
add $3,5    ; Add 5 to $3 (i.e., $3 := $3 + 5)
mul $2,$1   ; Multiply $2 by $1 (i.e., $2 := $2 * $1)
mov $0,7    ; Store 7 in $0
div $4,$2   ; Integer divide $4 by $2 (i.e., $4 := floor($4 / $2))
```

Some operations (such as `lpb`/`lpe` for loops, or `clr` for clearing memory regions) have special syntax or semantics. For a complete list of available operations, their syntax, and detailed behavior, see the [Operations Reference](#operations-ref) section.

<a name="integer-sequences"/>

### Integer Sequences

LODA is designed for defining and computing integer sequences, such as those found in the OEIS. The LODA interpreter has built-in support for evaluating LODA programs as integer sequence generators: it automatically sets the memory cell `$0` to the desired input value `n`, executes the program, and reads the result from `$0` as the output `a(n)`.

This convention allows any LODA program to serve as a sequence generator, with each run computing a single term. For example, to generate the sequence of squares `a(n) = n^2`, the corresponding LODA program looks like this:

```asm
; A000290: The squares: a(n) = n^2.
pow $0,2
```

To enumerate a sequence, the interpreter repeatedly runs the program with increasing values of `$0` (i.e., n = 0, 1, 2, ...), collecting the output each time. This built-in mechanism makes LODA especially well-suited for automated sequence discovery and analysis.

### Offsets

By default, integer sequences in LODA start with input value `$0 = 0`, corresponding to the offset used in most OEIS entries. However, some sequences are defined to start at a different index (for example, `n = 1` or `n = 2`). This starting index is called the "offset" of the sequence. For more information, see the [OEIS offset documentation](https://oeis.org/wiki/Offsets).

LODA supports custom offsets using the `#offset` directive at the top of a program. This directive tells the interpreter to start evaluating the sequence at the specified index, so that the first input to the program will be that offset value.

**Example: Sequence with offset 1**

The following program computes the unary representation of natural numbers ([A000042](https://oeis.org/A000042)), but starts at `n = 1` instead of `n = 0`:

```asm
; A000042: Unary representation of natural numbers.

#offset 1

mov $1,10      ; $1 := 10 (base)
pow $1,$0      ; $1 := 10^n
mov $0,$1      ; $0 := 10^n
div $0,9       ; $0 := (10^n) / 9 (yields n consecutive 1s)
```

With `#offset 1`, the first value computed will be for `n = 1`, so the sequence output will match the OEIS entry's offset. This makes it easy to align LODA programs with OEIS conventions and ensures correct sequence generation for any starting index.

<a name="operations-ref"/>

## Operations Reference

<a name="assignment-and-arithmetics"/>

### Assignment and Arithmetic Operations

<a name="mov"/>

#### **mov** (Assignment)

Copies the value of the source operand into the target operand, overwriting its previous value.

An operation `mov a,b` performs the assignment `a := b`.

Examples:

```asm
mov $0,42    ; $0 := 42
mov $1,$0    ; $1 := $0 = 42
mov $$1,7    ; $42 = $$1 := 7 (if $1=42)
mov $2,5     ; $2 := 5
mov $3,$2    ; $3 := $2 = 5
mov $4,0     ; $4 := 0
mov $$4,99   ; $0 = $$4 := 99 (if $4=0)
```

<a name="add"/>

#### **add** (Addition)

Adds the value of the source operand to the target operand and stores the result in the target.

An operation `add a,b` performs the assignment `a := a + b`.

Examples:

```asm
mov $0,2    ; $0 := 2
mov $1,3    ; $1 := 3
add $0,5    ; $0 := 2 + 5 = 7
add $0,$1   ; $0 := 7 + 3 = 10
add $1,-4   ; $1 := 3 + (-4) = -1
add $0,0    ; $0 := 10 + 0 = 10
```

<a name="sub"/>

#### **sub** (Subtraction)

Subtracts the value of the source operand from the target operand and stores the result in the target.

An operation `sub a,b` performs the assignment `a := a - b`.

Examples:

```asm
mov $0,5    ; $0 := 5
mov $1,-3   ; $1 := -3
sub $0,7    ; $0 := 5 - 7 = -2
sub $0,$1   ; $0 := -2 - (-3) = 1
sub $1,2    ; $1 := -3 - 2 = -5
sub $0,0    ; $0 := 1 - 0 = 1
```

<a name="trn"/>

#### **trn** (Truncated Subtraction)

Subtracts the source operand from the target operand, but clamps the result to zero if it would be negative.

An operation `trn a,b` performs the assignment `a := max(a - b, 0)`.

Examples:

```asm
mov $0,9   ; $0 := 9
mov $1,3   ; $1 := 3
trn $0,5   ; $0 := max(9 - 5, 0) = 4
trn $1,5   ; $1 := max(3 - 5, 0) = 0
mov $2,0   ; $2 := 0
trn $2,1   ; $2 := max(0 - 1, 0) = 0
trn $0,0   ; $0 := max(4 - 0, 0) = 4
```

<a name="mul"/>

#### **mul** (Multiplication)

Multiplies the target operand by the source operand and stores the result in the target.

An operation `mul a,b` performs the assignment `a := a * b`.

Examples:

```asm
mov $0,5    ; $0 := 5
mov $1,-3   ; $1 := -3
mul $0,7    ; $0 := 5 * 7 = 35
mul $0,$1   ; $0 := 35 * (-3) = -105
mul $1,0    ; $1 := -3 * 0 = 0
mul $0,-1   ; $0 := -105 * (-1) = 105
```

<a name="div"/>

#### **div** (Division)

Divides the target operand by the source operand using integer division (fractional part is discarded), and stores the result in the target. Division by zero yields a runtime error.

An operation `div a,b` performs the assignment `a := floor(a / b)`.

Examples:

```asm
mov $0,26   ; $0 := 26
div $0,2    ; $0 := 13
div $0,-4   ; $0 := -3
mov $1,7    ; $1 := 7
div $1,3    ; $1 := 2
div $1,10   ; $1 := 0
```

<a name="dif"/>

#### **dif** (Conditional Division)

Divides the target operand by the source operand only if the source divides the target exactly. If not, or if the source is zero, the target remains unchanged.

An operation `dif a,b` performs the assignment `a := a / b` if `b` divides `a`, otherwise `a` is unchanged.

Examples:

```asm
mov $0,26   ; $0 := 26
dif $0,2    ; $0 := 13 (26 divisible by 2)
dif $0,4    ; $0 := 13 (13 not divisible by 4, unchanged)
dif $0,0    ; $0 := 13 (division by zero, unchanged)
mov $1,15   ; $1 := 15
dif $1,5    ; $1 := 3 (15 divisible by 5)
dif $1,4    ; $1 := 3 (3 not divisible by 4, unchanged)
```

<a name="dir"/>

#### **dir** (Repeated Division)

Divides the target operand by the source operand as many times as possible (while the result is still divisible), and stores the result in the target. If the source is zero, minus one, or never divides the target, the target remains unchanged.

An operation `dir a,b` performs the assignment `a := a / (b^n)`, where `n` is the largest integer such that `b^n` divides `a`.

Examples:

```asm
mov $0,24   ; $0 := 24
dir $0,2    ; $0 := 3 (24/2/2/2 = 3)
mov $1,45   ; $1 := 45
dir $1,3    ; $1 := 5 (45/3/3 = 5)
mov $2,7    ; $2 := 7
dir $2,2    ; $2 := 7 (not divisible by 2, unchanged)
```

<a name="mod"/>

#### **mod** (Modulus)

Computes the remainder after dividing the target operand by the source operand, and stores it in the target. The sign of the result matches the sign of the dividend (target). Division by zero yields a runtime error.

An operation `mod a,b` performs the assignment `a := a % b`.

Examples:

```asm
mov $0,13    ; $0 := 13
mod $0,3     ; $0 := 1   (13 % 3)
mov $1,-14   ; $1 := -14
mod $1,4     ; $1 := -2  (-14 % 4)
mov $2,15    ; $2 := 15
mod $2,-4    ; $2 := 3   (15 % -4)
mov $3,-17   ; $3 := -17
mod $3,-5    ; $3 := -2  (-17 % -5)
mov $4,0     ; $4 := 0
mod $4,5     ; $4 := 0   (0 % 5)
```

<a name="pow"/>

#### **pow** (Power)

Raises the target operand to the power of the source operand and stores the result in the target. If the exponent (source) is negative, the result is zero.

An operation `pow a,b` performs the assignment `a := a ^ b` (with `a ^ b = 0` for `abs(a) >= 2 and b < 0`).

Examples:

```asm
mov $0,3    ; $0 := 3
pow $0,3    ; $0 := 27
mov $1,2    ; $1 := 2
pow $1,0    ; $1 := 1 (any number to the power 0 is 1)
pow $0,-2   ; $0 := 0 (negative exponent yields 0)
```

<a name="combinatorics-and-number-theory"/>

### Combinatorics and Number Theory

<a name="bin"/>

#### **bin** (Binomial Coefficient)

Computes the binomial coefficient ("n choose k") for the target and source operands, and stores the result in the target. For negative arguments, the semantics follows [M.J. Kronenburg: The Binomial Coefficient for Negative Arguments](https://arxiv.org/pdf/1105.3689.pdf).

An operation `bin a,b` performs the assignment `a := a! / (b! * (a-b)!)`.

Examples:

```asm
mov $0,7    ; $0 := 7
bin $0,3    ; $0 := 35 (7 choose 3)
mov $1,7    ; $1 := 7
bin $1,0    ; $1 := 1 (n choose 0 is 1)
mov $2,5    ; $2 := 5
bin $2,8    ; $2 := 0 (n < k yields 0)
```

<a name="fac"/>

#### **fac** (Falling/Rising Factorial)

Computes the falling factorial of the target operand if the source is negative, and the rising factorial if the source is positive. If the source is zero, the result is one. See [Falling and rising factorials](https://en.wikipedia.org/wiki/Falling_and_rising_factorials) for details.

An operation `fac a,b` assigns the falling or rising factorial to `a` depending on the sign of `b`.

Examples:

```asm
mov $0,5    ; $0 := 5
fac $0,3    ; $0 := 210 (rising factorial: 5*6*7)
mov $1,5    ; $1 := 5
fac $1,-3   ; $1 := 60 (falling factorial: 5*4*3)
mov $2,4    ; $2 := 4
fac $2,0    ; $2 := 1 (factorial of 0 is 1)
```

<a name="gcd"/>

#### **gcd** (Greatest Common Divisor)

Computes the greatest common divisor (GCD) of the target and source operands, and stores it in the target. If both operands are zero, the result is zero. Otherwise, the result is always positive.

An operation `gcd a,b` assigns the GCD of `a` and `b` to `a`.

Examples:

```asm
mov $0,20   ; $0 := 20
mov $1,16   ; $1 := 16
gcd $0,$1   ; $0 := 4 (gcd of 20 and 16)
gcd $0,5    ; $0 := 1 (gcd of 4 and 5)
mov $2,0    ; $2 := 0
gcd $2,0    ; $2 := 0 (gcd of 0 and 0)
```

<a name="lex"/>

#### **lex** (Largest Exponent)

Finds the largest non-negative integer exponent such that the source operand raised to that exponent divides the target operand, and stores this exponent in the target. If `a` is zero, or `b` is zero or one, the result is zero.

An operation `lex a,b` assigns the largest exponent `k` such that `b^k` divides `a` to `a`.

Examples:

```asm
mov $0,18   ; $0 := 18
lex $0,3    ; $0 := 2 (3^2 divides 18)
mov $1,-8   ; $1 := -8
lex $1,2    ; $1 := 3 (2^3 divides -8)
mov $2,27   ; $2 := 27
lex $2,5    ; $2 := 0 (5 does not divide 27)
```

<a name="log"/>

#### **log** (Discrete Logarithm)

Computes the discrete logarithm of the target operand to the given base (source operand), and stores the result in the target. The result is the largest non-negative integer `c` such that `b^c <= a`. The base must be at least 2, and the argument at least 1.

An operation `log a,b` assigns the discrete logarithm of `a` to base `b` to `a`.

Examples:

```asm
mov $0,16   ; $0 := 16
log $0,2    ; $0 := 4   (2^4 = 16)
mov $1,81   ; $1 := 81
log $1,3    ; $1 := 4   (3^4 = 81)
mov $2,20   ; $2 := 20
log $2,2    ; $2 := 4   (2^4 = 16 <= 20 < 32)
```

<a name="nrt"/>

#### **nrt** (Discrete n-th Root)

Computes the discrete n-th root of the target operand, using the source operand as the root degree, and stores the result in the target. The result is the largest non-negative integer `c` such that `c^n <= a`. The root degree must be at least 1.

An operation `nrt a,n` assigns the discrete n-th root of `a` to `a`.

Examples:

```asm
mov $0,27   ; $0 := 27
nrt $0,3    ; $0 := 3   (3^3 = 27)
mov $1,16   ; $1 := 16
nrt $1,2    ; $1 := 4   (4^2 = 16)
mov $2,80   ; $2 := 80
nrt $2,3    ; $2 := 4   (4^3 = 64 <= 80 < 125)
```

<a name="dgs"/>

#### **dgs** (Digit Sum)

Computes the sum of the digits of the target operand in the base given by the source operand, and stores the result in the target. The base must be at least 2. If the target is negative, the digit sum is computed as for the positive value, but the result is negative.

An operation `dgs a,b` assigns the digit sum of `a` in base `b` to `a`.

Examples:

```asm
mov $0,345   ; $0 := 345
dgs $0,10    ; $0 := 12 (3+4+5)
mov $1,8     ; $1 := 8
dgs $1,2     ; $1 := 1 (1+0+0+0)
mov $2,-19   ; $2 := -19
dgs $2,10    ; $2 := -10 (1+9, result is negative)
```

<a name="dgr"/>

#### **dgr** (Digital Root)

Computes the digital root of the target operand in the base given by the source operand, and stores the result in the target. The digital root is found by repeatedly summing the digits until the result is less than the base. The base must be at least 2. If the target is negative, the result is negative.

An operation `dgr a,b` assigns the digital root of `a` in base `b` to `a`.

Examples:

```asm
mov $0,345   ; $0 := 345
dgr $0,10    ; $0 := 3 (digital root in base 10)
mov $1,8     ; $1 := 8
dgr $1,2     ; $1 := 1 (digital root in base 2)
mov $2,-19   ; $2 := -19
dgr $2,10    ; $2 := -1 (digital root, result is negative)
```

<a name="comparison"/>

### Comparison Operations

<a name="equ"/>

#### **equ** (Equal)

Checks if the target and source operands are equal. If they are, the target is set to 1; otherwise, it is set to 0.

An operation `equ a,b` assigns 1 to `a` if `a == b`, otherwise 0.

Examples:

```asm
mov $0,7    ; $0 := 7
equ $0,7    ; $0 := 1 (equal)
mov $1,7    ; $1 := 7
equ $1,8    ; $1 := 0 (not equal)
mov $2,0    ; $2 := 0
equ $2,0    ; $2 := 1 (equal)
```

<a name="neq"/>

#### **neq** (Not Equal)

Checks if the target and source operands are not equal. If they are not equal, the target is set to 1; otherwise, it is set to 0.

An operation `neq a,b` assigns 1 to `a` if `a != b`, otherwise 0.

Examples:

```asm
mov $0,7    ; $0 := 7
neq $0,6    ; $0 := 1 (not equal)
mov $1,7    ; $1 := 7
neq $1,7    ; $1 := 0 (equal)
mov $2,0    ; $2 := 0
neq $2,1    ; $2 := 1 (not equal)
```

<a name="leq"/>

#### **leq** (Less or Equal)

Checks if the target operand is less than or equal to the source operand. If so, the target is set to 1; otherwise, it is set to 0.

An operation `leq a,b` assigns 1 to `a` if `a <= b`, otherwise 0.

Examples:

```asm
mov $0,7    ; $0 := 7
leq $0,8    ; $0 := 1 (7 <= 8)
mov $1,7    ; $1 := 7
leq $1,6    ; $1 := 0 (7 > 6)
mov $2,5    ; $2 := 5
leq $2,5    ; $2 := 1 (5 <= 5)
```

<a name="geq"/>

#### **geq** (Greater or Equal)

Checks if the target operand is greater than or equal to the source operand. If so, the target is set to 1; otherwise, it is set to 0.

An operation `geq a,b` assigns 1 to `a` if `a >= b`, otherwise 0.

Examples:

```asm
mov $0,7    ; $0 := 7
geq $0,6    ; $0 := 1 (7 >= 6)
mov $1,7    ; $1 := 7
geq $1,8    ; $1 := 0 (7 < 8)
mov $2,5    ; $2 := 5
geq $2,5    ; $2 := 1 (5 >= 5)
```

<a name="min"/>

#### **min** (Minimum)

Finds the minimum of the target and source operands, and stores it in the target.

An operation `min a,b` performs the assignment `a := min(a, b)`.

Examples:

```asm
mov $0,7    ; $0 := 7
min $0,5    ; $0 := 5 (min of 7 and 5)
min $0,6    ; $0 := 5 (min of 5 and 6)
mov $1,-2   ; $1 := -2
min $1,3    ; $1 := -2 (min of -2 and 3)
```

<a name="max"/>

#### **max** (Maximum)

Finds the maximum of the target and source operands, and stores it in the target.

An operation `max a,b` performs the assignment `a := max(a, b)`.

Examples:

```asm
mov $0,7    ; $0 := 7
max $0,5    ; $0 := 7 (max of 7 and 5)
max $0,8    ; $0 := 8 (max of 7 and 8)
mov $1,-2   ; $1 := -2
max $1,3    ; $1 := 3 (max of -2 and 3)
```

<a name="bitwise"/>

### Bitwise Operations

<a name="ban"/>

#### **ban** (Bitwise And)

Performs a bitwise AND operation between the target and source operands, using two's-complement integer representation, and stores the result in the target.

Examples:

```asm
mov $0,6   ; $0 := 6 (binary 110)
ban $0,3   ; $0 := 6 & 3 = 2 (binary 010)
mov $1,12  ; $1 := 12 (binary 1100)
ban $1,10  ; $1 := 12 & 10 = 8 (binary 1000)
mov $2,-5  ; $2 := -5 (binary ...1011)
ban $2,3   ; $2 := -5 & 3 = 3 (binary 0011)
```

<a name="bor"/>

#### **bor** (Bitwise Or)

Performs a bitwise OR operation between the target and source operands, using two's-complement integer representation, and stores the result in the target.

Examples:

```asm
mov $0,6   ; $0 := 6 (binary 110)
bor $0,3   ; $0 := 6 | 3 = 7 (binary 111)
mov $1,12  ; $1 := 12 (binary 1100)
bor $1,10  ; $1 := 12 | 10 = 14 (binary 1110)
mov $2,-5  ; $2 := -5 (binary ...1011)
bor $2,3   ; $2 := -5 | 3 = -5 (binary ...1011)
```

<a name="bxo"/>

#### **bxo** (Bitwise Xor)

Performs a bitwise XOR operation between the target and source operands, using two's-complement integer representation, and stores the result in the target.

Examples:

```asm
mov $0,6   ; $0 := 6 (binary 110)
bxo $0,3   ; $0 := 6 ^ 3 = 5 (binary 101)
mov $1,12  ; $1 := 12 (binary 1100)
bxo $1,10  ; $1 := 12 ^ 10 = 6 (binary 0110)
mov $2,-5  ; $2 := -5 (binary ...1011)
bxo $2,3   ; $2 := -5 ^ 3 = -8 (binary ...1000)
```

<a name="control-flow-special"/>

### Control Flow and Special Operations

<a name="lpb"/>

#### **lpb..lpe** (Loop / Conditional)

Begins a loop or conditional block, ending with `lpe`. The block is executed as long as the loop variable (or region) is strictly decreasing and non-negative. If the condition is not met, the block is skipped. If the loop counter is not decreasing or becomes negative, the side effects of the last iteration are rolled back. This construct can also be used for conditionals.

For example, consider the following program:

```asm
mov $1,1
lpb $0
  mul $1,5
  sub $0,1
lpe
```

It first assigns 1 to the memory cell `$1`. Inside the loop, the memory cell `$0` is counted down to zero and in every step `$1` is multiplied by 5. Note that this could be also achieved without loops using the `pow` operation. If the loop counter is not decreasing or becomes negative, the side effects of this last iteration are rolled back. This also enables the usage of this concept as conditional. For example, the following code multiplies `$1` by 5 if `$0` is greater than `17`.

```asm
lpb $0
  mul $1,5
  mov $0,17
lpe
```

The `lpb` can also have a second (optional) argument. In that case, the loop counter is not a single variable, but a finite memory region, which must strictly decreases in every iteration of the loop. The loop counter cell marks the start of that memory region, whereas the second argument is interpreted as a number and defines the length of this region. For example, `lpb $4,3` ... `lpe` is executed as long as the vector (or polynomial) `$4`,`$5`,`$6` is non-negative and strictly decreasing in every iteration according to the lexicographical ordering. If `y` is not a constant and evaluates to different values in subsequent iterations, the minimum length is used to compare the memory regions.

<a name="seq"/>

#### **seq** (Sequence)

Calls another LODA program for an integer sequence using the `seq` operation. The first argument is the parameter for the called program, and the second is the OEIS sequence number. The result is stored in the first argument. For example, `seq $2,45` evaluates A000045 (Fibonacci numbers) with argument `$2` and stores the result in `$2`.

Examples:

```asm
mov $2,7      ; $2 := 7
seq $2,45     ; $2 := a(7) of OEIS A000045 (Fibonacci)
mov $3,10     ; $3 := 10
seq $3,40     ; $3 := a(10) of OEIS A000040 (primes)
```

<a name="clr"/>

#### **clr** (Clear)

Resets a memory region to zero. The target operand marks the start of the region, and the source operand specifies the length. If the length is negative, the region is reset to the left of the target operand.

Examples:

```asm
mov $2,5    ; $2 := 5
mov $3,6    ; $3 := 6
mov $4,7    ; $4 := 7
clr $2,3    ; $2,$3,$4 := 0,0,0
mov $5,9    ; $5 := 9
clr $5,1    ; $5 := 0
mov $6,8    ; $6 := 8
clr $6,-2   ; $4,$5,$6 := 0,0,0 (reset to the left)
```

<a name="termination"/>

# Termination

All LODA programs are guaranteed to halt (terminate) for every possible input. This property is a direct consequence of the language's design:

- **No recursion:** LODA does not support recursive calls, so programs cannot invoke themselves or create unbounded call stacks.
- **Deterministic loops:** Loops in LODA are based on lexicographical descent of memory regions. In each iteration, the loop variable(s) must strictly decrease and remain non-negative. Once the region reaches all zeros, or the descent condition is violated, the loop ends. If a loop counter fails to decrease or becomes negative, the effects of the last iteration are rolled back.
- **Finite memory changes:** Since memory cells can only decrease a finite number of times before reaching zero, and no negative indices are allowed, infinite loops are structurally impossible.

As a result, every LODA program will eventually halt, regardless of input. This makes LODA especially suitable for automated analysis, sequence generation, and mathematical experimentation, as all computations are guaranteed to complete.
