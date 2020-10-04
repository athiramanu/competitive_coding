/**
* Given a list of integers, write a function that returns the largest sum of
* non-adjacent numbers. Numbers can be 0 or negative.
* For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. 
* [5, 1, 1, 5] should return 10, since we pick 5 and 5.
*/

var maxSum = function(arr) {
	var incSum = 0;
	var exSum = 0;
	var temp = 0;

	for (var i = 0; i < arr.length; i++) {
		temp = incSum;
		if (arr[i] + exSum > incSum) {
			incSum = arr[i] + exSum;
		}
		exSum = temp;
	}
	return incSum;
}
