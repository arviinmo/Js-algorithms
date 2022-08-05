//using Regex
function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}

//using slice()
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

//using slice()
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}