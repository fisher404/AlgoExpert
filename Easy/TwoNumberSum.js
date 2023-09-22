//twoNumberSum = taking in array of distinct integers (no repeating numbers) nd a target value
//find pair of numbers in a given array that sum to the target value
// returns the number pair in an array
// if no number pairs, return an empty array


// double for loop solution (On^2) time)

function twoNumberSum(array, targetSum) {
    for (i = 0; i < array.length - 1; i++) {
        const firstNum = array[i];
        for (j = i + 1; j < array.length; j++) {
            const secondNum = array[j];
            if (firstNum + secondNum === targetSum){
                return [firstNum, secondNum];
            }
        }
    }
    return [];
}

const array = [3, 5, 8, 11, 2, 9];
const targetSum = 10;

const result = twoNumberSum(array, targetSum);

// Print the result to the console
console.log(result);

// hash table

function twoNumberSum(array, targetSum) {
    const nums = {};

}


//could traverse the array twice throught two for loops (On^2) time
    //use a hash table 
        ///store every number in array in hash table to access number in constant time

// array = [ 3, 5, -4, 8, 11, 1, -1, 6 ]
// target sum = 10
// current num = x
// find x + y such that sum = 10. y = 10 - x

// if y is in our hash table (accessed in constant time) then return x and y, other wise keep traversing array and // x values stored in the hash table 

// starting at first number in array (3), keep iterating until we get to y = 10 -(-1) - 11, which is a value stored in the hash table


