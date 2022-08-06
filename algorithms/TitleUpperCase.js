// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.

//using Regex
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

