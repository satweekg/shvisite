"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsClickable(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.classList.contains("clickable")
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isClickable ? "clickable" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: ".1s all ease",
      }}
    />
  );
}
