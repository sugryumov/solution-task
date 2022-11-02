/**
 * https://leetcode.com/problems/contains-duplicate/
 *
 * @param {number[]} nums
 * @return {boolean}
 */

const containsDuplicate = function (nums) {
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] === nums[j]) {
  //       return true;
  //     }
  //   }
  // }

  const set = new Set(nums);

  return set.size !== nums.length;
};

module.exports = containsDuplicate;
