import React from "react";

const banner = {
  happy: (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> 3 guesses</strong>.
      </p>
    </div>
  ),
  sad: (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  ),
};

function Banner({ type }) {
  return <div className={`${type} banner`}>{banner[type]}</div>;
}

export default Banner;
