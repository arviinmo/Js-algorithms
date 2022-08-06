// We need to copy each element from the first array into the second array starting at the index n.
// We’ve also got to ensure that the original arrays are not mutated. That is, we cannot make any changes to the original arrays.

// first
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

//second
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
