const removeFromArray = function(array, ...elementsToRemove) {
    
    array = array.filter(element => !elementsToRemove.includes(element));
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
