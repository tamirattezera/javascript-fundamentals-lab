# Algorithm Design

## isPalindrome

FUNCTION isPalindrome(word)

Convert word to lowercase

Reverse word

Compare original and reversed

Return true if equal

Else return false

## findPalindromeBreaks

Create breaks array

Loop through words

If current word is not palindrome

Add index to breaks

Return breaks

## findRepeatedPhrases

If phraseLength >= words length

Return []

Create phrase map

Create repeated array

Loop through start indices

Build phrase

If phrase not seen

Store index

Else

Store first occurrence if needed

Store current index

Return repeated array

## analyzeTexts

If texts is empty

Return []

Create results array

For each text

Find repeated phrases

Find palindrome breaks

Store result object

Return results
