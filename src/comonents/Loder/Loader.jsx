import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <div className="loader-bg">
      <div className="loader-bar-container">
        <div
          className="loader-bar-fill"
          style={{ width: `${progress}%` }}
        />
        <div className="loader-bar-shadow" />
      </div>
      <div className="loader-percentage">{progress}%</div>
    </div>
  );
};

export default Loader;
