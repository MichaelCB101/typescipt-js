// sumArray.ts
export function sumArray(numbers: number[]): number {
  // Returns the sum of all numbers in the array
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
