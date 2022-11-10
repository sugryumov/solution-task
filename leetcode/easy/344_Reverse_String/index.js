/**
https://leetcode.com/problems/reverse-string/
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseString = function (s) {
  let first = 0;
  let last = s.length - 1;

  while (first <= last) {
    let temp = s[first];
    s[first] = s[last];
    s[last] = temp;

    first++;
    last--;
  }

  return s;
};

module.exports = reverseString;
