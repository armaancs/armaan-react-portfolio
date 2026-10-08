import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";
import ScrambleText from "./ScrambleText.jsx";
import { profile } from "../data/profile.js";

const socialLinks = [
  { label: "GitHub", href: profile.socials.github, Icon: FaGithub },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedin },
];

const stagger = { show: { transition: { staggerChildren: 0.07 } } };
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  // The scroll cue has done its job once the visitor starts scrolling.
  const cueOpacity = useTransform(scrollY, [0, 160], [1, 0]);
  // Once faded it is also removed from the tab order and the accessibility tree.
  const cueVisibility = useTransform(cueOpacity, (opacity) => (opacity === 0 ? "hidden" : "visible"));

  return (
    <section className="relative flex min-h-[100dvh] items-center">
      <div aria-hidden="true" className="hero-scrim absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pt-24 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <m.div variants={stagger} initial={reduceMotion ? false : "hidden"} animate="show">
          <m.p
            variants={rise}
            className="inline-flex items-center gap-2.5 rounded-2xl border border-line bg-surface/85 px-3.5 py-2 font-mono text-xs text-ink sm:rounded-full"
          >
            <span className="status-dot h-2 w-2 shrink-0 rounded-full bg-accent-glow" aria-hidden="true" />
            {profile.status}
          </m.p>

          <m.p variants={rise} className="mt-6 font-display text-lg text-ink">
            {profile.location}
          </m.p>

          <h1
            aria-label={`${profile.firstName} ${profile.lastName}`}
            className="hero-name mt-1 font-display text-[clamp(3.25rem,8vw,7rem)] leading-[0.9] font-bold tracking-tight uppercase"
          >
            <ScrambleText text={profile.firstName} className="block text-ink" />
            <ScrambleText text={profile.lastName} delay={120} className="block text-accent" />
          </h1>

          <m.p
            variants={rise}
            className="mt-6 max-w-[42ch] text-lg leading-relaxed text-pretty text-ink"
          >
            {profile.statement}
          </m.p>

          <m.div variants={rise} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#contact" className="btn btn-primary px-6 py-3 text-base">
              Contact
            </a>
            <a href="#projects" className="text-link">
              See projects
            </a>
          </m.div>

          <m.ul variants={rise} className="mt-8 flex gap-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="icon-btn"
                >
                  <link.Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </m.ul>
        </m.div>

        <m.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="pixel-frame w-64 justify-self-start bg-accent p-2 sm:w-80 lg:w-full lg:max-w-[30rem] lg:justify-self-end"
        >
          <img
            src={profile.portrait}
            alt={`Portrait of ${profile.firstName} ${profile.lastName}`}
            width="800"
            height="800"
            fetchPriority="high"
            className="pixel-frame aspect-square w-full bg-scrim object-cover"
          />
        </m.div>
      </div>

      <m.div style={{ opacity: cueOpacity, visibility: cueVisibility }} className="absolute bottom-6 left-1/2 -ml-5 hidden lg:block">
        <a
          href="#about"
          aria-label="Scroll to About"
          className="scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/80 text-ink"
        >
          <FaArrowDown aria-hidden="true" />
        </a>
      </m.div>
    </section>
  );
}
