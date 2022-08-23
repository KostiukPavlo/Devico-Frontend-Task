function bar(size) {
  let arr = [];

  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size);
  }

  for (let i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      let sum = i + j;
      arr[i][j] = 0;

      if (i === 0 || i === size - 1) {
        arr[i][j] = 1;
      }

      if (j >= size / 2 - 1 && j <= size / 2) {
        arr[i][j] = 1;
      }

      if (i === j || sum === size - 1) {
        arr[i][j] = 2;
      }
    }
  }
  return arr;
}

console.log(bar(5));
console.log(bar(4));
console.log(bar(6));

// run command
//$ node 3.array_matrix.js
