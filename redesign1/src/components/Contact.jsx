import { useEffect, useState } from "react";
import { FaCheck, FaCopy, FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal.jsx";
import { profile } from "../data/profile.js";

const links = [
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: FaLinkedin },
  { label: "GitHub", href: profile.socials.github, Icon: FaGithub },
];

export default function Contact() {
  // "idle", "copied", or "failed" when the clipboard is unavailable.
  const [copyState, setCopyState] = useState("idle");

  useEffect(() => {
    if (copyState === "idle") return;
    const timer = setTimeout(() => setCopyState("idle"), 2500);
    return () => clearTimeout(timer);
  }, [copyState]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  return (
    <section id="contact" className="section">
      <Reveal className="panel p-6 sm:p-12">
        <h2 className="font-display text-5xl leading-[0.95] font-semibold tracking-tight text-balance text-ink md:text-7xl">
          Let's build something.
        </h2>
        <p className="body-copy mt-5 text-lg">
          Always open to new opportunities and collaborations. Email is the fastest way to reach me.
        </p>

        <button
          type="button"
          onClick={copyEmail}
          aria-label={`Copy email address ${profile.email}`}
          className="mt-8 inline-flex max-w-full items-center gap-3 rounded-full bg-accent px-5 py-3.5 font-mono text-base font-medium text-accent-ink transition duration-200 hover:brightness-110 active:scale-[0.98] sm:px-7 sm:text-xl"
        >
          <span className="truncate">{profile.email}</span>
          {copyState === "copied" ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
        </button>

        <ul className="mt-6 flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <link.Icon aria-hidden="true" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
        {copyState !== "idle" && (
          <p className="sheet-in rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink shadow-lg">
            {copyState === "copied" ? "Copied" : `Copy failed. The address is ${profile.email}`}
          </p>
        )}
      </div>
    </section>
  );
}
