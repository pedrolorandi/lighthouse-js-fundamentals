const judgeVegetable = function(vegetables, metric){
  let judge = "", max = 0;

  for (let object of vegetables){
    if(object[metric] > max){
      judge = object["submitter"];
      max = object[metric];
    }
  }

  return (judge);
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

judgeVegetable(vegetables, metric)