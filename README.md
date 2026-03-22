# ☕ ChaiTail

A lightweight utility-first CSS engine built with JavaScript.

ChaiTail lets you author utility classes directly in HTML and converts them to inline styles at runtime. There is no compiled CSS required.

---

## What’s New

- **Massive Utility Expansion:** Added deep layout constraints, directional spacing (`px`, `py`, `mt`, `mx-auto`), typography scales (`text-xl`, `leading-loose`, `tracking-wide`), and advanced appearance tokens (`shadow-lg`, `opacity-80`, `transition-all`).
- **Advanced Flex & Grid Control:** Full flexbox mapping (`flex-wrap`, `flex-col`, `items-center`) and grid auto-fits.
- Added `chai-h-`, `chai-w-`, `chai-gap-`, `chai-max-w-`, `chai-min-h-` sizing utilities.
- Colors now map through `teaColors` and support named or raw hex values automatically.

---

## Features

- **Zero-Build Styling**: Utility-first styling (`chai-p-20`, `chai-text-masala-chai`) applied entirely at runtime.
- **Dynamic class parsing**: No need to predefine all classes `chai-p-100` translates to `padding: 100px` flawlessly.
- **Lightweight and Fast**: Extremely optimal DOM scanning loop applies properties instantly on load.
- **Rich Tea Aesthetic Base**: Ships with a beautifully warm custom color palette.
- **Works as an npm package**: See [ChaiTail on npm](https://www.npmjs.com/package/chaitail).
- Built using plain JavaScript (no frameworks)

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
<div
  class="chai-p-40 chai-bg-white chai-rounded-20 chai-shadow-lg chai-max-w-600 chai-mx-auto"
>
  <h1
    class="chai-text-4xl chai-text-masala-chai chai-font-bold chai-tracking-tight"
  >
    Hello ChaiTail!
  </h1>
  <p class="chai-text-md chai-text-dark-tea chai-leading-relaxed chai-mt-20">
    This component was styled completely without CSS files or inline style tags.
  </p>
</div>
```

---

## How it Works

- Scans the DOM for class names
- Detects classes starting with `chai-`
- Maps static classes against `ChaiCSS.js` properties
- Parses dynamic prefixes (like `px-`, `max-w-`, `bg-`) and maps numeric/string outputs in `applyClass.js`
- Converts logic into inline CSS styles
- Applies styles dynamically and purges the `chai-` class to clean the DOM

---

## Supported Utilities

### Layout & Sizing

- `chai-flex`, `chai-flex-col`, `chai-items-center`, `chai-justify-center`
- `chai-mx-auto` → `margin: 0 auto`
- `chai-w-full`, `chai-h-full`, `chai-max-w-1200`, `chai-min-w-300`
- `chai-z-10`, `chai-relative`, `chai-overflow-hidden`

### Directional Spacing

- `chai-pt-20`, `chai-pb-20`, `chai-py-40`, `chai-px-40`
- `chai-mt-[val]`, `chai-mr-[val]`, `chai-gap-[val]`
- `chai-p-[val]`, `chai-m-[val]`

### Typography

- `chai-text-xs` up to `chai-text-6xl`
- `chai-font-sans`, `chai-font-mono`, `chai-antialiased`
- `chai-font-bold`, `chai-font-light`
- `chai-text-center`, `chai-text-right`
- `chai-tracking-tight`, `chai-tracking-wide` (Letter Spacing)
- `chai-leading-tight`, `chai-leading-relaxed` (Line Height)
- `chai-uppercase`, `chai-no-underline`

### Color & Appearance

- `chai-bg-red` or `chai-bg-#ff0000` or `chai-bg-masala-chai`
- `chai-text-white` or `chai-text-#fff`
- `chai-opacity-60`, `chai-opacity-80`
- `chai-shadow-md`, `chai-shadow-lg`, `chai-shadow-xl`
- `chai-border-light`, `chai-border-dashed`, `chai-border-none`
- `chai-rounded-[val]`, `chai-rounded-full`

### Interactivity

- `chai-transition-all`
- `chai-translate-y-[val]`, `chai-translate-x-[val]`
- `chai-cursor-pointer`

---

## Notes

- Works best with modern browsers (ES Modules support required)
- For best results, use with bundlers like Vite or Webpack
- In plain HTML, use relative imports

---

## Project Structure

```
chaitail/
├── src/
│   ├── index.js
│   ├── applyClass.js
│   ├── ChaiCSS.js
│   └── teaColors.js
├── demo/
│   ├── index.html
│   └── script.js
└── package.json
```

## Author

**Vishal Patil**

## Support

If you like this project, give it a ⭐ on GitHub!
