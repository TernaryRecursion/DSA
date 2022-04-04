

binary_search = function (list, itemToFind) {
    let lowIndex= 0;
    let highIndex = list.length - 1;
  
    while (lowIndex <= highIndex) {
     
      // Get the index of the element halfway between the low and the high
      let middleIndex = Math.floor((lowIndex + highIndex) / 2); //Math.floor will round down
  
      // Get the value that is in the element with the middle index
      let itemWithMiddleIndex = list[middleIndex];
  
      if (itemWithMiddleIndex === itemToFind) {
          // We found the element location
          return middleIndex;
      }
  
      if (itemWithMiddleIndex > itemToFind) {
          // Disregard all elements greater than the middle element
          highIndex = middleIndex - 1;
      }
      if (itemWithMiddleIndex < itemToFind) {
          // Disregard all elements less than the middle element
          lowIndex= middleIndex + 1;
      }
    }
  
    // We looped through the entire array and did not find the element
    return null;
  };
  
//  list = [5, 7, 8, 10, 11, 12, 14, 17, 19, 20, 25, 29];
list = ['alice','brian','david','frank','john','larry','mary',
   'nancy','neil','theresa','tom','tony','victor','violet']
console.log(
  `Index of the value we are looking for: ${binary_search(list, "scott")}`
);
console.log(`Number of steps to find it: ${counter}`);