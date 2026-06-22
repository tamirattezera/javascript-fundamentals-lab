function isPalindrome(word) {
  const normalizedWord = word.toLowerCase();

  return normalizedWord === [...normalizedWord].reverse().join("");
}

function findPalindromeBreaks(words) {
  const breaks = [];

  for (const [index, word] of words.entries()) {
    if (!isPalindrome(word)) {
      breaks.push(index);
    }
  }

  return breaks;
}
