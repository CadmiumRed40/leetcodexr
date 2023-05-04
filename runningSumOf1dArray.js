/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

var runningSum = function(nums) {
    results = [nums.length]; // creating a results array that is equal to the same number of indexes 
    results[0] = nums[0]; //setting the value of the first index in results to the first index in nums
    for (i = 1 ; i < nums.length; i++){ //iterating over nums starting at index 1 instead of 0. 
        results[i] = nums[i] + results[i-1]; //at each iteration we update the results array by i and set it to equal to the updated index of nums plus the previous result index which is pointed to using i-1 (-1 to move the direction of the current index backwards one space.)
    }
    return results; //returning the results
};