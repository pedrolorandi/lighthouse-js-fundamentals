const calculateChange = function(total, cash) {
  let changeAmount = cash - total;
  let changeObj = {};
  let coinsType = ["twenty", "ten", "five", "two", "one", "quarter", "dime", "nickel", "penny"];
  let coinsValue = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let int;

  for (let i = 0; i < coinsType.length; i++){
    int = Math.floor(changeAmount/coinsValue[i]);
    
    if (int > 0){
      changeObj[coinsType[i]] = int;
      changeAmount %= coinsValue[i];
    }
  }

  return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));