## +LinkedIn - Pandas Exercises

<details>
<summary>1. Install Jupyter Notebook </summary>

# Check Python version 

```x
python3 --version
```

# Install Pip

```x
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
python3 get-pip.py
```

# Install Virtual Environment

```x
python3 -m venv venv
source venv/bin/activate
```

# Install Jupyter Notebook

```x
pip install notebook
```

# Run Jupyter Notebook

```x
jupyter notebook
```

# Check Installed Packages

```x
pip freeze
```

# Install Pandas

```x
pip install pandas
```

# Uninstall all currently installed packages

```x
pip freeze > installed_packages.txt
pip uninstall -r installed_packages.txt -y
```

# Install packages from requirements.txt:

```x
pip install -r requirements.txt
```

# #END</details>

<details>
<summary>2. Task: Read Data from CSV and Excel files </summary>

# Task: Read Data from CSV and Excel files

![image](https://github.com/user-attachments/assets/48cb9650-aba3-40a4-a3d5-d2526d4fad80)
![image](https://github.com/user-attachments/assets/66625d86-9e7e-4f9b-b07a-885c4111d78e)
![image](https://github.com/user-attachments/assets/97501b97-c4c4-44a3-8ff8-73856549d66a)
![image](https://github.com/user-attachments/assets/df2a90fd-efd4-400d-97e1-1a015673e854)

```py
import pandas as pd
```

# #END</details>

<details>
<summary>2B. Solution: Read Data from CSV and Excel files </summary>

# Solution: Read Data from CSV and Excel files

## Solution 1: Using Python

```py
with open("data/auto_mpg.csv", "r") as f:
    lines = f.readlines()
    print('MPG | Cylinders | Displacement | HorsePower | Weight | Acceleration | Model Year | Origin')
    for line in lines[1:11]:
        # line = line.strip().replace(',',' | ')
        line = line.strip().split(",")
        line = " | ".join(line)
        print(line)
```

```x
MPG | Cylinders | Displacement | HorsePower | Weight | Acceleration | Model Year | Origin
18.0 | 8 | 307.0 | 130.0 | 3504.0 | 12.0 | 70 | India
15.0 | 8 | 350.0 | 165.0 | 3693.0 | 11.5 | 70 | India
18.0 | 8 | 318.0 | 150.0 | 3436.0 | 11.0 | 70 | India
16.0 | 8 | 304.0 | 150.0 | 3433.0 | 12.0 | 70 | India
17.0 | 8 | 302.0 | 140.0 | 3449.0 | 10.5 | 70 | India
15.0 | 8 | 429.0 | 198.0 | 4341.0 | 10.0 | 70 | India
14.0 | 8 | 454.0 | 220.0 | 4354.0 | 9.0 | 70 | India
14.0 | 8 | 440.0 | 215.0 | 4312.0 | 8.5 | 70 | India
14.0 | 8 | 455.0 | 225.0 | 4425.0 | 10.0 | 70 | India
15.0 | 8 | 390.0 | 190.0 | 3850.0 | 8.5 | 70 | India
```

![image](https://github.com/user-attachments/assets/4b7671e3-6758-44c3-a8d1-9e779b2dcda0)

## Solution 2: Using Pandas Basic

```py
import pandas as pd

# Read the CSV file into a pandas DataFrame
df = pd.read_csv("data/auto_mpg.csv")
df.columns = ['MPG','Cylinders','Displacement','HorsePower','Weight','Acceleration','Model Year','Origin']
df.head(10)

# print(pd.options.display.max_rows)
# To Print the first 10 rows (excluding the header row)
# print(df.head(10).to_string(header=False, index=False))
```

![image](https://github.com/user-attachments/assets/1447e823-26c9-4b0b-96a3-6ca741b82f9f)


## Solution 3: Using Pandas Advanced

```py
import pandas as pd

df = pd.read_csv("./data/auto_mpg.csv", header=0, names=['MPG','Cylinders','Displacement','HorsePower','Weight','Acceleration','Model Year','Origin'])
df.head(10)
```

![image](https://github.com/user-attachments/assets/3ea83ea8-67df-4ade-b526-da8d92acae2c)

# #END</details>

<details>
<summary>3. Task: Check DataFrame information and identify types of columns </summary>

# Task: Check DataFrame information and identify types of columns

![image](https://github.com/user-attachments/assets/7a896604-7e49-4cbb-8f1d-bdb3fed5d2d5)
![image](https://github.com/user-attachments/assets/e56867df-8962-429a-b05f-eba656736e4f)

```py
import pandas as pd

df = pd.read_csv("./data/auto_mpg.csv",
                 header=0,
                 names = ['MPG', 'Cylinders', 'Displacement', 'Horsepower','Weight',\
                          'Acceleration', 'Model Year', 'Origin'])

df.head(10)
```

![image](https://github.com/user-attachments/assets/1d58c264-5970-4245-90a1-94f0e3d2d637)

# #END</details>

<details>
<summary>3B. Solution: Check DataFrame information and identify types of columns </summary>

# Solution: Check DataFrame information and identify types of columns

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

```py

```

```py

```

# #END</details>


