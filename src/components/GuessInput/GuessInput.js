import React from "react";

function GuessInput({ handleAddGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(e) {
    // prevent default form functionality
    e.preventDefault();

    // add guess to guesses
    console.log({ guess: tentativeGuess });
    handleAddGuess(tentativeGuess);

    // clear the input
    setTentativeGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        required
        title="5-letter word."
        type="text"
        value={tentativeGuess}
      />
    </form>
  );
}

export default GuessInput;
