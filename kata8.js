const repeatNumbers = function(data) {
  let string = "", previousString = "", output = "";
  
  for (let i = 0; i < data.length; i++){
    string = "";
    
    for (let j = 0; j < data[i][1]; j++){
      string += data[i][0];
    }

    previousString = output;
    output = previousString + string

    if(i < data.length - 1)
      output += ", "

  }

  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));