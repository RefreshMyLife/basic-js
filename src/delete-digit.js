const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arr = Array.from(String(num), Number);
  let min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (min === arr[i]) arr.splice(i, 1);
  }
  const result = +arr.toString().replaceAll(',', '');
  return result;
}

module.exports = {
  deleteDigit,
};
