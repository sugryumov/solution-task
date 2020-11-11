const productArray = (numbers) => {
  return numbers.map((el) => numbers.reduce((a, b) => a * b) / el);
};

module.exports = productArray;
