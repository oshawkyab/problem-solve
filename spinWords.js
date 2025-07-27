// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


function spinWords(string) {
         // coding here
}
// steps
//  1- splite on word
// 2 - filteration on array condition(length >= 5) return word
// 3 - reverse word and join them

console.log(spinWords("Hell is Married"));
const spin = string
  .split(" ")
  .map((w) => {
    return w.length >= 5 ? w.split("").reverse().join("") : w;
  })
  .join(" ");
return spin;
