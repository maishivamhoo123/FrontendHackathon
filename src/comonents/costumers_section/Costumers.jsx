import React, { useState, useEffect } from "react";
import "./costumer.css";

import {
  OpenAIIcon,
  VercelIcon,
  GitHubIcon,
  RampIcon,
  ScaleIcon,
  BoomIcon,
  CashAppIcon,
  PerplexityIcon,
  SupercellIcon,
  MonzoIcon,
  RaycastIcon,
  RetoolIcon,
  MercuryIcon,
} from "./openAiIcon";

// Master list with optional size
const iconsList = [
  { key: "openai", Icon: OpenAIIcon, large: true },
  { key: "vercel", Icon: VercelIcon },
  { key: "github", Icon: GitHubIcon, large: true },
  { key: "ramp", Icon: RampIcon },
  { key: "scale", Icon: ScaleIcon },
  { key: "boom", Icon: BoomIcon, large: true },
  { key: "cashapp", Icon: CashAppIcon },
  { key: "perplexity", Icon: PerplexityIcon },
  { key: "supercell", Icon: SupercellIcon },
  { key: "monzo", Icon: MonzoIcon, large: true },
  { key: "raycast", Icon: RaycastIcon },
  { key: "retool", Icon: RetoolIcon },
  { key: "mercury", Icon: MercuryIcon },
];

// Split into chunks of 4
const chunkIcons = (arr, size = 4) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const iconSets = chunkIcons(iconsList, 4);

const LogoCarousel = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      const timeout = setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % iconSets.length);
        setFade(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">Our Customers</h2>
      <div className={`icon-grid ${fade ? "fade-in" : "fade-out"}`}>
        {iconSets[currentSet].map(({ key, Icon, large }) => (
          <div className={`icon-wrapper ${large ? "large-icon" : ""}`} key={key}>
            <Icon />
          </div>
        ))}
      </div>
    </section>
  );
};


export default LogoCarousel;
