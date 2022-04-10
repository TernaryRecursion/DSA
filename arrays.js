let testArray = [1,2,3]
testArray = [1,2]
testArray = [1,2,3,4]

testArray[2] = 7; // Random Access
console.log(testArray[0]);

testArray = [1, 2, 3, 4];
value = testArray.shift();
console.log(testArray);
console.log(value);
testArray.unshift(8);
console.log(testArray);

testArray = [1, 2, 3, 4];
value = testArray.pop();
console.log(testArray);
console.log(value);
testArray.push(8);
console.log(testArray);