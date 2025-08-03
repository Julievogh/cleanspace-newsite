// src/components/FadeInSection.jsx
"use client";

import { useRef, useState, useEffect } from "react";

/**
 * FadeInSection: Wrapper component to fade in children when they enter the viewport.
 * Usage: <FadeInSection><YourComponent /></FadeInSection>
 */
export default function FadeInSection({ children, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
