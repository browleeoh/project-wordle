import React from "react";

function Input() {
  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    // prevent default form functionality
    e.preventDefault();

    console.log({ value });

    // clear the input
    setValue("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        maxLength={5}
        minLength={5}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        required
        title="5-letter word."
        type="text"
        value={value}
      />
    </form>
  );
}

export default Input;
