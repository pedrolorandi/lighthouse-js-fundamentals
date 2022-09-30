const sumLargestNumbers = function(data) {
  let max1 = 0, max2 = 0;

  for (let i = 0; i < data.length; i++){
    if (data[i] > max1){
      max2 = max1;
      max1 = data[i];
    }else if (data[i] > max2){
      max2 = data[i];
    }
  }

  return max1 + max2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));