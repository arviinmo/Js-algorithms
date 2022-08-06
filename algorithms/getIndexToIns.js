// Return the lowest index at which a value (second argument) should be inserted into an array
// (first argument) once it has been sorted. The returned value should be a number.

// using .filter()
function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}

// second way
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

// using .findIndex()
function getIndexToIns(arr, num) {
  let index = arr
    .sort((curr, next) => curr - next)
    .findIndex((currNum) => num <= currNum);
  return index === -1 ? arr.length : index;
}

// fourth one
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}
