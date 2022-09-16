// Q4.Given an integer array, sort its element by their frequency and index. i.e., if two elements have different frequencies, then the one which has more frequency should come first; otherwise, the one which has less index should come first.

// Input : [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8]

// Output: [3, 3, 3, 1, 1, 1, 8, 8, 8, 6, 7]

let Arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];

// find frequency

let obj = new Object();

for (let i = 0; i < Arr.length; i++) {
  if (obj[Arr[i]] === undefined) {
    obj[Arr[i]] = 1;
  } else {
    obj[Arr[i]]++;
  }
}

Arr.sort((a, b) => {
  return b - a;
});

let indexArr = new Array();
let N = Arr.length;

// set index as per frequency

for (let i = 0; i < Arr.length; i++) {
  indexArr.push(obj[Arr[i]]);
}

// Merg-sorting
for (i = 0; i < N - 1; i++) {
  for (j = 0; j < N - i - 1; j++) {
    if (indexArr[j] < indexArr[j + 1]) {
      swap(Arr, indexArr, j, j + 1);
    }
  }
}
console.log(Arr);

function swap(Arr, indexArr, j, k) {
  let temp = indexArr[j];
  indexArr[j] = indexArr[k];
  indexArr[k] = temp;
  temp = Arr[j];
  Arr[j] = Arr[k];
  Arr[k] = temp;
}
