import React from "react";
export const Square = props => {
  const handleClick = (e) => {
    let value = +props.number;
    props.getNewSum(value);
  }

  return (
    <button
      className="Square"
      value={props.number}
      onClick={handleClick}
    >
      {props.number}
    </button>
  );
};
