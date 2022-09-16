// Q1 :Find the missing element in the given Array containing distinct element from 0 to n ?
//  Arr =[1,2,3,5]
// output: 4

let Arr = [1, 2, 3, 5, 7];
let i = 0;
let j = 1;

let beg = "";

while (i < Arr.length - 1) {
  if (Arr[i] + 1 !== Arr[j]) {
    beg += Arr[i] + 1 + " ";
    i++;
    j++;
  } else {
    i++;
    j++;
  }
}

console.log(beg);
