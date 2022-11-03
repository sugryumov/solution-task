/**
 * https://leetcode.com/problems/single-number/
 *
 * @param {number[]} nums
 * @return {number}
 */

const singleNumber = function (nums) {
  const ht = {};

  for (const value of nums) {
    ht[value] = ht[value] + 1 || 1;
  }

  for (const key in ht) {
    if (ht[key] === 1) {
      return key;
    }
  }
};

module.exports = singleNumber;
