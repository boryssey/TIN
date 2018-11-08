function LongestWord(str){
  return str.split(" ").sort(function(str1,str2){
    return str1.length - str2.length;
  }).pop();
}
console.log("Longest word in sequence 'ab abc abcd a' = " + LongestWord("ab abc abcd a"));
