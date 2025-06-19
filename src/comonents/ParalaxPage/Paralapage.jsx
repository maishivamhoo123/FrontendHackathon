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
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      textRef.current,
      {
        y: -100,
        opacity: 0,
        ease: "power2.out",
      },
      0
    );

    tl.to(
      leftImageRef.current,
      {
        rotateY: -75,
        transformOrigin: "left center",
        ease: "power2.inOut",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
      },
      0
    );

    tl.to(
      rightImageRef.current,
      {
        rotateY: 75,
        transformOrigin: "right center",
        ease: "power2.inOut",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
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
