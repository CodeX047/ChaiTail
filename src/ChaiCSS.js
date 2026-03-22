const ChaiCSS = {
  // Layout
  "chai-flex": { display: "flex" },
  "chai-block": { display: "block" },
  "chai-inline": { display: "inline" },
  "chai-hidden": { display: "none" },
  "chai-flex-wrap": { flexWrap: "wrap" },
  "chai-mx-auto": { marginLeft: "auto", marginRight: "auto" },
  "chai-box-border": { boxSizing: "border-box" },
  "chai-relative": { position: "relative" },
  "chai-absolute": { position: "absolute" },
  "chai-fixed": { position: "fixed" },
  "chai-z-10": { zIndex: "10" },

  // Flexbox
  "chai-flex-row": { flexDirection: "row" },
  "chai-flex-col": { flexDirection: "column" },
  "chai-flex-1": { flex: "1" },
  "chai-flex-1-2": { flex: "1.2" },
  "chai-flex-2": { flex: "2" },
  "chai-justify-center": { justifyContent: "center" },
  "chai-justify-between": { justifyContent: "space-between" },
  "chai-justify-around": { justifyContent: "space-around" },
  "chai-justify-start": { justifyContent: "flex-start" },
  "chai-justify-end": { justifyContent: "flex-end" },
  "chai-items-center": { alignItems: "center" },
  "chai-items-start": { alignItems: "flex-start" },
  "chai-items-end": { alignItems: "flex-end" },

  // Typography
  "chai-font-sans": { fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" },
  "chai-font-mono": { fontFamily: "ui-monospace, SFMono-Regular, monospace" },
  "chai-antialiased": { WebkitFontSmoothing: "antialiased" },
  
  "chai-text-xs": { fontSize: "0.75rem", lineHeight: "1rem" },
  "chai-text-sm": { fontSize: "0.875rem", lineHeight: "1.25rem" },
  "chai-text-md": { fontSize: "1rem", lineHeight: "1.5rem" },
  "chai-text-lg": { fontSize: "1.125rem", lineHeight: "1.75rem" },
  "chai-text-xl": { fontSize: "1.25rem", lineHeight: "1.75rem" },
  "chai-text-2xl": { fontSize: "1.5rem", lineHeight: "2rem" },
  "chai-text-3xl": { fontSize: "1.875rem", lineHeight: "2.25rem" },
  "chai-text-4xl": { fontSize: "2.25rem", lineHeight: "2.5rem" },
  "chai-text-5xl": { fontSize: "3rem", lineHeight: "1" },
  "chai-text-6xl": { fontSize: "3.75rem", lineHeight: "1" },

  "chai-tracking-tight": { letterSpacing: "-0.025em" },
  "chai-tracking-wide": { letterSpacing: "0.025em" },
  
  "chai-leading-tight": { lineHeight: "1.25" },
  "chai-leading-relaxed": { lineHeight: "1.625" },
  "chai-leading-loose": { lineHeight: "2" },

  "chai-text-left": { textAlign: "left" },
  "chai-text-center": { textAlign: "center" },
  "chai-text-right": { textAlign: "right" },
  "chai-uppercase": { textTransform: "uppercase" },
  "chai-no-underline": { textDecoration: "none" },
  "chai-font-bold": { fontWeight: "bold" },
  "chai-font-normal": { fontWeight: "normal" },
  "chai-font-light": { fontWeight: "300" },

  // Overflow
  "chai-overflow-hidden": { overflow: "hidden" },
  "chai-overflow-auto": { overflow: "auto" },

  // Cursor
  "chai-cursor-pointer": { cursor: "pointer" },

  // Borders & Surfaces
  "chai-border": { border: "1px solid rgba(0,0,0,0.1)" },
  "chai-border-none": { border: "none" },
  "chai-border-light": { border: "1px solid rgba(0, 0, 0, 0.05)" },
  "chai-border-t-light": { borderTop: "1px solid rgba(0, 0, 0, 0.05)" },
  "chai-border-b-light": { borderBottom: "1px solid rgba(0, 0, 0, 0.05)" },
  "chai-border-accent": { border: "2px solid rgba(174, 118, 71, 0.2)" },
  "chai-border-dashed": { border: "1px dashed rgba(61,49,42,0.2)" },
  "chai-outline-none": { outline: "none" },
  "chai-rounded-full": { borderRadius: "9999px" },
  
  "chai-shadow-sm": { boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
  "chai-shadow-md": { boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
  "chai-shadow-lg": { boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
  "chai-shadow-xl": { boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" },

  // Width / Height
  "chai-w-full": { width: "100%" },
  "chai-h-full": { height: "100%" },

  // Display helpers
  "chai-center": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  
  // Transitions
  "chai-transition-all": { transition: "all 0.2s ease" },
  
  // Grids
  "chai-grid-auto-fit-140": { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))" }
};

export default ChaiCSS;
