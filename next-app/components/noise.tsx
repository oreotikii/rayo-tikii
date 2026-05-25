"use client";

import { useEffect, useRef } from "react";
import styles from "./noise.module.css";

type NoiseProps = {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
};

const Noise = ({
  patternSize = 250,
  patternScaleX = .5,
  patternScaleY = .5,
  patternRefreshInterval = 2,
  patternAlpha = 15
}: NoiseProps) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    let frame = 0;
    let animationId = 0;

    const canvasSize = Math.max(1, Math.floor(patternSize));
    const canvasWidth = Math.max(1, Math.floor(canvasSize * patternScaleX));
    const canvasHeight = Math.max(1, Math.floor(canvasSize * patternScaleY));
    const refreshInterval = Math.max(1, Math.floor(patternRefreshInterval));

    const resize = () => {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % refreshInterval === 0) {
        drawGrain();
      }
      frame += 1;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [
    patternSize,
    patternScaleX,
    patternScaleY,
    patternRefreshInterval,
    patternAlpha
  ]);

  return (
    <canvas
      className={styles.noiseOverlay}
      ref={grainRef}
      style={{ imageRendering: "pixelated" }}
    />
  );
};

export default Noise;
