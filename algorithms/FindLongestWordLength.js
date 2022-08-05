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
