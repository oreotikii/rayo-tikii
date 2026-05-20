"use client";

import { createElement, useCallback, useEffect, useRef, type CSSProperties, type ElementType, type PointerEvent, type ReactNode } from "react";
import styles from "./border-glow.module.css";

type GlowStyle = CSSProperties & Record<`--${string}`, string | number>;

type BorderGlowProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number | string;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: string[];
  fillOpacity?: number;
  style?: CSSProperties;
  onPointerMove?: (event: PointerEvent<HTMLElement>) => void;
} & Record<string, unknown>;

function parseHSL(hslStr: string) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 40, s: 80, l: 80 };
  return { h: Number.parseFloat(match[1]), s: Number.parseFloat(match[2]), l: Number.parseFloat(match[3]) };
}

function buildGlowVars(glowColor: string, intensity: number) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  const vars: GlowStyle = {};

  for (let i = 0; i < opacities.length; i += 1) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
  }

  return vars;
}

const gradientPositions = ["80% 55%", "69% 34%", "8% 6%", "41% 38%", "86% 85%", "82% 18%", "51% 4%"];
const gradientKeys = [
  "--gradient-one",
  "--gradient-two",
  "--gradient-three",
  "--gradient-four",
  "--gradient-five",
  "--gradient-six",
  "--gradient-seven"
] as const;
const colorMap = [0, 1, 2, 0, 1, 2, 1];
const defaultColors = ["#ddf160", "#9f8be7", "#38bdf8"];

function buildGradientVars(colors: string[]) {
  const palette = colors.length ? colors : defaultColors;
  const vars: GlowStyle = {};

  for (let i = 0; i < gradientKeys.length; i += 1) {
    const color = palette[Math.min(colorMap[i], palette.length - 1)];
    vars[gradientKeys[i]] = `radial-gradient(at ${gradientPositions[i]}, ${color} 0px, transparent 50%)`;
  }

  vars["--gradient-base"] = `linear-gradient(${palette[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}

function easeInCubic(x: number) {
  return x * x * x;
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd
}: {
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;
  ease?: (value: number) => number;
  onUpdate: (value: number) => void;
  onEnd?: () => void;
}) {
  let frame = 0;
  const t0 = performance.now() + delay;
  const timer = window.setTimeout(() => {
    const tick = () => {
      const elapsed = performance.now() - t0;
      const t = Math.min(elapsed / duration, 1);
      onUpdate(start + (end - start) * ease(t));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        onEnd?.();
      }
    };
    frame = requestAnimationFrame(tick);
  }, delay);

  return () => {
    window.clearTimeout(timer);
    cancelAnimationFrame(frame);
  };
}

export default function BorderGlow({
  children,
  as: Component = "div",
  className = "",
  edgeSensitivity = 30,
  glowColor = "72 85 66",
  backgroundColor = "var(--base-tint)",
  borderRadius = "var(--_radius-m)",
  glowRadius = 32,
  glowIntensity = 0.9,
  coneSpread = 25,
  animated = false,
  colors = defaultColors,
  fillOpacity = 0.28,
  style,
  onPointerMove,
  ...elementProps
}: BorderGlowProps) {
  const cardRef = useRef<HTMLElement | null>(null);

  const getCenterOfElement = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback(
    (el: HTMLElement, x: number, y: number) => {
      const [cx, cy] = getCenterOfElement(el);
      const dx = x - cx;
      const dy = y - cy;
      let kx = Infinity;
      let ky = Infinity;

      if (dx !== 0) kx = cx / Math.abs(dx);
      if (dy !== 0) ky = cy / Math.abs(dy);

      return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    },
    [getCenterOfElement]
  );

  const getCursorAngle = useCallback(
    (el: HTMLElement, x: number, y: number) => {
      const [cx, cy] = getCenterOfElement(el);
      const dx = x - cx;
      const dy = y - cy;
      if (dx === 0 && dy === 0) return 0;

      const radians = Math.atan2(dy, dx);
      const degrees = radians * (180 / Math.PI) + 90;
      return degrees < 0 ? degrees + 360 : degrees;
    },
    [getCenterOfElement]
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLElement>) => {
      onPointerMove?.(event);
      const card = event.currentTarget;
      cardRef.current = card;

      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const edge = getEdgeProximity(card, x, y);
      const angle = getCursorAngle(card, x, y);

      card.style.setProperty("--edge-proximity", `${(edge * 100).toFixed(3)}`);
      card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
    },
    [getCursorAngle, getEdgeProximity, onPointerMove]
  );

  useEffect(() => {
    if (!animated || !cardRef.current) return undefined;

    const card = cardRef.current;
    const angleStart = 110;
    const angleEnd = 465;
    card.classList.add(styles.sweepActive);
    card.style.setProperty("--cursor-angle", `${angleStart}deg`);

    const cleanups = [
      animateValue({ duration: 500, onUpdate: (value) => card.style.setProperty("--edge-proximity", `${value}`) }),
      animateValue({
        ease: easeInCubic,
        duration: 1500,
        end: 50,
        onUpdate: (value) => card.style.setProperty("--cursor-angle", `${(angleEnd - angleStart) * (value / 100) + angleStart}deg`)
      }),
      animateValue({
        ease: easeOutCubic,
        delay: 1500,
        duration: 2250,
        start: 50,
        end: 100,
        onUpdate: (value) => card.style.setProperty("--cursor-angle", `${(angleEnd - angleStart) * (value / 100) + angleStart}deg`)
      }),
      animateValue({
        ease: easeInCubic,
        delay: 2500,
        duration: 1500,
        start: 100,
        end: 0,
        onUpdate: (value) => card.style.setProperty("--edge-proximity", `${value}`),
        onEnd: () => card.classList.remove(styles.sweepActive)
      })
    ];

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      card.classList.remove(styles.sweepActive);
    };
  }, [animated]);

  const radius = typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius;
  const glowVars = buildGlowVars(glowColor, glowIntensity);
  const cardStyle: GlowStyle = {
    ...style,
    "--card-bg": backgroundColor,
    "--edge-sensitivity": edgeSensitivity,
    "--border-radius": radius,
    "--glow-padding": `${glowRadius}px`,
    "--cone-spread": coneSpread,
    "--fill-opacity": fillOpacity,
    ...glowVars,
    ...buildGradientVars(colors)
  };

  return createElement(
    Component,
    {
      ...elementProps,
      ref: cardRef,
      onPointerMove: handlePointerMove,
      className: [styles.card, className].filter(Boolean).join(" "),
      style: cardStyle
    },
    createElement("span", { className: styles.edgeLight, "aria-hidden": true }),
    createElement("div", { className: styles.inner }, children)
  );
}
