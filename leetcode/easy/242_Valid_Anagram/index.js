/**
 * https://leetcode.com/problems/valid-anagram/
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const sortString = (str) => str.split("").sort().join("");

const isAnagram = function (s, t) {
  return sortString(s) === sortString(t);
};

isAnagram("anagram", "nagaram");

module.exports = isAnagram;
