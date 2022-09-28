const chooseStations = function (stations) {
  let goodStations = [];

  for(let station of stations){
    if(station[1] >= 20 && (station[2] == 'school' || station[2] == 'community centre'))
      goodStations.push(station[0]);
  }

  return goodStations;
}