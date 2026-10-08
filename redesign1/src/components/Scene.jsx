import { useEffect, useState } from "react";
import { m, useReducedMotion, useScroll } from "motion/react";
import AmbientCanvas from "./AmbientCanvas.jsx";
// Served from public/ under fixed names so index.html can preload the active one.
const images = {
  light: `${import.meta.env.BASE_URL}scene/day.webp`,
  dark: `${import.meta.env.BASE_URL}scene/night.webp`,
};
const THEME_FADE_MS = 700;

// One depth of the scene. While the theme is changing it holds both images,
// with the incoming one fading in over the outgoing one.
function SceneLayer({ depth, current, previous, children }) {
  return (
    <div className={`scene-layer ${depth}`}>
      {previous && (
        <div key={previous} className="scene-img" style={{ backgroundImage: `url(${images[previous]})` }} />
      )}
      <div
        key={current}
        className={`scene-img ${previous ? "scene-fade" : ""}`}
        style={{ backgroundImage: `url(${images[current]})` }}
      />
      {children}
    </div>
  );
}

// The valley, cut into three depths that travel at different speeds as the page scrolls.
// Each depth is the same flattened image behind a different mask (see .scene-mid and
// .scene-fg), because the art has no separate layer files yet.
export default function Scene({ theme }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const [current, setCurrent] = useState(theme);
  const [previous, setPrevious] = useState(null);
  if (theme !== current) {
    setPrevious(reduceMotion ? null : current);
    setCurrent(theme);
  }

  useEffect(() => {
    if (!previous) return;
    const timer = setTimeout(() => setPrevious(null), THEME_FADE_MS + 100);
    return () => clearTimeout(timer);
  }, [previous]);

  // Fetch the other theme's image once the page has settled, ahead of the first toggle,
  // so the fade has something to show.
  useEffect(() => {
    const timer = setTimeout(() => {
      new Image().src = images[theme === "dark" ? "light" : "dark"];
    }, 3000);
    return () => clearTimeout(timer);
  }, [theme]);

  const isNight = current === "dark";

  return (
    <m.div
      aria-hidden="true"
      className="scene"
      // --p is scroll progress from 0 to 1. With reduced motion the scene holds one framing.
      style={{ "--p": reduceMotion ? 0.55 : scrollYProgress }}
    >
      <SceneLayer depth="scene-sky" current={current} previous={previous}>
        <m.div
          className="scene-moon"
          initial={false}
          animate={isNight ? { x: "0%", y: "0%", opacity: 1 } : { x: "-160%", y: "260%", opacity: 0 }}
          transition={{ duration: THEME_FADE_MS / 1000, ease: [0.16, 1, 0.3, 1] }}
        />
      </SceneLayer>

      {!reduceMotion && <AmbientCanvas theme={current} />}

      <SceneLayer depth="scene-mid" current={current} previous={previous} />
      <SceneLayer depth="scene-fg" current={current} previous={previous} />
    </m.div>
  );
}
