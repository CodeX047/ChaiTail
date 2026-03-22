import ChaiCSS from "./ChaiCSS.js";
import TeaColors from "./teaColors.js";

function parseChaiClass(cls) {
  const parts = cls.split("-");

  if (parts[0] !== "chai") return null;

  const type = parts[1];
  const value = parts.slice(2).join("-");

  switch (type) {
    case "p":
      return { padding: value + "px" };
    case "px":
      return { paddingLeft: value + "px", paddingRight: value + "px" };
    case "py":
      return { paddingTop: value + "px", paddingBottom: value + "px" };
    case "pt":
      return { paddingTop: value + "px" };
    case "pb":
      return { paddingBottom: value + "px" };

    case "m":
      return { margin: value + "px" };
    case "mx":
      return { marginLeft: value + "px", marginRight: value + "px" };
    case "my":
      return { marginTop: value + "px", marginBottom: value + "px" };
    case "mt":
      return { marginTop: value + "px" };
    case "mb":
      return { marginBottom: value + "px" };
    case "mr":
      return { marginRight: value + "px" };
    case "ml":
      return { marginLeft: value + "px" };

    case "bg":
      return { backgroundColor: TeaColors[value] || value };

    case "text":
      if (value === "center" || value === "left" || value === "right") return { textAlign: value };
      return { color: TeaColors[value] || value };

    case "flex":
      if (value) return { flex: value.replace("-", ".") }; // handles chai-flex-1 or chai-flex-1-2
      return { display: "flex" };

    case "justify":
      return { justifyContent: value };

    case "items":
      return { alignItems: value };

    case "rounded":
      return { borderRadius: value + "px" };

    case "h":
      return { height: value + "px" };

    case "w":
      return { width: value + "px" };

    case "max":
      if (value.startsWith("w-")) return { maxWidth: value.substring(2) + "px" };
      if (value.startsWith("h-")) return { maxHeight: value.substring(2) + "px" };
      return null;

    case "min":
      if (value.startsWith("w-")) return { minWidth: value.substring(2) + "px" };
      if (value.startsWith("h-")) return { minHeight: value.substring(2) + "px" };
      return null;

    case "gap":
      return { gap: value + "px" };

    case "opacity":
      return { opacity: String(Number(value) / 100) };

    case "translate":
      if (value.startsWith("y-")) return { transform: "translateY(" + value.substring(2) + "px)" };
      if (value.startsWith("x-")) return { transform: "translateX(" + value.substring(2) + "px)" };
      return null;

    case "z":
      return { zIndex: value };

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
