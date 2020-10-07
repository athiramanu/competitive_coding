/**
* Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, 
* return all strings in the set that have s as a prefix.
* 
* For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
*/

function Trie(key) {
	this.key = key;
	this.children = {};
	this.endOfWord = false;
}

var insert = function(word, root) {

	var parentNode = root;

	for (var i = 0; i < word.length; i++) {

		var letter = word[i];

		if (!(letter in root.children)) {
			var newNode = new Trie(letter);
			root.children[letter] = newNode;
		}

		root = root.children[letter];

		if (i + 1 == word.length) {
			root.endOfWord = true;
		}
	}

	return parentNode;
}

var getChildren = function(string, root, result = []) {
	if (root.endOfWord == true) {
		result.push(string);
	}
	if (root.children) {
		for (var node in root.children) {
			getChildren(string + node, root.children[node], result);
		}
	}
	return result
}

var search = function(string, root) {
	
	var result = [];

	for (var i = 0; i < string.length; i ++) {
		
		var letter = string[i];

		if (!(letter in root.children)) {
			return result;
		}

		root = root.children[letter];
	}

	if (root) {
		result = getChildren(string, root);
	}

	return result;
}

var autocomplete = function(string, words) {

	var root = new Trie(null);

	for (var i=0; i < words.length; i++) {
		root = insert(words[i], root);
	}

	return search(string, root);
}
