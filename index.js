// Code your solution in this file

function findMatching (collection, string) {
  return collection.filter( function (driver) {
    return driver.toLowerCase() === string.toLowerCase() 
  })
}



function matchName(collection, string) {
	return collections.filter(function(driver) {
		return driver.name.toLowerCase() === name.toLowerCase();
	})