import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [numOfGuess, setNumOfGuess] = React.useState(0);

  function handleAddGuess(tentativeGuess) {
    if (numOfGuess === NUM_OF_GUESSES_ALLOWED) {
      alert(
        "You have used up all your guesses. Please refresh the page to play again."
      );
      return;
    }

    setNumOfGuess((numOfGuess) => numOfGuess + 1);
    setGuesses((guesses) => [...guesses, tentativeGuess]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
