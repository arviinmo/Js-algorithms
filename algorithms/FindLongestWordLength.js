// first solution
function findLongestWordLength(str) {
  const words = str.split(" ");

  if (words.length == 1) {
    return words[0].length;
  }
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}

// second and shortest solution
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}

//third one
function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

//last one using .reduce()
function findLongestWordLength(str) {
  return str.split(" ").reduce(function (longest, word) {
    return Math.max(longest, word.length);
  }, 0);
}