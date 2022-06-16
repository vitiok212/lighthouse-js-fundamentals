let howManyHundreds = function (num) {
  let answer = (num - (num % 100)) / 100;
  return answer;
}

console.log(howManyHundreds(14578));