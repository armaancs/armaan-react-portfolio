import { FaArrowUp } from "react-icons/fa";
import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    // The tall top margin leaves the valley floor visible before the page ends.
    <footer className="mx-auto mt-[28vh] w-full max-w-6xl px-4 pb-6 sm:px-6">
      <div className="panel flex flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-full px-6 py-3">
        <p className="font-display text-lg text-ink">
          {profile.firstName} {profile.lastName}
        </p>
        <p className="meta">© {new Date().getFullYear()} All rights reserved.</p>
        <a href="#top" className="text-link text-sm">
          Back to top
          <FaArrowUp size={11} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
