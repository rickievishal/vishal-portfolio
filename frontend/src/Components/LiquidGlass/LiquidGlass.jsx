// LiquidGlass.jsx
import React from "react";

export default function LiquidGlass({ children, style }) {
  const defaultStyle = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "16px",
    padding: "2rem",
    display: "inline-block",
    color: "#fff",
    fontFamily: "sans-serif",
    textAlign: "center",
    filter: "url(#glass)",
    ...style, // allow overriding styles
  };

  return (
    <div>
      {/* SVG filter definition */}
      <svg width="0" height="0">
        <defs>
          <filter id="glass">
            <feGaussianBlur stdDeviation="8" />
            <feComponentTransfer>
              <feFuncR type="linear" slope=".9" intercept="0.05" />
              <feFuncG type="linear" slope=".9" intercept="0.05" />
              <feFuncB type="linear" slope=".9" intercept="0.05" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      {/* Glass wrapper */}
      <div style={defaultStyle}>
        {children}
      </div>
    </div>
  );
}
