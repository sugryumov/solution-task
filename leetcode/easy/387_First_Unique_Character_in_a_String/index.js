/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 *
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = function (s) {
  const st = {};

  for (let i = 0; i < s.length; i++) {
    if (st[s[i]]) {
      st[s[i]] += 1;
    } else {
      st[s[i]] = 1;
    }
  }

  const [first] = Object.entries(st).find(([key, value]) => value === 1) || [];
  return s.indexOf(first);

  // Solution with Map

  //   const map = new Map();
  //   for (let i = 0; i < s.length; i++) {
  //     if (map.has(s[i])) {
  //       map.set(s[i], map.get(s[i]) + 1);
  //     } else {
  //       map.set(s[i], 1);
  //     }
  //   }
  //   for (let i = 0; i < s.length; i++) {
  //     if (map.get(s[i]) === 1) {
  //       return i;
  //     }
  //   }
  //   return -1;
};

module.exports = firstUniqChar;
