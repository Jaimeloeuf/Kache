'use strict'; // Enforce use of strict verion of JavaScript


/*	Ideas:
	- Use something like a JWT to see who is allowed to access what
*/


/*	Types of storage list.
	FIFO list (Smth like a Queue system)
	FILO list (Smth like a Software Stack)
	Random Key/Value pair storage.
*/


class Stack {
	stack = [];

	constructor(options) {
		let { max_size, allowed_users } = options;

	}

	insert(obj) {
		stack.push(obj);
	}

	get() {
		return stack.pop();
	}
}

class rand {
	map_array = []; // An array of all the hashMaps stored in memory

	constructor(options) {
		// max_array defines max number of objects storable in the array
		// max_size defines max number of values in a single Map.
		let { max_array, max_size } = options;
	}

	add(key, value) { // For now all keys must be unique
		try {
			// Use consistent hash ring to choose a hashmap in the array to store data in
			let map = getMap(); // Returns a map
			map = new Map();

			// Add data into the choosen hashmap
			map.set(key) = value;
			return true; // Return true to indicate operation success
		} catch (err) {
			// Implement a better error handling process
			console.error(err);
			return false;
		}
	}
}

class rand_nodes {
	constructor(options) {

	}
}