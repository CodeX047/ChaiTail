import ChaiCSS from "./ChaiCSS.js";

function parseChaiClass(cls) {
  const parts = cls.split("-");

  if (parts[0] !== "chai") return null;

  const type = parts[1];
  const value = parts.slice(2).join("-");

  switch (type) {
    case "p":
      return { padding: value + "px" };

    case "m":
      return { margin: value + "px" };

    case "bg":
      return { backgroundColor: value };

    case "text":
      if (value === "center") return { textAlign: "center" };
      return { color: value };

    case "flex":
      return { display: "flex" };

    case "justify":
      return { justifyContent: value };

    case "items":
      return { alignItems: value };

    case "rounded":
      return { borderRadius: value + "px" };

    default:
      return null;
  }
}

export function applyClasses(element) {
  [...element.classList].forEach((cls) => {
    let style = ChaiCSS[cls];

    if (!style) {
      style = parseChaiClass(cls);
    }

    if (style) {
      Object.assign(element.style, style);

      if (cls.startsWith("chai-")) {
        element.classList.remove(cls);
      }
    }
  });
}

export function initChai() {
  const elements = document.querySelectorAll("[class]");
  elements.forEach(applyClasses);
}
