const squareCode = function(message) {
  let newMessage = message.replace(/ /g,'');
  let length = newMessage.length;
  let cols = Math.ceil(Math.sqrt(length));
  let square = "";

  for (let i = 0; i < cols; i++){
    for (let j = i; j < length; j += cols){
      square += newMessage[j];
    }
    square += " ";  
  }

  return square;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));