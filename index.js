function isPalindrome(str) {
  return true;
}
isPalindrome("race car");

function isPalindrome(str) {
  return false;
}
isPalindrome("robot");

/* 
  Add your pseudocode here
*/ //create a function for isPalindrome

/*
  Add written explanation of your solution here
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
