/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Constraints:
2 <= nums.length <= 105
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var valueMap = {};
    var key;
    for (var i=0; i < nums.length; i++) {
        key =  target - nums[i];
        if (nums[i] in valueMap) {
            return [valueMap[nums[i]], i]
        }
        valueMap[key] = i;
    }
};