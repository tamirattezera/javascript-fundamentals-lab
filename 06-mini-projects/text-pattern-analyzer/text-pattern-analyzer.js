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

function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) {
    return [];
  }

  const phraseMap = new Map();
  const repeatedIndices = [];

  for (let start = 0; start <= words.length - phraseLength; start++) {
    const phrase = words.slice(start, start + phraseLength).join(" ");

    if (!phraseMap.has(phrase)) {
      phraseMap.set(phrase, [start]);
      continue;
    }

    const indices = phraseMap.get(phrase);

    if (indices.length === 1) {
      repeatedIndices.push(indices[0]);
    }

    repeatedIndices.push(start);
    indices.push(start);
  }

  return repeatedIndices;
}
