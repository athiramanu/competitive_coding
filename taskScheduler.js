/**
* Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be 
* done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
* 
* However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), 
* that is that there must be at least n units of time between any two same tasks.
* 
* Return the least number of units of times that the CPU will take to finish all the given tasks.
*/


/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

var leastInterval = function(tasks, n) {
    var alphabetArray = [];
    var taskDict = {};
    var maxCount = 26;
    var maxFreq = 0;
    var charCode_A = 65;
    var index, i, freq;
    
    while (maxCount--) alphabetArray.push(0);
    
    for(i = 0; i < tasks.length; i++) {
        index = tasks[i].charCodeAt(0) - charCode_A;
        alphabetArray[index] += 1;
    }
    
    for(i = 0; i < 26; i++) {
        freq = alphabetArray[i];
        maxFreq = freq > maxFreq ? freq : maxFreq;
        if (freq > 0) {
            if (freq in taskDict) {
                taskDict[freq].push(String.fromCharCode(charCode_A + i));
            }
            else {
                taskDict[freq] = [String.fromCharCode(charCode_A + i)];
            }
        }
    }
    
    return Math.max(tasks.length, (n+1) * (maxFreq-1) + taskDict[maxFreq].length);
};

