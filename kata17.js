const urlDecode = function(text) {
  let key = "", value = "", obj = {};
  for(let i = 0; i <= text.length; i++){
    if (text[i] == "="){
      key = value;
      value = "";
    } else if (text[i] == "&" || i == text.length){
      obj[key] = value;
      value = "";
    } else if (text[i] == "%" && text[i+1] == "2" && text[i+2] == "0") {
      value += " ";
      i += 2;
    } else {
      value += text[i]
    }
  }

  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);