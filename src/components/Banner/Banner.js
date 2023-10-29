import React from "react";

const BANNER_TYPES = {
  won: "happy",
  lost: "sad",
};

function Banner({ answer, numOfGuesses, type }) {
  return (
    <div className={`${BANNER_TYPES[type]} banner`}>
      {type === "won" && (
        <p>
          <strong>Congratulations!</strong>
          {" Got it in "}
          <strong>
            {numOfGuesses > 1 ? `${numOfGuesses}guesses` : "1 guess"}
          </strong>
          .
        </p>
      )}
      {type === "lost" && (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
