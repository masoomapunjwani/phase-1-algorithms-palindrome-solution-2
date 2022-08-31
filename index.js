function isPalindrome(word) {
  // Write your algorithm here
  //iterate from the beginning of the string to the middle of the string
  for(let i = 0; i < word.length / 2; i++){
  //compare the letter we're iterating over to the corresponding letter at the end of the string
    const j = word.length - 1 - i;
    const word1 = word[i];
    const word2 = word[j];
  //if the letters don't match, return false
    if(word1 !== word2){
      return false;
    }
  }
  //if we reach the middle, and all the letters match, return true
  return true
}

/* 
  Add your pseudocode here
  //iterate from the begining of the string to the middle of the string
    //compare the letter we're iterating over to the corresponding letter to the end of string
    //if the letters don't match, return false
  //if we reach the middle, and all letthers are correct return true
*/

/*
  Add written explanation of your solution here
  first we have to iterate from the begining of the string
  to the middle of the string and we have to compare the letter 
  to the end of the string , if the letters don't match
  return false, if the letters match from the middle,
  return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
