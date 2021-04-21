// Shuffle in place
export const shuffle = <T>(xs: T[]): T[] => {
  const n = xs.length
  xs.forEach((_, i) => {
    const ni = Math.floor(Math.random() * (n - i))
    const t = xs[n - i - 1]
    xs[n - i - 1] = xs[ni]
    xs[ni] = t
  })
  return xs
}