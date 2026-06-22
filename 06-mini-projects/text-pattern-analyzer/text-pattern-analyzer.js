function isPalindrome(word) {
  const normalizedWord = word.toLowerCase();

  return normalizedWord === [...normalizedWord].reverse().join("");
}
