// Check whether a word is a palindrome (case-insensitive)
function isPalindrome(word) {
  // Convert the word to lowercase so comparisons ignore case
  const normalizedWord = word.toLowerCase();

  // Compare the word with its reversed version
  return normalizedWord === [...normalizedWord].reverse().join("");
}

// Find indices of words that are NOT palindromes
function findPalindromeBreaks(words) {
  const breaks = [];

  // Loop through each word along with its index
  for (const [index, word] of words.entries()) {
    if (!isPalindrome(word)) {
      breaks.push(index);
    }
  }

  return breaks;
}

// Find starting indices of repeated phrases of a given length
function findRepeatedPhrases(words, phraseLength) {
  // No repeated phrase is possible if phrase length is too large
  if (phraseLength >= words.length) {
    return [];
  }

  // Store phrases and their starting indices
  const phraseMap = new Map();

  // Store indices where repeated phrases occur
  const repeatedIndices = [];

  // Generate all possible phrases of the specified length
  for (let start = 0; start <= words.length - phraseLength; start++) {
    const phrase = words.slice(start, start + phraseLength).join(" ");

    // First occurrence of the phrase
    if (!phraseMap.has(phrase)) {
      phraseMap.set(phrase, [start]);
      continue;
    }

    // Get previous indices where the phrase appeared
    const indices = phraseMap.get(phrase);

    // Add the first occurrence only once
    if (indices.length === 1) {
      repeatedIndices.push(indices[0]);
    }

    // Add the current occurrence
    repeatedIndices.push(start);

    // Save this index for future repetitions
    indices.push(start);
  }

  return repeatedIndices;
}

// Analyze multiple texts
function analyzeTexts(texts, phraseLength) {
  // Return an empty array if there are no texts
  if (texts.length === 0) {
    return [];
  }

  // For each text, find repeated phrases and palindrome breaks
  return texts.map((words) => ({
    repeatedPhrases: findRepeatedPhrases(words, phraseLength),
    palindromeBreaks: findPalindromeBreaks(words),
  }));
}

// Examples
console.log(isPalindrome("RaceCar")); // true

console.log(findPalindromeBreaks(["madam", "hello", "level"])); // [1]

console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat", "sat"], 3)); // [0, 3]
