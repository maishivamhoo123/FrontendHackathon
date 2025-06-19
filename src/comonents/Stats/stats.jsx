import React from "react";
import "./Stats.css";

const metrics = [
  {
    title: "Managed portfolio carbon footprint",
    unit: "tCO₂e",
    value: "45,048",
    change: "+16%",
    changeDir: "up",
    changeNote: "from 2019",
    years: [
      { year: 2022, value: 45048 },
      { year: 2021, value: 14111 },
      { year: 2020, value: 32813 },
      { year: 2019, value: 38673 },
    ],
    footer: "See full breakdown of carbon footprint",
    icon: "→",
  },
  {
    title: "Managed portfolio energy intensity",
    unit: "kWh/m²",
    value: "123",
    change: "-22%",
    changeDir: "down",
    changeNote: "from 2019",
    years: [
      { year: 2022, value: 123 },
      { year: 2021, value: 128 },
      { year: 2020, value: 135 },
      { year: 2019, value: 157 },
    ],
    footer: "Download the data",
    icon: "⬇",
  },
  {
    title: "Managed portfolio energy consumption",
    unit: "kWh",
    value: "47,790,662",
    change: "-27%",
    changeDir: "down",
    changeNote: "from 2019",
    years: [
      { year: 2022, value: 47790662 },
      { year: 2021, value: 49324077 },
      { year: 2020, value: 48784205 },
      { year: 2019, value: 65198706 },
    ],
    footer: "Download the data",
    icon: "⬇",
  },
];

function getBarPercent(value, max) {
  return ((value / max) * 100).toFixed(1);
}

const Dashboard = () => {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-container">
        {metrics.map((metric, idx) => {
          const maxYearValue = Math.max(...metric.years.map(y => y.value));
          return (
            <div className="metric-card" key={idx}>
              <div className="metric-header">
                <span className="metric-title">{metric.title}</span>
                <span className="metric-unit">{metric.unit}</span>
              </div>
              <div className="metric-main">
                <span className="metric-value">{metric.value}</span>
                <div className={`metric-change ${metric.changeDir}`}>
                  <span>
                    {metric.changeDir === "up" ? "↑" : "↓"} {metric.change}
                  </span>
                  <span className="metric-change-note">{metric.changeNote}</span>
                </div>
              </div>
              <div className="metric-years">
                {metric.years.map((y, i) => (
                  <div className="year-row" key={i}>
                    <span className="year-label">{y.year}</span>
                    <span className="year-value">{y.value.toLocaleString()}</span>
                    <div className="year-bar-bg">
                      <div
                        className="year-bar-fg"
                        style={{ width: `${getBarPercent(y.value, maxYearValue)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="metric-footer">
                <span>{metric.footer} <span className="footer-icon">{metric.icon}</span></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
