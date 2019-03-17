// Code your solution in this file

function findMatching (collection, string) {
  return collection.filter( function (driver) {
    return driver.toLowerCase() === string.toLowerCase() 
  })
}

function fuzzyMatch(drivers, name) {
	let lengthOfName = name.length;
	return drivers.filter(function(driverName) {
		return driverName.slice(0,lengthOfName) === name;
  })
}

function matchName(collection, string) {
	return collections.filter(function(driver) {
		return driver.name.toLowerCase() === name.toLowerCase();
	})