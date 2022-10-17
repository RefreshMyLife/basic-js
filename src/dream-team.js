const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let answer = new Set();
  if (Array.isArray(members)) {
    members.sort();
    members.map((member) => {
      if (typeof member === 'string') {
        let str = member.trimStart().trimEnd().split(' ');
        str.map((word) => {
          answer.add(word[0].toUpperCase());
        });
      } else {
        return false;
      }
    });
  } else {
    return false;
  }

  return [...answer].sort().join('');
}

module.exports = {
  createDreamTeam,
};
