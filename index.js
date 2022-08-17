//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1

function filterRange(arr, a, b) {
  const result = arr.filter((value) => value >= a && value <= b);
  return result;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
function filterRangeInPlace(arr, a, b) {
  let newArray = [];
  for (const [i, element] of arr.entries()) {
    if (element < a || element > b) {
      newArray = arr.splice(i, 1);
    }
  }
  return newArray;
}

let array = [5, 3, 8, 1]; // removed the numbers except from 1 to 4

filterRangeInPlace(array, 1, 4); // [3, 1]

console.log(array); //[3,1]
