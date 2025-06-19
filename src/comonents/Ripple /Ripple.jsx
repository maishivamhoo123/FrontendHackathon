import React, { useRef } from "react";
import "./Ripple.css";

const RippleWater = () => {
  const containerRef = useRef(null);

  const createRipple = (event) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const circle = document.createElement("span");
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;

    // Calculate position relative to container
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple");

    // Remove old ripples
    const oldRipple = container.querySelector(".ripple");
    if (oldRipple) {
      oldRipple.remove();
    }

    container.appendChild(circle);

    // Remove the ripple after animation
    circle.addEventListener("animationend", () => {
      circle.remove();
    });
  };

  return (
    <div
      className="ripple-container"
      ref={containerRef}
      onMouseMove={createRipple} // or use onMouseEnter for single ripple
    >
      <h2>Hover to make ripple</h2>
    </div>
  );
};

export default RippleWater;
