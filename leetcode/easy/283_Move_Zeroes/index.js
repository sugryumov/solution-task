/**
 * https://leetcode.com/problems/move-zeroes/
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeroes = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }

  return nums;
};

module.exports = moveZeroes;
