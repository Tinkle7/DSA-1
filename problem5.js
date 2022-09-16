// Q6.Given an unsorted integer array, find a pair with the given sum in it.

function solution(arr, K) {
  arr.sort((a, b) => {
    return a - b;
  });
  let left = 0;
  let right = arr.length - 1;
  let flag = false;

  while (left < right) {
    let sum = 0;
    sum = Number(arr[left] + arr[right]);
    if (sum === K) {
      console.log("Pair found" + "(" + arr[right] + "," + arr[left] + ")");
      flag = true;
      left++;
      right--;
    } else if (sum < K) {
      left++;
    } else {
      right--;
    }
  }

  if (flag === false) {
    console.log("Pair not found");
  }
}

let arr = [8, 7, 2, 5, 3, 1];
let K = 10;

let arr1 = [5, 2, 6, 8, 1, 9];
let K1 = 12;

solution(arr, K);
solution(arr1, K1);
