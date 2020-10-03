/**
* Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
* 1) Only one disk can be moved at a time.
* 2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
* 3) No disk may be placed on top of a smaller disk.
*/

/**
 * @param {number} diskNum
 */

var towerOfHanoi = function(diskNum, sourceTower = 1, destinationTower = 3) {
	if (diskNum) {
		towerOfHanoi(diskNum-1, sourceTower, 6-sourceTower-destinationTower);
		console.log('Moved disk ' + diskNum + ' from peg ' + sourceTower + ' to peg ' + destinationTower);
		towerOfHanoi(diskNum-1, 6-sourceTower-destinationTower, destinationTower);
	}
}
