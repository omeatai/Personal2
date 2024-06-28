# src-algorithms

<details>
<summary>1. Vowel Count </summary>

# Vowel Count

[https://www.codewars.com/kata/54ff3102c1bad923760001f3](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

DESCRIPTION:

- Return the number (count) of vowels in the given string.
- We will consider a, e, i, o, u as vowels for this Kata (but not y).
- The input string will only consist of lower case letters and/or spaces.

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

### JAVASCRIPT SOLUTION:

```js

```

```js

```

```js

```

# #END</details>

<details>
<summary>3. Vowel Count </summary>

# Vowel Count

[https://www.codewars.com/kata/54ff3102c1bad923760001f3](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

DESCRIPTION:

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
