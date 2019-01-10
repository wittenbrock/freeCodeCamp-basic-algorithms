/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. */

let chunkArrayInGroups = (arr, size) => {
  let stop = (arr.length / size)
  let result = [];
  while (stop >= 0) {
    result.push(arr.splice(0, size));
    stop--
  }
  return result;
}