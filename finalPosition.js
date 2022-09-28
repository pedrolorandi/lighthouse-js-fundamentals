const finalPosition = function (moves){
  let x = 0, y = 0, spot = [0, 0];
  for (let move of moves){
    if(move == 'north') {
      y++;
    } else if (move == 'south') {
      y--;
    } else if (move == 'west') {
      x--;
    } else if (move == 'east') {
      x++;
    }
  }

  spot[0] = x;
  spot[1] = y;
  return spot;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];
finalPosition(moves);