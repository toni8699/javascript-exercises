const removeFromArray = function(array,...args) {
    let new_array = [];
    for (let i = 0;i<array.length;i++){
        let n = array[i];
        console.log('n is:'+n);
        console.log('args include n: '+args.includes(n));
        if (!args.includes(n)){
            console.log('pushing: '+ n);
            new_array.push(n);
        }
    }
    return new_array;

};

// Do not edit below this line
let a = [1,2,3,4];
b=removeFromArray(a,3);
console.log();

module.exports = removeFromArray;
