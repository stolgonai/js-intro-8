let yourScore = 0;
let otherScore = 0;

function score(isWin) {
  if (isWin) yourScore += 1;
  else otherScore += 1;
}

score(true);
score(true);
score(false);
score(false);

console.log("this is my score :", yourScore);
console.log("This is other score :", otherScore);

////////////////////////////

function score1(isWin) {
  let yourScore = 0;

  function inner() {
    if (isWin) yourScore += 1;

    return yourScore;
  }
  return inner;
}

/**
 * yourScore is initialied with 0
 * inner Function created which increasea the score by 1 or not
 *
 */
score1(true);
// score1(true);
// score1(false);
// score1(false);
