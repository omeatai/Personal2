# src-algorithms

<details>
<summary>1. Vowel Count </summary>

# Multiples of 3 or 5

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

import re

def get_count(sentence):
    return len(re.findall('[aeiou]', sentence, re.IGNORECASE))
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
<summary>3. Vowel Count </summary>

# Vowel Count

[https://www.codewars.com/kata/54ff3102c1bad923760001f3](https://www.codewars.com/kata/54ff3102c1bad923760001f3)

DESCRIPTION:

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

```py

```

```py

```

# #END</details>

<details>
<summary>3. N </summary>

# N

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
