import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

const GLYPHS = "ABCDEFGHKLMNPRSTUVWXYZ0123456789#%&";
const STEP_MS = 45;

// Shows `text` assembling out of random glyphs, left to right, once on mount.
// It writes to the text node directly so the short burst never re-renders React.
export default function ScrambleText({ text, duration = 600, delay = 0, className }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current?.firstChild;
    if (reduceMotion || !node) return;

    let frame;
    let lastStep = 0;
    const start = performance.now() + delay;

    const tick = (now) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1);
      if (progress === 1) {
        node.nodeValue = text;
        return;
      }
      if (now - lastStep >= STEP_MS) {
        lastStep = now;
        const settled = Math.floor(progress * text.length);
        node.nodeValue = Array.from(text, (char, index) =>
          index < settled ? char : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
        ).join("");
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      node.nodeValue = text;
    };
  }, [text, duration, delay, reduceMotion]);

  return (
    <span ref={ref} aria-hidden="true" className={className}>
      {text}
    </span>
  );
}
