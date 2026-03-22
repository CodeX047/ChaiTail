# ☕ ChaiTail

A lightweight utility-first CSS engine built with JavaScript.

ChaiTail lets you author utility classes directly in HTML and converts them into inline styles at runtime — no compiled CSS required.

---

## What’s New

* **Massive Utility Expansion**
  Added layout constraints, directional spacing (`px`, `py`, `mt`, `mx-auto`), typography scales (`text-xl`, `leading-loose`, `tracking-wide`), and advanced appearance tokens (`shadow-lg`, `opacity-80`, `transition-all`).

* **Advanced Flex & Grid Control**
  Full flexbox mapping (`flex-wrap`, `flex-col`, `items-center`) and grid support.

* **Expanded Sizing Utilities**
  Added `chai-h-`, `chai-w-`, `chai-gap-`, `chai-max-w-`, `chai-min-h-`.

* **Smart Color System**
  Colors map through `teaColors` and support named colors + raw hex values.

---

## Features

* **Zero-Build Styling**
  Write classes like `chai-p-20`, `chai-text-masala-chai` — no CSS files needed.

* **Dynamic Class Parsing**
  `chai-p-100` → `padding: 100px` automatically.

* **Lightweight & Fast**
  Efficient DOM scanning and instant style application.

* **Tea-Inspired Design System**
  Custom warm color palette (masala-chai, green-tea, etc.)

* **Available as npm package**
  https://www.npmjs.com/package/chaitail

* **No frameworks required**
  Built using plain JavaScript.

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
<div class="chai-p-40 chai-bg-white chai-rounded-20 chai-shadow-lg chai-max-w-600 chai-mx-auto">
  <h1 class="chai-text-4xl chai-text-masala-chai chai-font-bold chai-tracking-tight">
    Hello ChaiTail!
  </h1>
  <p class="chai-text-md chai-text-dark-tea chai-leading-relaxed chai-mt-20">
    This component was styled completely without CSS files or inline style tags.
  </p>
</div>
```

---

## Using with Vite (Recommended)

ChaiTail works best with modern bundlers like Vite.

### 1. Create a Vite project

```bash
npm create vite@latest
cd your-project
npm install
```

### 2. Install ChaiTail

```bash
npm install chaitail
```

### 3. Use in `main.js`

```js
import { initChai } from "chaitail";

initChai();
```

### 4. Run project

```bash
npm run dev
```

---

## How it Works

* Scans the DOM for class names
* Detects classes starting with `chai-`
* Matches static utilities from `ChaiCSS.js`
* Parses dynamic utilities (`px-`, `bg-`, `max-w-`, etc.)
* Converts them into inline styles
* Applies styles and removes `chai-*` classes

---

## Supported Utilities

### Layout & Sizing

* `chai-flex`, `chai-flex-col`, `chai-items-center`, `chai-justify-center`
* `chai-mx-auto` → `margin: 0 auto`
* `chai-w-full`, `chai-h-full`, `chai-max-w-1200`, `chai-min-w-300`
* `chai-z-10`, `chai-relative`, `chai-overflow-hidden`

---

### Directional Spacing

* `chai-pt-20`, `chai-pb-20`, `chai-px-40`, `chai-py-40`
* `chai-mt-20`, `chai-gap-20`
* `chai-p-[val]`, `chai-m-[val]`

---

### Typography

* `chai-text-xs` → `chai-text-6xl`
* `chai-font-bold`, `chai-font-light`
* `chai-text-center`, `chai-text-right`
* `chai-tracking-tight`, `chai-tracking-wide`
* `chai-leading-tight`, `chai-leading-relaxed`
* `chai-uppercase`, `chai-no-underline`

---

### Color & Appearance

* `chai-bg-red`, `chai-bg-#ff0000`, `chai-bg-masala-chai`
* `chai-text-white`, `chai-text-#fff`
* `chai-opacity-60`, `chai-opacity-80`
* `chai-shadow-md`, `chai-shadow-lg`, `chai-shadow-xl`
* `chai-border-light`, `chai-border-dashed`, `chai-border-none`
* `chai-rounded-[val]`, `chai-rounded-full`

---

### Interactivity

* `chai-transition-all`
* `chai-translate-y-[val]`, `chai-translate-x-[val]`
* `chai-cursor-pointer`

---

## Project Structure

```
chaitail/
├── src/
│   ├── index.js
│   ├── applyClass.js
│   ├── ChaiCSS.js
│   └── teaColors.js
└── package.json
```

---

## Notes

* Requires modern browsers (ES Modules support)
* Best experience with Vite or similar bundlers
* Plain HTML usage requires relative imports

---

## Author

**Vishal Patil**

---

## Support

If you like this project, give it a ⭐ on GitHub!
