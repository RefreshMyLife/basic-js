const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        switch (arr[i]) {
          case '--discard-next':
            if (arr.at(-1) === '--double-next') arr.splice(i, 1);
            else arr.splice(i, 2);
            break;
          case '--discard-prev':
            if (arr[0] === '--discard-prev') arr.splice(i, 1);
            else {
              arr.splice(i - 1, 2);
            }
            break;
          case '--double-next':
            if (arr.at(-1) === '--double-next') arr.splice(i, 1);
            else arr.splice(i, 1, arr[i + 1]);
            break;
          case '--double-prev':
            if (arr[0] === '--double-prev') arr.splice(i, 1);
            else arr.splice(i, 1, arr[i - 1]);
            break;
          default:
            return arr;
        }
      }
    }
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  console.log(arr);
  return arr;
}

module.exports = {
  transform,
};
