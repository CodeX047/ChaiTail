const ChaiCSS = {
  // Layout
  "chai-flex": { display: "flex" },
  "chai-block": { display: "block" },
  "chai-inline": { display: "inline" },
  "chai-hidden": { display: "none" },

  // Flexbox
  "chai-flex-row": { flexDirection: "row" },
  "chai-flex-col": { flexDirection: "column" },
  "chai-justify-center": { justifyContent: "center" },
  "chai-justify-between": { justifyContent: "space-between" },
  "chai-justify-around": { justifyContent: "space-around" },
  "chai-items-center": { alignItems: "center" },
  "chai-items-start": { alignItems: "flex-start" },
  "chai-items-end": { alignItems: "flex-end" },

  // Text alignment
  "chai-text-left": { textAlign: "left" },
  "chai-text-center": { textAlign: "center" },
  "chai-text-right": { textAlign: "right" },

  // Font weight
  "chai-font-bold": { fontWeight: "bold" },
  "chai-font-normal": { fontWeight: "normal" },
  "chai-font-light": { fontWeight: "300" },

  // Position
  "chai-relative": { position: "relative" },
  "chai-absolute": { position: "absolute" },
  "chai-fixed": { position: "fixed" },

  // Overflow
  "chai-overflow-hidden": { overflow: "hidden" },
  "chai-overflow-auto": { overflow: "auto" },

  // Cursor
  "chai-cursor-pointer": { cursor: "pointer" },

  // Borders
  "chai-border": { border: "1px solid black" },
  "chai-border-none": { border: "none" },

  // Width / Height (basic)
  "chai-w-full": { width: "100%" },
  "chai-h-full": { height: "100%" },

  // Display helpers
  "chai-center": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default ChaiCSS;
