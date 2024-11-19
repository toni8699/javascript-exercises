const sumAll = function(a,b) {
    let sum=0;
    if (!Number.isInteger(a) || !Number.isInteger(b)||a<0||b<0){
        return "ERROR";}
    for (let i=Math.min(a,b);i<=Math.max(a,b);i++){
        sum+=i;
    }
    return sum;
    

};

// Do not edit below this line
console.log(Number.isInteger(3));
module.exports = sumAll;
