import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ParalaxPage.css";

gsap.registerPlugin(ScrollTrigger);

const ParallaxDoor = () => {
  const containerRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top top",
      end: "+=100vh",
      scrub: 1, // smoother scroll-based effect
      pin: true,
    },
  });

  // Move text up just to top edge and fade a little
  tl.to(
    textRef.current,
    {
      y: "-80px",
      opacity: 0.3,
      ease: "power2.out",
    },
    0
  );

  // Left image slow rotate
  tl.to(
    leftImageRef.current,
    {
      rotateY: -15, // subtle
      transformOrigin: "left center",
      ease: "power2.out",
    },
    0
  );

  // Right image slow rotate
  tl.to(
    rightImageRef.current,
    {
      rotateY: 15, // subtle
      transformOrigin: "right center",
      ease: "power2.out",
    },
    0
  );

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);

  return (
    <div className="parallax-container" ref={containerRef}>
      <div className="parallax-inner">
        <div className="image left" ref={leftImageRef}>
          <img src="https://thumbs.dreamstime.com/b/boy-blue-sky-background-active-jumping-45529454.jpg" alt="Left" />
        </div>
        <div className="parallax-text" ref={textRef}>
          <h1>Share quality time.<br />And space.</h1>
        </div>
        <div className="image right" ref={rightImageRef}>
          <img src="https://thumbs.dreamstime.com/b/boy-blue-sky-background-active-jumping-45529454.jpg" alt="Right" />
        </div>
      </div>
    </div>
  );
};

export default ParallaxDoor;
