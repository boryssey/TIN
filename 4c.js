function isPalindrome(word){
  word = word.toLowerCase();
  return word === word.split("").reverse().join("");
}
console.log("'Madam' is palindrome = " + isPalindrome("madam"));
