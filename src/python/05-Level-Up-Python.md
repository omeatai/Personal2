## +LinkedIn - Level Up Python

## [COURSE](https://www.linkedin.com/learning/level-up-python/put-your-python-skills-to-the-test?resume=false)

<details>
<summary>Challenge 1: Find Prime Factors </summary>

# Find Prime Factors

![image](https://github.com/user-attachments/assets/b798789f-2e75-4f86-abb6-f6ede2b94079)
![image](https://github.com/user-attachments/assets/970f05c3-43f7-43f8-85a6-1aff2ce245cd)
![image](https://github.com/user-attachments/assets/2f118f58-bd07-4eb3-9a1e-356bfb5601cf)


# #END</details>

<details>
<summary>Solution 1: Find Prime Factors </summary>

# Find Prime Factors

```py
def get_prime_factors(value):
    factors = []
    divisor = 2

    while divisor <= value:
        if value % divisor == 0:
            factors.append(divisor)
            value = value // divisor
        else:
            divisor += 1
    return factors


print(get_prime_factors(630))

```

```py
def get_prime_factors(value):
    factors = []

    while value > 2:
        for x in range(2, value + 1):
            if value % x == 0:
                factors.append(x)
                value = value//x

    return (sorted(factors))


print(get_prime_factors(630))

```

# #END</details>

<details>
<summary>Challenge 2: Identify a Palindrome </summary>

# Identify a Palindrome

![image](https://github.com/user-attachments/assets/c86dc625-488c-4388-9cba-476b816a163f)
![image](https://github.com/user-attachments/assets/9089b019-6c42-480c-80a3-05b8aca046cf)
![image](https://github.com/user-attachments/assets/48507f2c-3ac6-4b07-9bbb-c750a9ea64b3)
![image](https://github.com/user-attachments/assets/26327c2d-827d-41f6-9110-c5a8d604a9c2)

# #END</details>

<details>
<summary>Solution 2: Identify a Palindrome </summary>

# Identify a Palindrome

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
