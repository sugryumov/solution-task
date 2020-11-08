const addTwoNumbers = (l1, l2) => {
  const sum = Number(l1.reverse().join("")) + Number(l2.reverse().join(""));

  return String(sum)
    .split("")
    .map((item) => Number(item))
    .reverse();
};

module.exports = addTwoNumbers;
