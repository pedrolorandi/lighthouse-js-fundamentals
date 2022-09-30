const camelCase = function(input) {
  let capitalize = false, string = "";
  
  for (let i = 0; i < input.length; i++){
    if(input[i] == ' '){
      capitalize = true;
    }else{
      capitalize ? string += input[i].toUpperCase() : string += input[i];
      capitalize = false;
    }
  }

  return string;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));