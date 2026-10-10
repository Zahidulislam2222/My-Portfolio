/** Choose the equivalent face angle nearest the current unbounded rotation. */
export function cardRotationTarget(current: number, active: number, count: number) {
  const angle = -(active * 360) / count;
  return angle + Math.round((current - angle) / 360) * 360;
}

/** Apothem of the regular polygon formed by equally sized card faces. */
export function cardRotationDepth(width: number, count: number) {
  return width / (2 * Math.tan(Math.PI / count));
}
