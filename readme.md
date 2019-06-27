# Focals
Daily challenges from [Light House Labs Web Development Bootcamp](https://www.lighthouselabs.ca/web-bootcamp).

# Week 1
## [sum.js](sum.js)
This file sums the input argumets
```bash
> node sum 1 2
3

> node sum 100 20 30 50
200
```

## [lunch.js](lunch.js)
A function such that it takes 2 input and prints a suggestion. (Boolean representing state of hunger, & number representing time in minutes to spare)

Output:
```
  I'm hungry and I have 20 minutes for lunch.
  Try to eat at a nearby food store
  ---
  I'm hungry and I have 50 minutes for lunch.
  You are in the bootcamp, are you sure you got more than 30 minute?!
  ---
  I'm not hungry and I have 30 minutes for lunch.
  Go back to work!
  ---
  I'm hungry and I have 15 minutes for lunch.
  Pick something up and eat in the lab
```

## [stringReverser.js](stringReverser.js)
Reverses the order of characters in a string. String are pssed via `bash` argv arguments.
 ```bash
> node reverse.js hello goodbye
olleh
eybdoog
```

## [pig-latin.js](pig-latin.js)
Converts each input argument srings to pig latin (using simplified rules), then puts the translated words together into one sentence, and logges it to the console.

```bash
> node pig-latin Hi my name is John
ihay mymyay amenay isyay ohnjay
```

```bash
> node pig-latin this is all just gibberish
isthay isyay allyay ustjay ibberishgay
```
## concepts.js
Joins an array of strings.

Given
```javascript
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
console.log(conceptList);
```
```bash
> node concepts
Today I learned about gists, types, operators, iteration, problem solving.
```

## [password.js](password.js)
Takes a command line argument (a password) and obfuscates it by following a few rules.
* Obfuscation Rules
    * Every "a" in the string should be replaced with a "4".
    * Every "e" in the string should be replaced with a "3".
    * Every "o" (oh) in the string should be replaced with a "0" (zero).
    * Every "l" (el) in the string should be replaced with a "1" (one).

```bash 
> node password.js password
p4ssw0rd

> node password.js abracadabra
4br4c4d4br4

> node password.js audaciously
4ud4ci0us1y
```

## [dice-roller.js](dice-roller.js)
Takes a single parameter (a number) from the command line and rolls that many six-sided dice. 

Example:
```bash
> node dice-roller 3
Rolled 3 dice: 2, 6, 5

> node dice-roller 5 10
Rolled 5 dice: 6, 5, 5, 1, 1
Rolled 10 dice: 6, 2, 6, 1, 2, 5, 4, 5, 1, 4
```
## [average.js](average.js)
Averages a given array of numbers.


## [reverse.js](reverse.js)
Reverse the characters of words passed via command line arguments.

```bash
> node reverse Hi there. How are you?
iH .ereht woH era ?uoy

> node reverse I am good. Thank you for asking.
I ma .doog knahT uoy rof .gniksa
```

## [isPalindrome.js](isPalindrome.js)
Checks if a string or sentence a palindrome.

Examples:
```bash
> node isPalindrome "a santa at NASA"
true

> node isPalindrome "racecar"
true

> node isPalindrome "foo"
false
```