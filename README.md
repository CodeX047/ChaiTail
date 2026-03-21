# ☕ ChaiTail

A lightweight utility-first CSS engine built with JavaScript.

ChaiTail allows you to style your HTML using simple class names like Tailwind — but instead of precompiled CSS, it dynamically converts classes into inline styles at runtime.

---

## Features

* Utility-first styling (`chai-p-20`, `chai-bg-red`)
* Dynamic class parsing (no need to predefine all classes)
* Lightweight and fast
* Works as an npm package
* Built using plain JavaScript (no frameworks)

---

## Installation

```bash
npm install chaitail
```

---

## Usage

### 1. Import in your project

```js
import { initChai } from "chaitail";

initChai();
```

---

### 2. Use classes in HTML

```html
<div class="chai-p-20 chai-bg-blue chai-text-white chai-flex chai-justify-center">
  Hello ChaiTail!
</div>
```

---

## How it Works

* Scans the DOM for class names
* Detects classes starting with `chai-`
* Parses the class name
* Converts it into inline CSS styles
* Applies styles dynamically

---

## Supported Utilities

### Spacing

* `chai-p-20` → `padding: 20px`
* `chai-m-10` → `margin: 10px`

### Colors

* `chai-bg-red` → `background-color: red`
* `chai-text-white` → `color: white`

### Layout

* `chai-flex` → `display: flex`
* `chai-justify-center` → `justify-content: center`
* `chai-items-center` → `align-items: center`

### Typography

* `chai-text-center` → `text-align: center`

### Borders

* `chai-rounded-10` → `border-radius: 10px`

---

## Notes

* Works best with modern browsers (ES Modules support required)
* For best results, use with bundlers like Vite or Webpack
* In plain HTML, use relative imports

---

##  Example

```html
<div class="chai-p-30 chai-bg-black chai-text-white chai-flex chai-center">
  Welcome to ChaiTail ☕
</div>
```

---

## Project Structure

```
chaitail/
├── src/
│   ├── index.js
│   ├── applyClass.js
│   └── ChaiCSS.js
├── demo/
└── package.json
```

---

## Future Improvements

* Support for `px`, `py`, `mx`, `my`
* Custom color palette
* Responsive utilities
* CDN support

---

## Author

**Vishal Patil**

---

## Support

If you like this project, give it a ⭐ on GitHub!
