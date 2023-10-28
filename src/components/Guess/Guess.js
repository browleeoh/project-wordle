import React from "react";

import { range } from "../../utils";

function Guess({ guess }) {
  const letters = guess?.split("");

  return (
    <p className="guess">
      {range(5).map((i) => {
        return (
          <span className="cell" key={i}>
            {letters && letters[i]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
