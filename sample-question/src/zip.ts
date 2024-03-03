type NumberPair = [number, number];

const zip = (first: number[], second: number[]): NumberPair[] => {
  const zipped: NumberPair[] = [];

  for (let index in first) {
    zipped.push([first[index], second[index]]);
  }

  return zipped;
};

console.log("should be [[1, 3], [2, 4]]", zip([1, 2], [3, 4]));
