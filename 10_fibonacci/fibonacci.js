const fibonacci = function(index) {
    if(typeof index == "string") index = parseInt(index, 10);
    if(index === 0) return 0;
    if(index < 0 ) return "OOPS";
    let start = [1, 1];
    if(index>2){
        for(let i=2; i<index; i++){
            start.push(start[i-1]+start[i-2]);
        }
        return start[index-1];
    }else{
        return 1;
    }
};

// Do not edit below this line
module.exports = fibonacci;
