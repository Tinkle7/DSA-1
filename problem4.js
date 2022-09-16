// Q4.Given an integer array, sort its element by their frequency and index. i.e., if two elements have different frequencies, then the one which has more frequency should come first; otherwise, the one which has less index should come first.

// Input : [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8]

// Output: [3, 3, 3, 1, 1, 1, 8, 8, 8, 6, 7]

let Arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];

let obj = new Object();

for (let i = 0; i < Arr.length; i++) {
  if (obj[Arr[i]] === undefined) {
    obj[Arr[i]] = 1;
  } else {
    obj[Arr[i]]++;
  }
}

console.log(obj);
console.log(Arr);
