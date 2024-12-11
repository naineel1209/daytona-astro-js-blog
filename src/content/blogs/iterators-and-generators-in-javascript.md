---
title: "Iterators and Generators in Javascript"
description: "Curious about how JavaScript's iterable types know the next element in their sequence? Let's dive into iterators and see how they power our favorite data structures."
author: "Daytona"
date: "2024-07-10"
tags: ["quantum computing", "technology", "science", "innovation"]
---

While programming in JavaScript, you must have wondered about how do the iterable types in JavaScript like Strings, Arrays, Sets and, Maps know what will be the next element of their object. Also, why if essentially all the different iterable data types in JavaScript are of type Object (except String) but a primitive Object is not iterable? We will learn all about this today.

## Iterators
Iterators are those objects that implement the iterator_protocol along with their other properties. Now you must be wondering, what is iterator_protocol?

MDN defines it as -
> Iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated

To simplify it further, it defines a way for an object to produce values that may or may not be sequential from that object. Iterator protocol states that an object must implement a method `@@iterator` via a constant `Symbol.iterator`.

####Now, what is this `Symbol.iterator` and what it should return?
Symbol.iterator is a constant that basically tells JavaScript's for...of loop that an object is iterable. The iterator_protocol states that `Symbol.iterator` constant must return an object with property named `next`. This `next` method must return an object having properties -
* done - [Boolean] - denoting if the iteration has been finished or not.
* value - [any] - value to be returned for this iteration. [Optional, if done - true]

Also, MDN mentions this also -
>In practice, neither property is strictly required; if an object without either property is returned, it's effectively equivalent to { done: false, value: undefined }.
If an iterator returns a result with done: true, any subsequent calls to next() are expected to return done: true as well, although this is not enforced on the language level.

Now enough of theory - let's see some live examples of built-in iterators

```javascript
let arr = [1,2,3]
let map = new Map([[1, 'a'], [2, 'b'], [3, 'c']])
let str = "abcdefgh"

console.log(arr[Symbol.iterator]()) // Object [Array Iterator] {}
console.log(map[Symbol.iterator]()) // [Map Entries] { [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ] }
console.log(str[Symbol.iterator]()) // Object [String Iterator] {}

console.log(arr[Symbol.iterator]().next()) // { value: 1, done: false }
console.log(map[Symbol.iterator]().next()) // { value: [ 1, 'a' ], done: false }
console.log(str[Symbol.iterator]().next()) // { value: 'a', done: false }
```
As we can see in the output of a property `Symbol.iterator` - it returns an iterator object with `next` method on it (these are built-in and were initialized while initializing the built-in objects), calling which returns an object with the first value of the data defined earlier.

Now, lets build some custom Iterators as well-
```javascript
const obj = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    
    [Symbol.iterator]: () => {
        let start = 0;
        return {
            next: () => {
                if(obj[start] != undefined){
                    return {
                        value: obj[start++],
                        done: false
                    }
                }else{
                    return {
                        done: true
                    }
                }
            }
        }
    }
}

console.log(obj[Symbol.iterator]()) // { next: [Function: next] }

for(let elem of obj){
    console.log(elem) // a b c d
}
``` 
Above code defines a custom object with properties that are generally defined in array and a `Symbol.iterator` object which returns a object method `next` and some custom logic to generate the elements.

##Generators
Custom iterators for objects sounds very honey-nectorish but the implementation of it is similar to honey bee's sting. To simplify custom iterators, generator functions (syntax - `function*(){}`) are utilized. These functions are a special type that, upon invocation, do not execute their entire function body. Instead, they halt execution only until the yield keyword is encountered. At that point, execution pauses, and the function returns an object with properties defined by the iterator protocol. -
* done - [Boolean] - denoting if the iteration has been finished or not.
* value - [any] - value to be returned for this iteration. [Optional, if done - true]
Upon calling `next` again, the execution of the function will resume from the previous `yield` keyword until it reaches the next `yield`.  

Let's code some examples to become familiar with generator functions -
```javascript
function* generatorFunc(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

//calling this function returns new generators
const iter = generatorFunc(); // Object [Generator] {}
console.log(iter.next()) // { value: 1, done: false }
console.log(iter.next()) // { value: 2, done: false }
console.log(iter.next()) // { value: 3, done: false }
console.log(iter.next()) // { value: 4, done: false }
console.log(iter.next()) // { value: undefined, done: true }
```
Now, let's build a custom object iterator using generator function-

```javascript
const obj = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",

    [Symbol.iterator]: function* (){
        let start = 0;
        while(true){
            if(obj[start] == undefined){
                break;
            }
            
            yield obj[start++];
        }
    }
}

for(let elem of obj){
    console.log(elem); // a b c d
}
```

Now, if we compare the implementation of Symbol.iterator in both objects we created, you can clearly observe the disparity in the amount of boilerplate code required to construct an iterator manually versus using generator functions. Also if we talk about usability of generator functions on its own, then it will be in my idolo Lord Shikamaru's words-

![Lord Shikamaru saying What a drag!](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1rigsl9r0h9ow8lbggjz.gif)

There are some advanced utilities of generator functions, you check it out on **[MDN Docs - Advanced Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#advanced_generators)**

For the next iterations, we will look at topics like -
1. asynchronous iterators and asynchronous generators in javascript
2. authentication and authorization workflow

###THANK YOU!!🎉🫡
I would like to thank you for reading till here and appreciate your patience. It would mean the world to me if you give feedbacks/suggestions/recommendations below.

PS:
> I typically write these articles in the TIL form, sharing those things I learn during my daily work or after that. I aim to post once or twice a week with all things I have learned in the past week.
