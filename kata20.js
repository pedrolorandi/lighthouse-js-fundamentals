const blocksAway = function(directions) {
  const cardinal = [[1, 1], [0, 1], [1, -1], [0, -1]];
  let position = [0, 0], cardinalPosition = 0;

  for (let i = 0; i < directions.length; i+=2){
    if (i == 0 && directions[i] == "left"){
      cardinalPosition = 0;
    } else if (directions[i] == "right"){
      cardinalPosition == cardinal.length - 1 ? cardinalPosition = 0 : cardinalPosition++;
    } else if (directions[i] == "left"){
      cardinalPosition == 0 ? cardinalPosition = 3 : cardinalPosition--;
    }

    position[cardinal[cardinalPosition][0]] += directions[i+1] * cardinal[cardinalPosition][1];
  }

  return {
    east: position[0],
    north: position[1]
  };
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));