import React from "react";
import "./Graph.css";

const barData = [
  { label: "A", value: 549 },
  { label: "B", value: 875 },
  { label: "C", value: 506 },
  { label: "D", value: 185 },
  { label: "E", value: 122 },
  { label: "F", value: 881 },
  { label: "G", value: 539 },
  { label: "H", value: 29 },
  { label: "I", value: 44 },
  { label: "J", value: 106 },
  { label: "K", value: 607 },
];

const maxBar = 1000;

export default function Graph() {
  return (
    <div className="graph-container">
      <div className="graph-header">
        <div className="graph-left">
          <div className="filter-section">
            <div className="filter-title">Filter by</div>
            <div className="filter-group">
              <label>Type</label>
              <div className="filter-options">
                <button className="active">Refurbishment</button>
                <button>New build</button>
                <button>All</button>
              </div>
            </div>
            <div className="filter-group">
              <label>Status</label>
              <div className="filter-options">
                <button className="active">Complete</button>
                <button>Estimate</button>
              </div>
            </div>
          </div>

          <div className="graph-key">
            <div>
              <span className="key-dashed"></span>
              500 kgCO₂e/m² – Embodied Carbon Target 2030
            </div>
            <div>
              <span className="key-solid"></span>
              600 kgCO₂e/m² – Embodied Carbon Target 2025
            </div>
          </div>
        </div>

        <div className="graph-right">
          <div className="graph-title">
            <h1>EMBODIED <br /><span>CARBON</span><br />EMISSIONS</h1>
            <p>Intensity measured by kgCO₂e/m²</p>
            <div className="download">
              Download the data
              <svg width="24" height="24" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="11" stroke="#7a4c4c" strokeWidth="2" fill="none" />
                <path d="M12 7v7m0 0l-3-3m3 3l3-3" stroke="#7a4c4c" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="chart-wrapper">
        <div className="y-label">Embodied carbon intensity (kgCO₂e/m²)</div>
        <div className="bar-chart">
          {/* Y-axis grid lines */}
          <div className="grid line-500"></div>
          <div className="grid line-600"></div>

          {barData.map((bar, idx) => (
            <div className="bar-group" key={idx}>
              <div
                className="bar"
                style={{ height: `${(bar.value / maxBar) * 300}px` }}
                title={`${bar.value} kgCO₂e/m²`}
              >
                <span className="bar-label">{bar.value}</span>
              </div>
              <div className="x-label">{bar.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="accessibility-btn" aria-label="accessibility">🧑‍🦽</button>
    </div>
  );
}
