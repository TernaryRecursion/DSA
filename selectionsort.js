function swap(items, leftIndex, rightIndex) {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  function selectionSort(inputArr) {
    let itemCount = inputArr.length; // How many times do we loop
  
    for (let currentIndex = 0; currentIndex < itemCount; currentIndex++) {
      // At the beginning of each loop, assume the currentIndex is the index for the smallest element
      let smallestElementIndex = currentIndex;
  
      // Loop through all of the elements to the right of the current index
      // Anything to left should already be in the right order
      for (
        let innerLoopIndex = currentIndex + 1;
        innerLoopIndex < itemCount;
        innerLoopIndex++
      ) {
   // Check to see if smallestElementIndex still holds the smallest number
   if (inputArr[innerLoopIndex] < inputArr[smallestElementIndex]) {
    // If not, update the smallestElementIndex
    smallestElementIndex = innerLoopIndex;
  }
}
// At the end of the inner loop, smallestElementIndex will hold the location of the smallest value
// If the currentIndex does not match the smallestIndex we need to swap the two elements
if (smallestElementIndex != currentIndex) {
  swap(inputArr, currentIndex, smallestElementIndex);
}
}
return inputArr;
}

let inputArr = [3, 43, 6, 1, 14, 5, 2, 456, 12, 3];
selectionSort(inputArr);
console.log(inputArr);


/*   list = [5, 7, 8, 10, 11, 12, 14, 17, 19, 20, 25, 29];
  swap(list, 5, 10);
  console.log(list); */