/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * @param {number} x
 * @return {number}
 */

const reverse = function (x) {
  const reverse = String(Math.abs(x)).split("").reverse().join("");
  const result = x < 0 ? Number(-reverse) : Number(reverse);

  return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1
    ? result
    : 0;
};

module.exports = reverse;
