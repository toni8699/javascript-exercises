const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(array) {
  let sum =0;
  for (let i = 0; i < array.length;i++){
      sum+=array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product =1;
  for (let i = 0; i < array.length;i++){
      product= product*array[i];
  }
  return product;

};

const power = function(a,b) {
  let power =a;
  for (let i = 0;i<b-1;i++){
    console.log('i='+i);
    console.log('power='+power);
        power=power*a;

       }
  return power;
  
};
console.log(power(2,2));

const factorial = function(n) {
  if (n == 0){
    return 1;}else{
    return n*factorial(n-1);}
};
console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
