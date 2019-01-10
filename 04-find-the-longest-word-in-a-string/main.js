/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

let findLongestWord = str => {

  let longestWord = str.split(' ').reduce((longest, currentWord) => {

    return currentWord.length > longest.length ? currentWord : longest;
  }, "");

  return longestWord.length;
}