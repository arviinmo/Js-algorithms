// Remove all falsy values from an array.

//using filter()
function bouncer(arr) {
  return arr.filter(Boolean);
}

// using for loop
function bouncer(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  return newArray;
}
