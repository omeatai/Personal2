# src-algorithms

---

## ALGORITHM & CODE CHALLENGES

---

<details>
  <summary>VIDEOS</summary>

###### [1-EVEN OR ODD](https://scrimba.com/scrim/c6r8ngCM) | [Python](https://scrimba.com/scrim/c6r8ngCM) | [Javascript](https://scrimba.com/scrim/cN8JEqCr)

###### [2-VOWEL COUNT](https://scrimba.com/scrim/c3amV6Az) | [Python](https://scrimba.com/scrim/c3amV6Az) | [Javascript](https://scrimba.com/scrim/cN8JEyfq)

</details>

<details>
  <summary>CODEWARS</summary>

<details>
<summary>1. Multiples of 3 or 5 </summary>

# Multiples of 3 or 5

[https://www.codewars.com/kata/514b92a657cdc65150000006](https://www.codewars.com/kata/514b92a657cdc65150000006)

DESCRIPTION:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

### PYTHON SOLUTION:

```py
 def solution(number):
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)
```

```py
def solution(number):
    threes = list(range(3, number, 3))
    fives = list(range(5, number, 5))
    return sum(list(set(threes + fives)))
```

```py
def solution(number):
    sum = 0
    for i in range(number):
        if (i % 3) == 0 or (i % 5) == 0:
            sum += i
    return sum
```

### JAVASCRIPT SOLUTION:

```js
function solution(number) {
  let total = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}
```

```js
function solution(number) {
  return number < 1
    ? 0
    : [...new Array(number).keys()]
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}
```

# #END</details>

<details>
<summary>2. Even or Odd </summary>

# Even or Odd

[https://www.codewars.com/kata/53da3dbb4a5168369a0000fe](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

DESCRIPTION:

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

### PYTHON SOLUTION:

```py
def even_or_odd(number):
    return "Even" if number%2==0 else "Odd"
```

```py
def even_or_odd(number):
	return 'Odd' if number % 2 else 'Even'
```

```py
def even_or_odd(number):
  if number % 2 == 0:
    return "Even"
  else:
    return "Odd"
```

```py
def even_or_odd(number):
  return ["Even", "Odd"][number % 2]
```

### JAVASCRIPT SOLUTION:

```py
function evenOrOdd(number) {
  return number%2==0 ? "Even" : "Odd"
}
```

```py
function evenOrOdd(number) {
  if (number % 2 == 0){
    return "Even"
  }else{
    return "Odd"
    }
}
```

# #END</details>

<details>
<summary>3. Even or Odd </summary>

# Even or Odd

[https://www.codewars.com/kata/54ff3102c1bad923760001f3](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

DESCRIPTION:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

```py

```

# #END</details>

# #END</details>
