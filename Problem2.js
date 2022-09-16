// Q2. Given an array , remove the duplicates elements of the array.
// Sample input : [0,1,2,3,3,4,5,6,6,9]
// Output :[0,1,2,3,4,5,6,9]

let Arr = [0, 1, 2, 3, 3, 4, 5, 6, 6, 9];

let beg = [];

beg.push(Arr[0]);

for (let i = 1; i < Arr.length; i++) {
  if (beg.includes(Arr[i])) {
    continue;
  } else {
    beg.push(Arr[i]);
  }
}

console.log(beg);
