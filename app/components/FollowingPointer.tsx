
"use client";

import { useEffect, useRef, useState } from "react";

type FollowingPointerProps = {
  title?: string;
};

export default function FollowingPointer({
  title = "Reem",
}: FollowingPointerProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });

  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState(title);

  useEffect(() => {
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    if (!media.matches) return;

    let frame: number;

    const move = (e: PointerEvent) => {
      target.current = {
        x: e.clientX,
        y: e.clientY,
      };

      const element = e.target;

      if (element instanceof Element) {
        const interactive = element.closest(
          "[data-cursor], a, button"
        );

        setLabel(
          interactive?.getAttribute("data-cursor") ||
            (interactive ? "Explore" : title)
        );
      }

      setVisible(true);
    };

    const hide = () => setVisible(false);

   
const animate = () => {
  current.current.x +=
    (target.current.x - current.current.x) * 0.2;

  current.current.y +=
    (target.current.y - current.current.y) * 0.2;

  if (cursorRef.current) {
    cursorRef.current.style.transform =
      `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
  }

  frame = requestAnimationFrame(animate);
};


    document.addEventListener("pointermove", move);
    document.addEventListener("pointerout", (e) => {
      if (!e.relatedTarget) hide();
    });

    window.addEventListener("blur", hide);

    document.documentElement.classList.add(
      "following-cursor-active"
    );

    frame = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("pointermove", move);
      window.removeEventListener("blur", hide);
      cancelAnimationFrame(frame);

      document.documentElement.classList.remove(
        "following-cursor-active"
      );
    };
  }, [title]);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`following-pointer ${
        visible ? "following-pointer-visible" : ""
      }`}
    >
      
<svg
  className="pointer-arrow"
  width="20"
  height="23"
  viewBox="0 0 20 23"
  fill="none"
>
  <path
    d="M2 1.5L17 13L10 13.5L7 20.5L2 1.5Z"
    fill="#A855F7"
    stroke="white"
    strokeWidth="1.2"
    strokeLinejoin="round"
  />
</svg>


      <div className="pointer-badge">
        {label}
      </div>
    </div>
  );
}
