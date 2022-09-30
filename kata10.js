const multiplicationTable = function(maxValue) {
  number = "";

  for (let i = 1; i <= maxValue; i++){
    for (let j = 1; j <= maxValue; j++){
      number += j * i;

      if (j < maxValue)
        number += ' ';
    }
    number += '\n';
  }

  return number;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));