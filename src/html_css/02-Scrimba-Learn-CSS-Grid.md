
## +Scrimba-Learn-CSS-Grid

## [COURSE](https://v2.scrimba.com/learn-css-grid-c02k)

<details>
<summary>1 - Grid of Cards </summary>

<img width="1365" alt="image" src="https://github.com/user-attachments/assets/00788d86-2f55-4e45-baa0-1452b9ac9932">
<img width="1287" alt="image" src="https://github.com/user-attachments/assets/5a3cb18f-d140-45f6-bdcf-0c950da207d2">

### my_projects/00_react_html_css/01_grid_flexbox/grid/src/components/Grid/index.jsx:

```html
import React from "react";
import "./GridStyle.css";

const Grid = () => {
  return (
    <section className="container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
    </section>
  );
};

export default Grid;

```

### my_projects/00_react_html_css/01_grid_flexbox/grid/src/components/Grid/GridStyle.css:

```css
html,
body {
    background-color: #ffeead;
    margin: 10px;
}

.container {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 100px 100px;
    gap: 3px;
}

.container>div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: #ffeead;
}

.container>div:nth-child(1n) {
    background-color: #96ceb4;
}

.container>div:nth-child(3n) {
    background-color: #cb4154
}

.container>div:nth-child(2n) {
    background-color: #318ce7
}

.container>div:nth-child(4n) {
    background-color: #536872
}
```

```css
.container {
    display: grid;
    grid-template-columns: 100px auto 100px;
    grid-template-rows: 100px 100px;
    gap: 3px;
}
```

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 3px;
}
```

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;
}
```

```css
.container {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(3, 1fr);
    gap: 3px;
}
```

<img width="1382" alt="image" src="https://github.com/user-attachments/assets/bffa8e39-f24c-4941-9873-aadb1be26ca9">
<img width="1382" alt="image" src="https://github.com/user-attachments/assets/3d59eb4a-abe0-4d6b-93cc-46b5185f2fa2">

# #END</details>

<details>
<summary>2. Create new App - Home </summary>

```html

```

```css

```

```css

```

```css

```


```css

```

```css

```

```css

```

# #END</details>
