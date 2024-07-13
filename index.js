function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === difference) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Write function declaration
  Declare parameters 1. Array of integers 2. An integer
  Iterate over the array of integers, each time adding every two integers
  
if the sum equals the passed in integer, return true, otherwise return false 
*/

/*
  Add written explanation of your solution here
  I'm required to write a function that takes in two arguments (an array and a number).
  I iterate over  the integers in the array, each time checking if there's an integer in the array other than itself which is equal to the difference between the current number and the raget number (target number minus the current number in the current iteration). If these two are equal, then my function should return true. If none of the iterations translates to equal, then my function should return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
