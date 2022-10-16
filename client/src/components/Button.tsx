/* eslint-disable react/display-name */
import React, { memo } from "react";
interface IButton {
  handleClick: (event: any) => void;
  value: string;
}

const Button = memo((props: IButton) => {
  return (
    <button
      className="calc-button calc-clear"
      onClick={() => props.handleClick("C")}
    >
      <span className="calc-button--inner">{props.value}</span>
    </button>
  );
});

export default Button;
