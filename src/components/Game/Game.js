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
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleAddGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    // user has lost
    if (
      nextGuesses.length >= NUM_OF_GUESSES_ALLOWED &&
      tentativeGuess !== answer
    ) {
      setGameStatus("lost");
      return;
    }

    // user has won
    if (tentativeGuess === answer) {
      setGameStatus("won");
      return;
    }
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        handleAddGuess={handleAddGuess}
        isDisabled={gameStatus !== "running"}
      />
      {gameStatus !== "running" && (
        <Banner
          answer={answer}
          numOfGuesses={guesses.length}
          type={gameStatus}
        />
      )}
    </>
  );
}

export default Game;
