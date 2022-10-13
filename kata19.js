const generateBoard = function (queen1, queen2){
  const chessboard = [];
  const chessboardSize = 8;

  for (let i = 0; i < chessboardSize; i++){
    chessboard[i] = [];

    for (let j = 0; j < chessboardSize; j++)
      (JSON.stringify([i, j]) == JSON.stringify(queen1) || JSON.stringify([i, j]) == JSON.stringify(queen2)) ? chessboard[i][j] = 1 : chessboard[i][j] = 0;
  }

  return chessboard;
}

const queenThreat = function (chessboard){
  const chessboardSize = chessboard.length;
  let queen1, queen2;

  for (let i = 0; i < chessboardSize; i++){
    for (let j = 0; j < chessboardSize; j++){
      if(chessboard[i][j] == 1)
        !queen1 ? queen1 = [i, j] : queen2 = [i, j];
    }
  }

  return (queen1[0] == queen2[0] || queen1[1] == queen2[1] || queen1[0] == queen2[1] || queen1[1] == queen2[0]) ? true : false; 
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));