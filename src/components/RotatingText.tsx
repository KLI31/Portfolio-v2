import { useState, useEffect } from "react";

export function RotatingText({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length);
        setVisible(true);
      }, 300);
      return () => clearTimeout(swap);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <span
      style={{
        display: "inline-block",
        opacity: visible ? 1 : 0,
        transform: `translateY(${visible ? 0 : -6}px)`,
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      {phrases[index]}
    </span>
  );
}
