const maxAndMin = (arr1, arr2) => {
  let concatArrays = [...arr1, ...arr2].sort((a, b) => a - b);
  let min = concatArrays[concatArrays.length - 1];
  let max = concatArrays[0];

  for (let i = 0; i < arr1.length; i++) {
    let j = 0;

    do {
      if (min > Math.abs(arr1[i] - arr2[j])) {
        min = Math.abs(arr1[i] - arr2[j]);
      }

      if (max < Math.abs(arr1[i] - arr2[j])) {
        max = Math.abs(arr1[i] - arr2[j]);
      }

      j++;
    } while (j < arr2.length);
  }

  return [max, min];
};

module.exports = maxAndMin;
