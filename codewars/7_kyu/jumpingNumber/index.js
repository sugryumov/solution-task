const diff = (a, b) => {
  return Math.abs(a - b);
};

const jumpingNumber = (n) => {
  const array = n.toString().split("");

  const result = array.every(
    (el, idx, arr) =>
      !idx || diff(el, arr[idx - 1]) === 1 || diff(el, arr[idx - 1]) === 0
  );

  return result ? "Jumping!!" : "Not!!";
};

module.exports = jumpingNumber;
