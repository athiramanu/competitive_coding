/*
Given an unsorted integer array, find the smallest missing positive integer.
Your algorithm should run in O(n) time and uses constant extra space.
*/

var removeNonPositiveValues = function(nums) {
    var length = nums.length;
    nums.push(0);
    for (var i = 0; i < length; i++) {
        if (nums[0] > 0) {
            nums.push(nums[0]);
        }
        nums.shift();        
    }
    return nums;
}

var markVisitedNumbers = function(nums) {  
    length = nums.length;
    for (var i = 0; i < nums.length; i++) {
        val = nums[i];
        val = val > 0 ? val : -1*val;
        if (val < length && nums[val] > 0) {
            nums[val] *= -1;
        }
    }
    return nums;
}

var firstMissingPositive = function(nums) {
    var small, val;
    nums = removeNonPositiveValues(nums);
    nums = markVisitedNumbers(nums);
    for (var i = 1; i <= nums.length; i++) {
        if (nums[i] > 0) {
            return i;
        }
    }
    return length;
};