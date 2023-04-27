/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function(strs) {
    strs.sort(); //sorting the array to rearrange into alphabetical order

    for (let i = 0; i < strs[0].length; i++) { //iterating through the array
        if (strs[0][i] !== strs[strs.length -1][i]){ //this checks if each character in the first string is equal to the last character in the last string. If true then it means the longest common characters have been found up to the 'i'th character.
            return strs[0].substr(0,i) //returns a substring of the first string that starts at index 0 and ends at index i.
        }
    }
    return strs[0] 
}