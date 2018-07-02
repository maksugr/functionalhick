---
title: 'Clojure: Introduction'
description: Quick introduction to Lisp, Clojure and ClojureScript
date: "2018-07-02"
---

**[Clojure](https://en.wikipedia.org/wiki/Clojure)** is a dialect of the [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)), general-purpose language with dynamic type system. It's run on [JVM](https://ru.wikipedia.org/wiki/Java_Virtual_Machine) and can be compiled to JavaScript (and here we are already talking about **[ClojureScript](https://clojurescript.org/)**). Main features of Clojure (and mainly Lisp):

* [Homoiconicity](https://en.wikipedia.org/wiki/Homoiconicity)
* [Reflection](https://en.wikipedia.org/wiki/Reflection_(computer_programming)) and [metaprogramming](https://en.wikipedia.org/wiki/Metaprogramming)
* Immutability
* [First-class functions](https://en.wikipedia.org/wiki/First-class_functions)
* [Functional programming](https://en.wikipedia.org/wiki/Functional_programming)
* [REPL Driven Development](https://clojure.org/about/dynamic)

Best overview can be found on [official site](https://clojure.org/about/rationale).

It would be true if I say that Clojure doesn't have syntax. It just uses Symbolic Expressions ([s-expressions](https://en.wikipedia.org/wiki/S-expression)): function call is a [list](https://en.wikipedia.org/wiki/List_(abstract_data_type)) where first item - name of the function and the rest - arguments. It's called [prefix notation or polish notation](https://en.wikipedia.org/wiki/Polish_notation).

```clojure
; clojure

(+ 1 2) ; 3
(max 13 9) ; 13
```

And here core concepts of clojure syntax is ended!

List is one of the most used data structure in Clojure but how we can use it as data if we use it in the code? We need treating code as data: add quote prefix (`'`) before list or use special form `quote`. It's really something like quotes in out regular texts. Of cause `quote` makes sens not only for lists.

```clojure
; clojure

'(1 2 3) ; (1 2 3)
(quote (+ 1 2 3)) ; (+ 1 2 3)
```

Greate, we have code as data - one of the most unique feature of Clojure - thanks to `quote`! For executing data as code you can use `eval`.

```clojure
; clojure

(eval (quote (+ 1 2 3))) ; 6
```

So you can do `code -> data -> new data -> code` and transform your code in runtime. And it was just one example of really powerful conceptions of Clojure!

That's enough for quick introduction to Clojure, feel free to read all links in this article for full picture. ;**In next article we will talk deeply about syntax**.