/* Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead. */

let confirmEnding = (str, target) => {
  const stringEnding = str.slice(-target.length, str.length);
    return stringEnding === target;
}