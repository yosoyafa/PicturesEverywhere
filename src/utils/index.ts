/**
 * The `round` function in TypeScript rounds a number to six decimal places.
 * @param {number} value - The parameter "value" is a number that you want to round.
 */
export const round = (value: number) =>
  Math.round(value * 1000000) / 1000000
