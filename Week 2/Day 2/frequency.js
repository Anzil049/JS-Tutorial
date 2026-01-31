let arr = [1, 2, 2, 3, 3, 3, 4];

let freq = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

console.log(freq);

