/**
 * @schema 2.10
 * @input step: number = 28
 * @input dot: number = 4
 * @input opacity: string = "#00000026"
 */
const step = Math.max(12, pencil.input.step);
const dot = Math.max(2, pencil.input.dot);
const nodes = [];

for (let y = -step; y < pencil.height + step; y += step) {
  const offset = Math.floor(y / step) % 2 === 0 ? 0 : step / 2;
  for (let x = -step; x < pencil.width + step; x += step) {
    nodes.push({
      type: "ellipse",
      x: x + offset,
      y,
      width: dot,
      height: dot,
      fill: pencil.input.opacity,
    });
  }
}

return nodes;
