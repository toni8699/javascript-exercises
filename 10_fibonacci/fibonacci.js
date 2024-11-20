const fibonacci = function(n) {
    if (n<0){
        return "OOPS";
    }
    if (n==0){
        return 0;
    }
    if (n ==1||n==2){
        return 1;
    }
    let table = [];
    table[0]=0;
    table[1]=1;
    table[2]=1;
    for (let i = 3;i<=n;i++){
        table[i]=table[i-1]+table[i-2];
    }
    return table[n];

};
console.log(fibonacci(1));
// Do not edit below this line
module.exports = fibonacci;
