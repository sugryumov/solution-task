/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 * @param {string[]} tokens
 * @return {number}
 */

const OPERATIONS = ["+", "-", "*", "/"];

const evalExpression = (x, y, op) => {
  if (op === "+") {
    return x + y;
  }
  if (op === "-") {
    return x - y;
  }
  if (op === "*") {
    return x * y;
  }
  if (op === "/") {
    return Math.trunc(x / y);
  }
};

const evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (OPERATIONS.includes(token)) {
      const one = stack.pop();
      const two = stack.pop();

      stack.push(evalExpression(two, one, token));
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};

module.exports = evalRPN;
