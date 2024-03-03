const reverse = (text: string): string => [...text].reverse().join("");
const isEqual = (a: string, b: string): boolean => a === b;

const isPalindrome = (text: string): boolean => {
  const reversedText: string = reverse(text);
  return isEqual(text, reversedText);
};

console.log("should be false for not-palindromic string", isPalindrome("abc"));
console.log("should be true for not-palindromic string", isPalindrome("aba"));
