const makeCase = function(input, caseType) {
  let string = "", capitalize = false, upperLower = "";

  if(typeof caseType == "object"){
    upperLower = caseType[0];
    caseType = caseType[1];

    upperLower == "upper" ? capitalize = true : capitalize = false;
  }

  for (let i = 0; i < input.length; i++){
    switch (caseType){
      case "camel":
      case "pascal":
      case "title":
        if(input[i] == ' ' && (caseType == "camel" || caseType == "pascal")){
          capitalize = true;
        }else if (input[i] == ' ' && caseType == "title"){
          string += input[i];
          capitalize = true;
        }else if (i == 0 && (caseType == "pascal" || caseType == "title")){
          string += input[0].toUpperCase();
          capitalize = false;
        }else{
          capitalize ? string += input[i].toUpperCase() : string += input[i];
          capitalize = false;
        }
        break;
      case "snake":
        if(input[i] == ' '){
          string += '_';
        }else{
          string += input[i];
        }
        break;
      case "kebab":
          if(input[i] == ' '){
            string += '-';
          }else{
            string += input[i];
          }
          break;
      case "vowel":
        if(["a", "e", "i", "o", "u"].includes(input[i])){
          string += input[i].toUpperCase();
        }else{
          string += input[i];
        }
        break;
      case "consonant":
          if(!["a", "e", "i", "o", "u"].includes(input[i])){
            string += input[i].toUpperCase();
          }else{
            string += input[i];
          }
          break;
    }
  }

  if(upperLower == "upper"){
    string = string.toUpperCase();
  }else if(upperLower == "lower"){
    string = string.toLowerCase();
  }

  return string;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));