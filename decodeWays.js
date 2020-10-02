/*
Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
*/

var numDecodings = function(s) {
    if (s.length < 1) return 0;
    let dp = [];
    var recur = function (index) {
        let result = 0
        if (index == s.length) return 1;
        if (dp[index]!=null) return dp[index];
        if (s[index] > 0) {
            result += recur(index+1); 
        }
        if (s[index] > 0 && 
            s[index+1] != null && 
            s[index]+s[index+1] <= 26) {
            result += recur(index+2);
        }
        dp[index] = result;
        return result;
    }
    return recur(0);
};
