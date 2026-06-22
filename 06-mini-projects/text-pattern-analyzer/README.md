# Text Pattern Analyzer

A JavaScript mini-project that analyzes collections of words to identify:

- Non-palindrome words
- Repeated phrases
- Text patterns across multiple texts

## Features

- Case-insensitive palindrome detection
- Detection of non-palindrome words
- Repeated phrase detection
- Support for overlapping phrases
- Multi-text analysis


## Architecture

analyzeTexts()
│
├── findRepeatedPhrases()
│
└── findPalindromeBreaks()
      │
      └── isPalindrome()

## Functions

### isPalindrome()
Determines whether a word reads the same forwards and backwards.

### findPalindromeBreaks()
Returns indices of words that are not palindromes.

### findRepeatedPhrases()
Detects repeated sequences of consecutive words.

### analyzeTexts()
Produces analysis reports for multiple texts.


## Technologies

- JavaScript
- Arrays
- Objects
- Hash Maps
- Sliding Window
- Modular Design
