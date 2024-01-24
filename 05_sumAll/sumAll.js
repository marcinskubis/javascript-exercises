const sumAll = function(num1, num2) {
    if((typeof num1 === "number" && typeof num2 ==="number") && (num1>= 0 && num2 >= 0)){
        let bottom = num1 > num2 ? num2 : num1;
        let upper = num1 > num2 ? num1 : num2;
        let sum = 0;
        for(let i=bottom; i<=upper; i++){
            sum+=i;
        }
        return sum;
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
