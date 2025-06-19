import React from "react";
import "./ImageFocus.css";

const images = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "https://images.pexels.com/photos/1667080/pexels-photo-1667080.jpeg?auto=compress&w=600"
];

const BeautyProductsRow = () => (
  <div className="beauty-row">
    {images.map((src, idx) => (
      <div className="beauty-col" key={idx}>
        <img src={src} alt={`Beauty product ${idx + 1}`} />
        <span className="label">NEW</span>
      </div>
    ))}
  </div>
);

export default BeautyProductsRow;
