import { useEffect, useRef } from "react";

// The canvas is drawn at a third of the viewport size and scaled up, so everything
// on it lands on a chunky pixel grid that matches the landscape art.
const SCALE = 3;
const FRAME_MS = 1000 / 30;
const FLOCK_EVERY_MS = 20000;
const FLOCK_CROSSING_MS = 14000;

// Cloud shapes as [x, y, width, height] blocks.
const CLOUD_SHAPES = [
  [[4, 4, 22, 5], [8, 1, 10, 4], [0, 6, 30, 3]],
  [[2, 3, 16, 4], [6, 0, 8, 4], [0, 5, 20, 3]],
  [[5, 4, 26, 5], [10, 1, 9, 4], [20, 2, 8, 3], [0, 7, 36, 3]],
];

const BIRD_OFFSETS = [[0, 0], [9, 5], [17, -3], [25, 7]];

function makeStars(count) {
  return Array.from({ length: count }, () => ({
    x: Math.random(),
    y: Math.random() * 0.6,
    period: 2000 + Math.random() * 4000,
    offset: Math.random() * 6000,
  }));
}

function makeClouds() {
  return CLOUD_SHAPES.map((shape, index) => ({
    shape,
    x: Math.random(),
    y: 0.06 + index * 0.09 + Math.random() * 0.04,
    speed: 0.0000035 + Math.random() * 0.000004,
  }));
}

function drawBird(ctx, x, y, wingsUp) {
  ctx.fillRect(x, y, 1, 1);
  if (wingsUp) {
    ctx.fillRect(x - 1, y - 1, 1, 1);
    ctx.fillRect(x - 2, y - 2, 1, 1);
    ctx.fillRect(x + 1, y - 1, 1, 1);
    ctx.fillRect(x + 2, y - 2, 1, 1);
  } else {
    ctx.fillRect(x - 1, y, 1, 1);
    ctx.fillRect(x - 2, y + 1, 1, 1);
    ctx.fillRect(x + 1, y, 1, 1);
    ctx.fillRect(x + 2, y + 1, 1, 1);
  }
}

// Drifting clouds by day, twinkling stars by night, and a flock that crosses now and then.
// Only mounted when the visitor has not asked for reduced motion.
export default function AmbientCanvas({ theme }) {
  const canvasRef = useRef(null);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = makeStars(70);
    const clouds = makeClouds();
    let frame = 0;
    let lastDraw = 0;

    const resize = () => {
      canvas.width = Math.ceil(window.innerWidth / SCALE);
      canvas.height = Math.ceil(window.innerHeight / SCALE);
    };

    const draw = (now) => {
      frame = requestAnimationFrame(draw);
      if (now - lastDraw < FRAME_MS) return;
      lastDraw = now;

      const { width, height } = canvas;
      const night = themeRef.current === "dark";
      ctx.clearRect(0, 0, width, height);

      if (night) {
        for (const star of stars) {
          const phase = ((now + star.offset) % star.period) / star.period;
          ctx.globalAlpha = 0.15 + 0.85 * Math.abs(Math.sin(phase * Math.PI));
          ctx.fillStyle = "#f3efff";
          ctx.fillRect(Math.floor(star.x * width), Math.floor(star.y * height), 1, 1);
        }
      } else {
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = "#fffbe8";
        for (const cloud of clouds) {
          const span = width + 80;
          const x = Math.floor(((cloud.x + now * cloud.speed) % 1) * span) - 40;
          const y = Math.floor(cloud.y * height);
          for (const [bx, by, bw, bh] of cloud.shape) ctx.fillRect(x + bx, y + by, bw, bh);
        }
      }

      const flockTime = now % FLOCK_EVERY_MS;
      if (flockTime < FLOCK_CROSSING_MS) {
        const progress = flockTime / FLOCK_CROSSING_MS;
        const x = Math.floor(progress * (width + 60)) - 40;
        const y = Math.floor(height * 0.3 + Math.sin(progress * Math.PI * 2) * 4);
        const wingsUp = Math.floor(now / 260) % 2 === 0;
        ctx.globalAlpha = 0.9;
        ctx.fillStyle = night ? "#15122e" : "#5b3a21";
        for (const [dx, dy] of BIRD_OFFSETS) drawBird(ctx, x + dx, y + dy, wingsUp);
      }

      ctx.globalAlpha = 1;
    };

    const start = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    const onVisibilityChange = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else start();
    };

    resize();
    start();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className="scene-canvas" />;
}
