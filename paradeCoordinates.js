const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

let finalPosition = function(moves) {
  let final = [0, 0];

  for (let move of moves) {
    if (move === 'north') {
      final[1] += 1;
    }
    if (move === 'south') {
      final[1] -= 1;
    }
    if (move === 'east') {
      final[0] += 1;
    }
    if (move === 'west') {
      final[0] -= 1;
    }
  }
  console.log(final);
  return final;
}

finalPosition(moves);
