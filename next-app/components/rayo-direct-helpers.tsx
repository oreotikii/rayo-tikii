"use client";

import { useEffect, useState, type ComponentPropsWithoutRef } from "react";

export type CounterRecord = { value: number; suffix: string };
export type CounterRecords = Record<string, CounterRecord>;

export function usePageCounters(counters: CounterRecords) {
  useEffect(() => {
    const frames: number[] = [];

    Object.entries(counters).forEach(([id, counter]) => {
      const element = document.getElementById(id);
      if (!element) return;

      const duration = 900;
      const startedAt = performance.now();
      const tick = (time: number) => {
        const progress = Math.min((time - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        element.textContent = `${Math.round(counter.value * eased)}${counter.suffix}`;
        if (progress < 1) {
          frames.push(requestAnimationFrame(tick));
        }
      };

      frames.push(requestAnimationFrame(tick));
    });

    return () => frames.forEach((frame) => cancelAnimationFrame(frame));
  }, [counters]);
}

type DemoFormProps = ComponentPropsWithoutRef<"form">;

export function DemoForm({ children, ...props }: DemoFormProps) {
  const [message, setMessage] = useState("");

  return (
    <form
      {...props}
      action="#"
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
        setMessage("This form is ready to connect once the Tikii form destination is confirmed.");
      }}
    >
      {children}
      {message ? <p className="form-status" role="status">{message}</p> : null}
    </form>
  );
}
