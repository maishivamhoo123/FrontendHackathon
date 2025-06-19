import React, { useState } from "react";
import "./ImageFocus.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Beautiful Mountain",
    description: "A stunning view of a mountain at sunrise.",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Serene Lake",
    description: "A peaceful lake surrounded by trees.",
  },
];

const ImageFocusPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="gallery-row">
      {images.map((img, idx) => (
        <div
          className="gallery-item"
          key={idx}
        >
          <img
            src={img.src}
            alt={img.title}
            className="main-image"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            tabIndex={0}
            onFocus={() => setHoveredIndex(idx)}
            onBlur={() => setHoveredIndex(null)}
          />
          <div className={`content ${hoveredIndex === idx ? "visible" : ""}`}>
            <h2>{img.title}</h2>
            <p>{img.description}</p>
            <button>Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageFocusPage;
