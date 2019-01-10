/* Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. */

const repeatStringNumTimes = (str, num) => {
  if (num < 0) {
      return "";
  } else {
      return str.repeat(num);
  }
}