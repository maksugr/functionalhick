---
title: 'Clojure: syntax'
date: '2018-07-03'
---

First of small repetition. We are [already know](http://functionalhick.online/posts/en/2018-07-02/clojure-introduction/) that Clojure syntax based on [s-expressions](https://en.wikipedia.org/wiki/S-expression): function call is a [list](https://en.wikipedia.org/wiki/List_(abstract_data_type)) where first item - name of the function and the rest - arguments. It's called [prefix notation or polish notation](https://en.wikipedia.org/wiki/Polish_notation).

```clojure
; clojure

(+ 1 2 3 4) ; 10
(max 4 13) ; 13
(rand 7) ; some random float number between 0 and 6
```

Yes, as you could assumed early with `;` [we have a comment](https://cljs.github.io/api/syntax/comment). Multiple `;` indicate header comment in Clojure.

```clojure
; clojure and this is comment
```

Clojure doesn't have [statements](https://en.wikipedia.org/wiki/Statement_(computer_science)) at all. It has only [expressions](https://en.wikipedia.org/wiki/Expression_(computer_science)). So if you want create a variable you need to use special form `def`. **`def` always defined global variable in namespace** (if you defined variable with `def` in function it will be available in the whole namespace).

```clojure
; clojure

(def variableName 10)
(println variableName) ; 10
```

The closest analog of this expression in JavaScript is statement `var`.

```javascript
// javascript

var variableName = 10;
```

If we want define a function we can use macro `defn`. First argument - name of the function, second - vector (*as a data type vector*) with params that this function will take, third - list as a body of the function.

```clojure
; clojure

(defn mult [x y] (* x y)) ; define function mult
(mult 4 5) ; 20
```

And here we should stop for some notes.

Clojure doesn't have official style guide but it has [unofficial](https://github.com/bbatsov/clojure-style-guide). If we will follow him we should define out function `mult` like that.

```clojure
; clojure

(defn mult [x y]
  (* x y))
```

`defn` - [macro](https://en.wikipedia.org/wiki/Macro_(computer_science)) and it's very common to use macros in Clojure. There is just few special forms in Clojure, all other - pre-defined functions and macros. In compile time `defn` will transform to more verbose syntax with `def` (special form) and [anonymous function](https://clojuredocs.org/clojure.core/fn) - [lambda](http://dobegin.com/lambda-functions-everywhere/).

```clojure
; clojure

;; example with defn after transformations in compile time
(def mult (fn [x y] (* x y)))
```

Anonymous function has a shortcut - `#()` - where parameters are referred by their index with the prefix `%`.

```clojure
; clojure

((fn [a b c] (+ a b c)) 2 4 6) ; 12
(#(+ %1 %2 %3) 2 4 6) ; 12

(#(+ % %) 2) ; 4
```

`def` defines global variable in namespace. To define variable in local scope we need `let` where in square brackets we define variables and than we write expressions.

```clojure
; clojure

(let [x 1 y "2"]
  (println x) ; 1
  (println y)) ; 2
```

And some more information... For rest params we use ampersand - `&`.

```clojure
; clojure

(defn mult [x y & params]
  (apply * x y params)) ; apply does the same things that JS call does

; x equals 6, y equals 7, params equals 100 and 1000
(mult 6 7 100 1000) ; 4200000

(#(apply + %&) 2 4 6) ; 12
```

Ok, for now it is more than enough!

**Next time we will talk about data structures**. For now you can learn more about syntax (and prepare for talking about data structures) in the [official guide](https://clojure.org/guides/learn/syntax) or in [excellent docs](https://clojuredocs.org/core-library).
