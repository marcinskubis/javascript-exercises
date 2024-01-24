const reverseString = function(string) {
    result="";
    if(string){
        for(i=string.length-1; i>=0; i--){
            result += string.at(i);
        }
        return result;
    }else{
        return "";
    }
};

// Do not edit below this line
module.exports = reverseString;
