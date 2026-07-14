import { animate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  duration = 1.6,
  prefix = "",
  suffix = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    const el = ref.current;
    if (!el) return;

    const trigger = () => {
      if (started.current) return;
      started.current = true;
      const controls = animate(0, value, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setN(Math.round(v)),
      });
      return () => controls.stop();
    };

    if (typeof IntersectionObserver === "undefined") {
      trigger();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trigger();
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    // Fallback: trigger after a short delay even if observer never fires.
    const t = window.setTimeout(trigger, 1200);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}
