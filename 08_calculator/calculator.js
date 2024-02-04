const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let total = 0;
  if (array.length == 0) return total;
  array.forEach(element => {
     total += element;
  });
  return total;
};

const multiply = function(array) {
  let multi = 1;
array.forEach(element => {
    multi *= element;
});
return multi;
 //return array.reduce((product , current ) => product*current , 1)
};

const power = function(a,b) {
	
  return Math.pow(a,b);
};

const factorial = function(n) {
  let fact = 1;
  if (n === 0) return fact;
  for(let i=n; i>=1; i--){
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
