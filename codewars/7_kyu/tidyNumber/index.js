const tidyNumber = (num) => {
  const sortedNum = num
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .join("");

  return Number(sortedNum) === num;
};

module.exports = tidyNumber;
