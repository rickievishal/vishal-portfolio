// DirectionalRimIcon.jsx
import React from "react";

export default function DirectionalRimIcon({ children, size = 100, color = "#007AFF" }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "20%", // adjust for rounded corners
        background: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Top-left rim light */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle at top left, rgba(255,255,255,0.3), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom-right shadow rim */}
      <div
        style={{
          position: "absolute",
          bottom: "-50%",
          right: "-50%",
          width: "200%",
          height: "200%",
          background: "radial-gradient(circle at bottom right, rgba(0,0,0,0.25), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Icon content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
