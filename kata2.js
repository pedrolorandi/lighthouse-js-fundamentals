const conditionalSum = function(values, condition) {
  let mod, sum = 0;
  condition == "even" ? mod = 0 : mod = 1;

  for (number of values){
    if(number % 2 == mod)
      sum += number;
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));