let prompt = require("prompt-sync")();

let randomNumber = Math.floor(Math.random() * 100);
let guesses = [];

const guessNumber = function(number){
  if(guesses.includes(number)){
    console.log("Already Guessed!");
  } else if (number && !/^\d+$/.test(number)){
    console.log("Not a number! Try again!");
  } else if (number && number < randomNumber){
    guesses.push(number);
    console.log("Too Low!");
  } else if (number && number > randomNumber){
    guesses.push(number);
    console.log("Too High!");
  } else if (number && number == randomNumber){
    guesses.push(number);
    console.log(`You got it! You took ${guesses.length} attempts!`)
    return true;
  }

  let answer = prompt("Guess a number: ");
 
  guessNumber(answer)
}

guessNumber();