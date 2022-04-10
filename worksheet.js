function guessTheNumber(max) {
  numberToGuess = Math.floor(Math.random() * (max - 1) + 1);

  for (x = 1; x < max; x++) {
    if (x === numberToGuess) {
      console.log("Correct");
      break;
    } else {
      console.log("Wrong");
    }
  }
}

guessTheNumber(100);
guessTheNumber(1000);
guessTheNumber(10000);
