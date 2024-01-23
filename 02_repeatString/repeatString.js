const repeatString = function(string, numOfTimes) {
    if(string){
        if(numOfTimes < 0) return "ERROR";
        return string.repeat(numOfTimes);
    }else{
        return "";
    }
};

// Do not edit below this line
module.exports = repeatString;
