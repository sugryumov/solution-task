/**
 * https://leetcode.com/problems/crawler-log-folder/
 *
 * @param {string[]} logs
 * @return {number}
 */

const minOperations = function (logs) {
  const stack = [];

  for (const op of logs) {
    if (op === "../") {
      stack.pop();
    } else if (op !== "./") {
      stack.push(op);
    }
  }

  return stack.length;
};

module.exports = minOperations;
