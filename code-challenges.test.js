// ASSESSMENT 3: Coding Practical Questions with Jest
 
// const { conditionalExpression } = require("@babel/types")
// const { count } = require("console")
// const { it } = require("node:test")
// const { describe } = require("yargs")
 
// const { exportAllDeclaration } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")
 
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
 
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
 
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
 
// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
 
// a) Create a test with expect statements for each of the variables provided.
 
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
 
const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 
// RED
 // Write the test
   describe("fibFinder", () => {
     it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
       const fibLength1 = 6
       // Expected output: [1, 1, 2, 3, 5, 8]
       const fibLength2 = 10
       // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
       expect(fibFinder(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
       expect(fibFinder(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
     })
   })
 
   // See the test fail
     // FAIL  ./code-challenges.test.js
     // fibFinder
     //   ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
 
     // ● fibFinder › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
    
     //   ReferenceError: fibFinder is not defined
  
// b) Create the function that makes the test pass.
 
 // GREEN
   //PSEUDOCODE:
     // declare a function called fibFinder
     // input: a number
     // output: return a an array with the length of elements the the number in the input is asking for and give the Fibonacci sequence
     // PROCESS: 
     // Create a function called "fibFinder"
     // declare a variable called "array" and assign the value of and array [1 , 1], this allowed me to get started and have an array in place to work on. In the beginning I tryed to declare variable with the beginning numbers of the Fibonacci sequence.
     // I used the for loop method to iterate through the array through each element.
     // after in order to get the elements to add together I took the element at the zeroth index and then added the the following index creating a new element. In order to add this new element into the array I used the push method in order to add to the current array, then called on the array that was updated. With taking the the given arrays in they tell the funtion which element to stop at. 
 
     // Write the code
     // const fibFinder = (number) => {
     //   let num1 = 0
     //   let num2 = 1
     //   let num3 = num1 + num2
     //   for(i=2; i <= 6; i++) {
     //     return (num1[i], num2[i])
     //   }
     // }
 
     // const fibFinder = (numberArr) => {
     //   numberArr = []
     //   numberArr[0] = 0
     //   numberArr[1] = 1
     //   numberArr[i] = (numberArr[ i - 1] + numberArr [ i - 2])
     // }
 
     const fibFinder = (number) => {
       let array = [1, 1]
       for (let i = 1; i < number - 1; i++) {
         array.push(array[i] + array[i - 1])
       }
       return array
     }
 
// console.log(fibFinder(fibLength1))
// console.log(fibFinder(fibLength2))
 
// console.log(fibFinder(fibLength1))
      // See the test pass
       // PASS  ./code-challenges.test.js
       // fibFinder
       //   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
 
       // Test Suites: 1 passed, 1 total
       // Tests:       1 passed, 1 total
       // Snapshots:   0 total
       // Time:        0.17 s, estimated 1 s
       // Ran all test suites.
       // ✨  Done in 0.77s.
   // Refactor, if necessary
 
 // James was awesome enough to walk me through this problem in class on Friday. 

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
 
// a) Create a test with expect statements for each of the variables provided.
 
const studyMinutesWeek1 = {
 sunday: 90,
 monday: 30,
 tuesday: 20,
 wednesday: 15,
 thursday: 30,
 friday: 15,
 saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]
 
const studyMinutesWeek2 = {
 sunday: 100,
 monday: 10,
 tuesday: 45,
 wednesday: 60,
 thursday: 20,
 friday: 15,
 saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]
 
 // RED
   // Write the test
     describe ("toGreatest", () => {
       it ("takes in an object and returns an array of the values sorted from least to greatest", () => {
         const studyMinutesWeek1 = {
           sunday: 90,
           monday: 30,
           tuesday: 20,
           wednesday: 15,
           thursday: 30,
           friday: 15,
           saturday: 60
         }
         // Expected output: [15, 15, 20, 30, 30, 60, 90]
        
         const studyMinutesWeek2 = {
           sunday: 100,
           monday: 10,
           tuesday: 45,
           wednesday: 60,
           thursday: 20,
           friday: 15,
           saturday: 65
         }
         // Expected output: [10, 15, 20, 45, 60, 65, 100]
           expect(toGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
           expect(toGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
       })
     })
 
   // See the test fail
     // FAIL  ./code-challenges.test.js
     // fibFinder
     //   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
     // toGreatest
     //   ✕ takes in an object and returns an array of the values sorted from least to greatest
 
     // ● toGreatest › takes in an object and returns an array of the values sorted from least to greatest
 
     //   ReferenceError: toGreates is not defined
 // b) Create the function that makes the test pass.
 
 // GREEN
   //PSEUDOCODE:
     // declare a function called "toGreatest"
     // input: an object
     // output: an array of the values sorted from least to greatest
     // Process:
     // Create a function called "toGreatest" that takes in the object inside the parameters
     // declare a variable called "valuesGiven" and use the built in method Object.values, this method will access the object key:value pairs and return just the values in the object.
     // once I called on the variable it returned the values in the order they were provided: [90, 30, 20, 15, 30, 15, 60] for the first object given.
     // In order to sort the numbers in numerical order from least to greatest I used the built in method sort.
     // After console logging the second given object it returned: [10, 100, 15, 20, 45, 60, 65]
     // After some research I learned this is due to the lexicographic sort by the default set in place. This is the process of sorting the elements inside of an array as if they are strings and not in numerical order.
     // To resolve this I organized the sort parameters to list in order. Then called on the variable in order to return the new array in order from least to greatest.
 
   // Write the code
     const toGreatest = (object) => {
       let valuesGiven = Object.values(object)
       valuesGiven.sort((a, b) => {
         return a - b;
       })
       return valuesGiven
     }
     // console.log(toGreatest(studyMinutesWeek1))
     // console.log(toGreatest(studyMinutesWeek2))
  
     // See the test pass
       // PASS  ./code-challenges.test.js
       // fibFinder
       //   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
       // toGreatest
       //   ✓ takes in an object and returns an array of the values sorted from least to greatest
 
       // Test Suites: 1 passed, 1 total
       // Tests:       2 passed, 2 total
       // Snapshots:   0 total
       // Time:        0.173 s, estimated 1 s
       // Ran all test suites.
       // ✨  Done in 0.63s.
 
   // Refactor, if necessary
 
 
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
 
// a) Create a test with expect statements for each of the variables provided.
 
 
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
 
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
 
const accountTransactions3 = []
// Expected output: []
 
// RED
 // Write the test
     describe("accumulatingSum", () => {
       it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
         const accountTransactions1 = [100, -17, -23, -9]
         // Expected output: [100, 83, 60, 51]
 
         const accountTransactions2 = [250, -89, 100, -96]
         // Expected output: [250, 161, 261, 165]
 
         const accountTransactions3 = []
         // Expected output: [] 
         expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
         expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
         expect(accumulatingSum(accountTransactions3)).toEqual([])
       })
     })
 
     // See the test fail
       // FAIL  ./code-challenges.test.js
       // fibFinder
       //   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
       // toGreatest
       //   ✓ takes in an object and returns an array of the values sorted from least to greatest (1 ms)
       // accumulatingSum
       //   ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
 
       // ● accumulatingSum › takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
 
       //   ReferenceError: accumulatingSum is not defined
 
// b) Create the function that makes the test pass.
 
 // GREEN
     //PSEUDOCODE:
       // declare a function called "accumulatingSum"
       // input: an array
       // output: returns an array of the accumulating sum
       // Process:
       // Create a function called "accumulatingSum"
       // In the beginning my method was return an array but adding the each element together by calling on their indexes: [array[0] + array[0 - 1] + array[0 - 2] + array[0- 3] after running my code I realized that the output was the sum of the total array and that is not was the goal is.
       // After rethinking my process I then defined each variable since both given arrays have 4 elements. The output gave me my desired output for the first two arrays when I noticed I was hardcoding and I needed my function to be dynamic in order to work for all possible arrays and especially the three given arrays.
       // In order to do this I started by defining a variable called wrapArray in order to place the data into square brackets.
       // Then created a conditional statement because in every array I need the first number to reflect the first index in the given array.
       // if the element = an index of zero it will return that number in square brackets
       // if the element does not have an index of 0 then it will take the number and iterate through the rest of the given array and add the following values together and place them in the following index place. Then I called on the variable to define/update it.
 
 
     // Write the code
       // Trial and Error: I realized I was hard coding.
       // let indexZero = array[0]
       // let indexOne = array[0] + array[1]
       // let indexTwo = indexOne + array[2]
       // let indexThree = indexTwo + array[3]
       // for (i = 0; i < array.length - 1; i++) {
         // return [indexZero, indexOne, indexTwo, indexThree]
         // return [(array[0]), (array[0] + array[1]), (array[0] + array[1] + array[2]), (array[0] + array[1] + array[2] + array[3])]
       // }
 
       const accumulatingSum = (array) => {
         let wrapArray = []
         array.map((num, index) => {
           if(index === 0){
             wrapArray[index] = num;
           }else{
             wrapArray[index] = num + wrapArray[index - 1];
           }
        });
        return wrapArray
         }
    
// console.log(accumulatingSum(accountTransactions1))
// console.log(accumulatingSum(accountTransactions2))
// console.log(accumulatingSum(accountTransactions3))
      
       // See the test pass
         // PASS  ./code-challenges.test.js
         // fibFinder
         //   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
         // toGreatest
         //   ✓ takes in an object and returns an array of the values sorted from least to greatest
         // accumulatingSum
         //   ✓ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)
      
         // Test Suites: 1 passed, 1 total
         // Tests:       3 passed, 3 total
         // Snapshots:   0 total
         // Time:        0.147 s
         // Ran all test suites.
         // ✨  Done in 0.60s.
     // Refactor, if necessary