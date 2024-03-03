const sumOfNaturalNumbers = (n: number): number => {
  if (n === 1) return 1;
  return n + sumOfNaturalNumbers(n - 1);
};

console.log(sumOfNaturalNumbers(6));
