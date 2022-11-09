/**
 * https://leetcode.com/problems/rotate-array/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const rotate = function (nums, k) {
  // for (let i = k; i > 0; i--) {
  //   nums.unshift(nums[nums.length - 1]);
  //   nums.pop();
  // }

  // return nums;

  for (let i = nums.length - 1; i >= 0; i--) {
    nums[i + k] = nums[i];
    console.log("nums", nums);
  }

  for (let i = k - 1; i >= 0; i--) {
    nums[i] = nums.pop();
  }

  return nums;
};

module.exports = rotate;
