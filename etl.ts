export function transform(old: { [key: string]: string[] }): { [key: string]: number } {
  const newF: { [key: string]: number } = {}
  Object.entries(old).forEach(([key, values]) => {
    for (const value of values) {
      newF[value.toLowerCase()] = parseInt(key, 10)
    }
  });
  return newF
}