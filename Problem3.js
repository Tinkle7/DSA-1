// Q3.Find the frequency of elements in an Array?
// Sample input =[1,3,3,4,2,3,6,6,1,0,9]
// Output=> 1= 2times;
// 	      3= 3times;
//                 4= 1 times;
//                 2= 1times;
//                 6 = 2times;
//                 0= 1times;
//                 9= 1times;

let Arr = [1, 3, 3, 4, 2, 3, 6, 6, 1, 0, 9];
let obj = new Object();

for (let i = 0; i < Arr.length; i++) {
  if (obj[Arr[i]] === undefined) {
    obj[Arr[i]] = 1;
  } else {
    obj[Arr[i]]++;
  }
}

for (let i in obj) {
  console.log(`${i}= ${Arr[i]} times`);
}
