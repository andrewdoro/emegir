import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

interface Mask {
  opacityFn: (pos: number) => number;
  stops?: number;
  direction?: "to-right" | "to-bottom";
  rotate?: number;
}

const masks = {
  nonlinear: ({ opacityFn, stops = 10, direction = "to-right", rotate = 0 }: Mask) => {
    const baseRotation = direction === "to-right" ? 90 : 180;
    const positions = Array.from({ length: stops }, (_, i) => i / (stops - 1));
    const opacities = positions.map(opacityFn);
    const gradientStops = positions.map(
      (pos, index) => `rgba(255, 255, 255, ${opacities[index]}) ${pos * 100}%`
    );

    return `linear-gradient(${baseRotation + rotate}deg, ${gradientStops.join(", ")})`;
  },
};

interface ProgressiveBlurProps extends HTMLProps<HTMLDivElement> {
  blurStart?: number;
  blurEnd?: number;
  layers?: number;
  direction?: "to-right" | "to-bottom";
}

const ProgressiveBlur = React.memo(
  ({
    blurStart = 0,
    blurEnd = 12,
    direction = "to-bottom",
    layers = 5,
    className,
    ...otherProps
  }: ProgressiveBlurProps) => {
    layers = Math.max(layers, 2);
    const step = 1 / (layers - 1);
    const blurMin = Math.min(blurStart, blurEnd);
    const blurMax = Math.max(blurStart, blurEnd);
    const blurRange = blurMax - blurMin;
    return (
      <div {...otherProps} className={cn("relative", className)}>
        {[...new Array(layers).keys()].map((layer) => {
          const currStop = layer * step;
          return (
            <div
              key={layer}
              style={{
                maskImage: masks.nonlinear({
                  direction: direction,
                  opacityFn: (pos) => Math.cos(((currStop - pos) * Math.PI) / 2) ** 4,
                  stops: 6,
                  rotate: blurStart > blurEnd ? 180 : 0,
                }),
                backdropFilter: `blur(${blurMin + currStop * blurRange}px)`,
              }}
              className='absolute inset-0 pointer-events-none'
            />
          );
        })}
      </div>
    );
  }
);
ProgressiveBlur.displayName = "ProgressiveBlur";
export default ProgressiveBlur;
