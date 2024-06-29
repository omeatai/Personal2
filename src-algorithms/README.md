# src-algorithms

<details>
<summary>1. Vowel Count </summary>

# Vowel Count

[https://www.codewars.com/kata/54ff3102c1bad923760001f3](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

DESCRIPTION:

- Return the number (count) of vowels in the given string.
- We will consider a, e, i, o, u as vowels for this Kata (but not y).
- The input string will only consist of lower case letters and/or spaces.

```py
def get_count(sentence):
    pass
```

### PYTHON SOLUTION:

```py
def get_count(sentence):
    return sum(1 for v in sentence if v in 'aeiou')
```

```py
def get_count(sentence):
    return sum(v in 'aeiou' for v in sentence)
```

```py
import re

def get_count(sentence):
    return len(re.findall('[aeiou]', sentence, re.IGNORECASE))
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

```js

```

# #END</details>

<details>
<summary>2. Highest and Lowest </summary>

# Highest and Lowest

[https://www.codewars.com/kata/554b4ac871d6813a03000035](https://www.codewars.com/kata/554b4ac871d6813a03000035)

DESCRIPTION:

- In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples

- high_and_low("1 2 3 4 5")  # return "5 1"
- high_and_low("1 2 -3 4 5") # return "5 -3"
- high_and_low("1 9 3 4 -5") # return "9 -5"

Notes

* All numbers are valid Int32, no need to validate them.
* There will always be at least one number in the input string.
* Output string must be two numbers separated by a single space, and highest number is first.

```py
def high_and_low(numbers):
    # ...
    return numbers
```

### PYTHON SOLUTION:

```py
def high_and_low(numbers):
    list_nums = numbers.split(' ')
    sorted_nums = sorted(map(int, list_nums))
    return '{} {}'.format(sorted_nums[-1], sorted_nums[0])
```

```py
def high_and_low(numbers):
    list_num = [int(num) for num in numbers.split(' ')]
    return "{} {}".format(max(list_num), min(list_num))
```

```py
def high_and_low(numbers):
    list_num = [int(num) for num in numbers.split(' ')]
    return "%i %i" % (max(list_num),min(list_num))
```

```py
def high_and_low(numbers):
    nums = sorted(numbers.split(), key=int)
    return '{} {}'.format(nums[-1], nums[0])
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

```js

```

# #END</details>

<details>
<summary>3. Even or Odd </summary>

# Even or Odd

[https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/python](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/python)

DESCRIPTION:

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

```py
def even_or_odd(number):
    pass
```

### PYTHON SOLUTION:

```py
def even_or_odd(number):
    return "Even" if number%2==0 else "Odd"
```

```py
def even_or_odd(number):
    return "Odd" if number%2 else "Even"
```

```py
def even_or_odd(number):
  return ["Even", "Odd"][number % 2]
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

```js

```

# #END</details>

<details>
<summary>4. Sum of positive </summary>

# Sum of positive

[https://www.codewars.com/kata/5715eaedb436cf5606000381](https://www.codewars.com/kata/5715eaedb436cf5606000381)

DESCRIPTION:

- You get an array of numbers, return the sum of all of the positives ones.
- Example [1,-4,7,12] => 1 + 7 + 12 = 20
- Note: if there is nothing to sum, the sum is default to 0.

```py
def positive_sum(arr):
    return 0
```

### PYTHON SOLUTION:

```py
def positive_sum(arr):
    return sum([n for n in arr if n > 0])
```

```py
def positive_sum(arr):
    return sum(n for n in arr if n > 0)
```

```py
def positive_sum(arr):
    return sum(filter(lambda x: x > 0, arr))
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

```js

```

# #END</details>

<details>
<summary>5. Opposite number </summary>

# Opposite number

[https://www.codewars.com/kata/56dec885c54a926dcd001095](https://www.codewars.com/kata/56dec885c54a926dcd001095)

DESCRIPTION:

- Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

- Examples:

```x
1: -1
14: -14
```

```py
def opposite(number):
    pass
```

### PYTHON SOLUTION:

```py
def opposite(number):
    return -number
```

### JAVASCRIPT SOLUTION:

```js

```

# #END</details>

<details>
<summary>6. Return Negative </summary>

# Return Negative

[https://www.codewars.com/kata/55685cd7ad70877c23000102](https://www.codewars.com/kata/55685cd7ad70877c23000102)

DESCRIPTION:

- In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples

```py
make_negative(1);  # return -1
make_negative(-5); # return -5
make_negative(0);  # return 0
```

Notes
- The number can be negative already, in which case no change is required.
- Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

```py
def make_negative( number ):
    pass
```

### PYTHON SOLUTION:

```py
def make_negative( number ):
    return -number if number>0 else number
```

```py
def make_negative( number ):
    return -abs(number)
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

# #END</details>

<details>
<summary>7. Remove First and Last Character </summary>

# Remove First and Last Character

[https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)

DESCRIPTION:

- It's pretty straightforward. 
- Your goal is to create a function that removes the first and last characters of a string. 
- You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

```py
def remove_char(s):
    pass
```

### PYTHON SOLUTION:

```py
def remove_char(s):
    return s[1:-1]
```

### JAVASCRIPT SOLUTION:

```js

```

# #END</details>

<details>
<summary>8. String repeat </summary>

# String repeat

[https://www.codewars.com/kata/57a0e5c372292dd76d000d7e](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e)

DESCRIPTION:

- Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)

```x
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
```

```py
def repeat_str(repeat, string):
    return ''
```

### PYTHON SOLUTION:

```py
def repeat_str(repeat, string):
    return string*repeat
```

### JAVASCRIPT SOLUTION:

```js

```

# #END</details>

<details>
<summary>9. Reversed Strings </summary>

# Reversed Strings

[https://www.codewars.com/kata/5168bb5dfe9a00b126000018](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

DESCRIPTION:

Complete the solution so that it reverses the string passed into it.

```x
'world'  =>  'dlrow'
'word'   =>  'drow'
```

```py
def solution(string):
    pass
```

### PYTHON SOLUTION:

```py
def solution(string):
    return "".join(reversed([c for c in string]))
```

```py
def solution(string):
  return string[::-1]
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

# #END</details>

<details>
<summary>10. Grasshopper - Summation </summary>

# Grasshopper - Summation

[https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/python](https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/python)

DESCRIPTION:

Summation

- Write a program that finds the summation of every number from 1 to num. 
- The number will always be a positive integer greater than 0. 
- Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

```x
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
```

```py
def summation(num):
    pass
```

### PYTHON SOLUTION:

```py
def summation(num):
    return sum(n for n in range(1,num+1))
```

```py
def summation(num):
    return sum(range(1,num+1))
```

```py
def summation(num):
    return (1+num) * num / 2
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

# #END</details>

<details>
<summary>11. Remove String Spaces </summary>

# Remove String Spaces

[https://www.codewars.com/kata/57eae20f5500ad98e50002c5](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)

DESCRIPTION:

Write a function that removes the spaces from the string, then return the resultant string.

Examples:

```x
Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
```

```py
def no_space(x):
    pass
```

### PYTHON SOLUTION:

```py
def no_space(x):
    return x.replace(" ", "")
```

```py
def no_space(x):
    return "".join(x.split())
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

# #END</details>

<details>
<summary>12. Find the smallest integer in the array </summary>

# Find the smallest integer in the array

[https://www.codewars.com/kata/55a2d7ebe362935a210000b2](https://www.codewars.com/kata/55a2d7ebe362935a210000b2)

DESCRIPTION:

Given an array of integers your solution should find the smallest integer.

For example:

- Given [34, 15, 88, 2] your solution will return 2
- Given [34, -345, -1, 100] your solution will return -345
- You can assume, for the purpose of this kata, that the supplied array will not be empty.

```py
def find_smallest_int(arr):
    pass
```

### PYTHON SOLUTION:

```py
def find_smallest_int(arr):
    return min(arr)
```

```py
def findSmallestInt(arr):
    arr.sort()
    return arr[0]
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

# #END</details>

<details>
<summary>13. Convert a Number to a String! </summary>

# Convert a Number to a String!

[https://www.codewars.com/kata/5265326f5fda8eb1160004c8](https://www.codewars.com/kata/5265326f5fda8eb1160004c8)

DESCRIPTION:

- We need a function that can transform a number (integer) into a string.
- What ways of achieving this do you know?

Examples (input --> output):

```x
123  --> "123"
999  --> "999"
-100 --> "-100"
```

```py
def number_to_string(num):
    pass
```

### PYTHON SOLUTION:

```py
def number_to_string(num):
    return str(num)
```

### JAVASCRIPT SOLUTION:

```js

```

# #END</details>

<details>
<summary>14. Counting sheep </summary>

# Counting sheep

[https://www.codewars.com/kata/54edbc7200b811e956000556](https://www.codewars.com/kata/54edbc7200b811e956000556)

DESCRIPTION:

- Consider an array/list of sheep where some sheep may be missing from their place.
- We need a function that counts the number of sheep present in the array (true means present).

For example,

```x
[True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]
```

- The correct answer would be 17.
- Hint: Don't forget to check for bad values like null/undefined

```py
def count_sheeps(sheep):
  pass
```

### PYTHON SOLUTION:

```py
def count_sheeps(sheep):
    return sum(s in {True} for s in sheep)
```

```py
def count_sheeps(sheep):
    return sum(s for s in sheep if s)
```

```py
def count_sheeps(sheep):
  return sheep.count(True)
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

# #END</details>

<details>
<summary>15. Square(n) Sum </summary>

# Square(n) Sum

[https://www.codewars.com/kata/515e271a311df0350d00000f](https://www.codewars.com/kata/515e271a311df0350d00000f)

DESCRIPTION:

Complete the square sum function so that it squares each number passed into it and then sums the results together.

![image](https://github.com/omeatai/src-AI-Software/assets/32337103/3bbda463-c69a-4de9-b201-bcf4f1d51f51)

```py
def square_sum(numbers):
    pass
```

### PYTHON SOLUTION:

```py
def square_sum(numbers):
    return sum(n**2 for n in numbers)
```

### JAVASCRIPT SOLUTION:

```js

```

# #END</details>

<details>
<summary>16. Century From Year </summary>

# Century From Year

[https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)

DESCRIPTION:

Introduction

- The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task

- Given a year, return the century it is in.

```x
Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
```

```py
def century(year):
    pass
```

### PYTHON SOLUTION:

```py
def century(year):
    str_year = str(year)
    if len(str_year) < 3:
        return 1
    elif len(str_year) == 3:
        return int(str_year[0]) if str_year[1:] == "00" else int(str_year[0]) + 1
    else:
        return int(str_year[:2]) if (str_year[1:] == "000" or str_year[2:] == "00") else int(str_year[:2]) + 1
```

```py
def century(year):
    return (year + 99) // 100
```

```py
import math

def century(year):
    return math.ceil(year / 100)
```

### JAVASCRIPT SOLUTION:

```js

```

```js

```

# #END</details>

<details>
<summary>17. Keep Hydrated! </summary>

# Keep Hydrated!

[https://www.codewars.com/kata/582cb0224e56e068d800003c](https://www.codewars.com/kata/582cb0224e56e068d800003c)

DESCRIPTION:

- Nathan loves cycling.
- Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
- You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

```x
time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5
```

```py
def litres(time):
    return 0
```

### PYTHON SOLUTION:

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
