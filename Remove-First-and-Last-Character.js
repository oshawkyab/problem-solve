// Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.

function removeChar(str) {
  return str.length > 2
    ? str
        .split("")
        .slice(1, str.length - 1)
        .join("")
    : "";
}

console.log(removeChar("mae"));
