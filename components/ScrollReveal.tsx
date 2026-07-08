"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealState = "static" | "hidden" | "revealed";

type Props = {
  children: ReactNode;
  /** Extra classes on the wrapper element. */
  className?: string;
  /** Stagger delay (ms) applied when the element reveals. */
  delay?: number;
  /** Pre-reveal vertical offset in px. */
  offset?: number;
  /** Element to render as (default "div"); use "li" inside grids/lists. */
  as?: ElementType;
};

/**
 * Progressive-enhancement scroll reveal. Animates transform + opacity only.
 *
 * - SSR / no-JS: renders fully visible ("static"). Nothing is ever hidden without JS.
 * - After mount: only elements BELOW the viewport get hidden, then fade + rise in
 *   as they scroll into view (IntersectionObserver). Elements already on screen at
 *   mount are never hidden (no flash).
 * - prefers-reduced-motion: stays fully visible, no motion.
 *
 * The "hidden" state carries no transition (instant, off-screen), so the reveal
 * transition is only ever applied once the element is already painted hidden.
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  offset = 16,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<RevealState>("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) return; // never hide something already on screen

    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("revealed");
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const motionClass =
    state === "hidden"
      ? "opacity-0"
      : state === "revealed"
        ? "opacity-100 transition duration-500 ease-out"
        : "";

  const style =
    state === "hidden"
      ? { transform: `translateY(${offset}px)` }
      : state === "revealed"
        ? { transform: "translateY(0)", transitionDelay: `${delay}ms` }
        : undefined;

  return (
    <Tag
      ref={ref as any}
      className={`${className} ${motionClass}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
