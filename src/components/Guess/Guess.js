import React from "react";

import { range } from "../../utils";

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <Cell
          key={i}
          letter={value ? value[i].letter : ""}
          status={value ? value[i].status : ""}
        />
      ))}
    </p>
  );
}

export default Guess;
