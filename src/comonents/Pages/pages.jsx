import React, { useState } from "react";
import "./Pages.css";

const brandKits = [
  {
    id: "orange",
    name: "Orange Kit",
    triangleColors: ["#f59e42", "#fff", "#fff"], // orange, white, white
  },
  {
    id: "green",
    name: "Green Kit",
    triangleColors: ["#22c55e", "#fff", "#fff"], // green, white, white
  },
  {
    id: "blue",
    name: "Blue Kit",
    triangleColors: ["#3b82f6", "#fff", "#fff"], // blue, white, white
  },
];

export default function BrandKitsCard() {
  const [selected, setSelected] = useState("blue");

  return (
    <div className="brandkits-card">
      <div className="brandkits-card-inner">
        <h2 className="brandkits-title">Brand Kits</h2>
        <div className="brandkits-list">
          {brandKits.map((kit) => (
            <div
              key={kit.id}
              className={`brandkits-item${selected === kit.id ? " selected" : ""}`}
              onClick={() => setSelected(kit.id)}
            >
              <div className="brandkits-left">
                <span className={`brandkits-checkbox${selected === kit.id ? " checked" : ""}`}>
                  {selected === kit.id && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                {/* Triangle arrangement */}
                <span className="brandkits-triangle">
                  <span className="brandkits-triangle-row">
                    <span
                      className="brandkits-color"
                      style={{ background: kit.triangleColors[0] }}
                    />
                  </span>
                  <span className="brandkits-triangle-row">
                    <span
                      className="brandkits-color"
                      style={{ background: kit.triangleColors[1] }}
                    />
                    <span
                      className="brandkits-color"
                      style={{ background: kit.triangleColors[2] }}
                    />
                  </span>
                </span>
                <span className="brandkits-name">{kit.name}</span>
              </div>
             <span className="brandkits-settings">
  {/* Slider SVG */}
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="17" y2="6"/>
    <circle cx="8" cy="6" r="2" fill="#a1a1aa"/>
    <line x1="3" y1="14" x2="17" y2="14"/>
    <circle cx="14" cy="14" r="2" fill="#a1a1aa"/>
  </svg>
</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
