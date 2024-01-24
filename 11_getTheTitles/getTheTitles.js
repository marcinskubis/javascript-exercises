const getTheTitles = function(books) {
    let resultArray = [];
    for(let book of books){
        resultArray.push(book.title);
    }
    return resultArray;
};

// Do not edit below this line
module.exports = getTheTitles;
