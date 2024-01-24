const palindromes = function (word) {
    word = removePunctuation(word);
    let leftPointer = 0;
    let rightPointer = word.length - 1;
    while(leftPointer <= rightPointer){
        if(word.at(leftPointer) !== word.at(rightPointer)) return false;
        leftPointer++;
        rightPointer--;
    }
    return true;
};
function removePunctuation(word){
    word = word.toLowerCase();
    word = word.replaceAll(" ","");
    word = word.replaceAll(".","");
    word = word.replaceAll(",","");
    word = word.replaceAll("!","");
    return word;
}
// Do not edit below this line
module.exports = palindromes;
