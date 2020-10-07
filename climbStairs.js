/**
* There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. 
* Given N, write a function that returns the number of unique ways you can climb the staircase. 
* The order of the steps matters.
*/

var caching = {
    1: 1,
    2: 2,
};

var climbStairs = function(n) {
    var val1, val2;
    
    if (n in caching) {
        return caching[n];
    }
   
    val1 = climbStairs(n-1);
    caching[n-1] = val1

    val2 = climbStairs(n-2);
    caching[n-2] = val1

    return val1 + val2;  
};
