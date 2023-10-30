import React from "react";

const BANNER_TYPES = {
  won: "happy",
  lost: "sad",
};

function Banner({ children, status }) {
  return <div className={`${BANNER_TYPES[status]} banner`}>{children}</div>;
}

export default Banner;
