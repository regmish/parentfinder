'use strict';

/**
 * Recursively find the parent of a node element
 */

// dummy data
var collection = [
	{ name: 'Ram', parent: 'Shyam' }, { name: 'Shyam', parent: 'Hari' }, { name: 'Hari', parent: 'Shankar' }, { name: 'Shankar' },
	{ name: 'George', parent: 'Stephen' }, { name: 'Stephen', parent: 'Henry' }, { name: 'Henry', parent: 'Richard' }, { name: 'Richard' },
	{ name: 'Pat', parent: 'Andy' }, { name: 'Andy', parent: 'Jones' }, { name: 'Jones', parent: 'Mark' }, { name: 'Mark' }
];

/**
 * function to find parent of a person
 * @param  {String} person Name of a Person whose parent't is to be found
 * @return {String}      Grand-grandfather of that person
 */
function findParent(person) {
    var _current = collection.filter(function(node) {
        return node.name == person
    })[0];

    if(!_current) { // CASE : No matching name found
    	return 'person not in the collection';
    }
    else if (_current && !_current.parent) { // CASE: No parent found
        return _current.name;
    }
    return findParent(_current.parent); // find parent's parent again
};



module.exports = findParent;


//-- Test Code ----------------------------------------------------------
if (require.main === module) {
    (function() {
    	var name = process.argv[2] || 'Ram';
        console.log(findParent(name));
    })();
}
