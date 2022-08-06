// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

//first solution
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

//using find() method
function findElement(arr, func) {
  return arr.find(func);
}

//third solution
function findElement(arr, func) {
    return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
  }
  
  //using map() and indexof()
  function findElement(arr, func) {
    return arr[arr.map(func).indexOf(true)];
  }