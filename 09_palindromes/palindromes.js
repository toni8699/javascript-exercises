const palindromes = function (string) {
    let b = string.length;
    for (let i =0;i<string.length;i++){
        if (string[i].toUpperCase()!=string[b-1].toUpperCase()){
            return false;
        }else{
            b--;
        }
    }
    return true;

};
let a ='Rats live on';
let b= 'no evil star';
console.log(palindromes('Rats live on no evil star'));

// Do not edit below this line
module.exports = palindromes;
