function dwarfRollCall(dwarves) {
  var numberedDwarves = []
  for(var i = 0; i < dwarves.length; i++) {
    numberedDwarves.push(`${i + 1}. ${dwarves[i]} `)
  }
//need to get one whole string
  return numberedDwarves.join('');
}

function summonCaptainPlanet(planeteerCalls){
  var newPlanet = [];
  for(var i = 0; i < planeteerCalls.length; i++) {
    newPlanet.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return newPlanet;
}

function longPlaneteerCalls(words) {
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > 4) {
      return true;
    } else{
      return false;
    }
  }
}
//checking length of string, if its great than 4 true must return true.

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++) {
    if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
      return foods[i];
    }
  }
  return 'no cheese!';
}
//needs to iterate through string looking for specific cheese
