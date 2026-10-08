import { m, useReducedMotion } from "motion/react";

// Fades its content in and lifts it 24px the first time it enters the viewport.
// `index` staggers siblings; `as` picks the element (div, li, article, header).
export default function Reveal({ as = "div", index = 0, children, ...rest }) {
  const reduceMotion = useReducedMotion();
  const Tag = m[as];

  return (
    <Tag
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
