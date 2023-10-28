import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [numOfGuess, setNumOfGuess] = React.useState(0);
  const [gameResult, setGameResult] = React.useState("");

  function handleAddGuess(tentativeGuess) {
    setNumOfGuess((numOfGuess) => numOfGuess + 1);
    setGuesses((guesses) => [...guesses, tentativeGuess]);

    // If the number of guesses is equal to the number of guesses allowed,
    if (
      numOfGuess === NUM_OF_GUESSES_ALLOWED - 1 &&
      tentativeGuess !== answer
    ) {
      setGameResult("sad");
      return;
    }

    // if the tentative guess is equal to the answer, then the game is over.
    if (tentativeGuess === answer) {
      setGameResult("happy");
      return;
    }
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        isDisabled={gameResult.length > 0}
      />
      {gameResult && <Banner type={gameResult} />}
    </>
  );
}

export default Game;
