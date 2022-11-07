/**
 * https://leetcode.com/problems/plus-one/
 *
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = function (digits) {
  const sum = BigInt(digits.join("")) + BigInt(1);

  return String(sum).split("").map(Number);
};

module.exports = plusOne;
