"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const TypedHeading = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Building Web Solutions!",
        "Creating User Experiences!",
        "Exploring AI Technology!",
        "Developing Clean Code!",
      ],
      typeSpeed: 50,
      backSpeed: 40,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      backDelay: 3500,
      startDelay: 300,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h2 className="text-4xl font-bold mb-4">
      <span ref={el}></span>
    </h2>
  );
};
