// Code your solution in this file

function findMatching (collection, string) {
  return collection.filter( function (driver) {
    return driver.toLowerCase() === string.toLowerCase(); 
  })
}

function fuzzyMatch(collection, string) {
	let nameLength = name.length;
	return collection.filter(function (driver) {
		return driver.slice(0, nameLength) === name;
  })
}


function matchName(collection, string) {
	return collection.filter(function (driver) {
		return driver.name.toLowerCase() === name.toLowerCase();
	})
}