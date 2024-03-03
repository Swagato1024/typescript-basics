const padLeft = (length: number, text: string): string => {
  const space: string = " ";
  const spaces = space.repeat(length);
  return `${spaces}${text}`;
};

console.log(padLeft(10, "ab"));
