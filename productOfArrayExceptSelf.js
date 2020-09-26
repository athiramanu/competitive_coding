/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is 
equal to the product of all the elements of nums except nums[i].
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var output = [];
    var right = 1;

    output[0] = 1;
   
    for (var i = 1; i < nums.length; i++) {
        output[i] = output[i-1] * nums[i-1];
    }
    
    for (i = nums.length - 1; i > 0; i--) {
        output[i] = output[i] * right;
        right = right * nums[i];
    }
    
    output[i] = right;
    
    return output
};