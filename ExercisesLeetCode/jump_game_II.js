/**
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Your goal is to reach the last index in the minimum number of jumps.
You can assume that you can always reach the last index.

Example 1:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [2,3,0,1,4]
Output: 2
 
Constraints:
1 <= nums.length <= 104
0 <= nums[i] <= 1000
 */

var nums = [2,3,0,1,4];

var counter_steps = 0;
for(var i=0;i<nums.length;i++){
    if (nums[i]+counter_steps >= nums.length-1) {
        i = nums.length;
        counter_steps = counter_steps + 1;
        console.log(`Arrive at end | i = ${i}`);        
    }else{
        counter_steps = counter_steps + 1;        
    }
    //console.log(`Counter steps = ${counter_steps}`);    
}
console.log(`Jumps number: ${counter_steps}`);


var jump = function(nums) {
    
};