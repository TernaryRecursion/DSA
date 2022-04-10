function palidromeCheck(text) {
    // Turn the string into an array
    array = text.split("");
    // If we are done to a single character return true
    if (array.length === 0 || array.length === 1) {
      return true;
    }
    // Remove the first character
    first = array.shift();
    // Remove the last character
    last = array.pop();
    // If the characters match continue the recursion
    if (first === last) {
      // convert the array minus the two characters back into a string
      return palidromeCheck(array.join(""));
    }
    // If the characters don't match, return false and end the recursion
    return false;
  }
  
  console.log(palidromeCheck("raceCar"));