const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrixCats) {
  let result = [];
  let count = 0;
  if (matrixCats.length !== 0) {
    matrixCats.map((matrixArray) => {
      result.push(matrixArray.filter((element) => element === '^^'));
    });
    result.map((array) => {
      count += array.length;
    });
    return count;
  } else return 0;
}

module.exports = {
  countCats,
};
