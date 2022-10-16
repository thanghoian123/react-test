import React from "react";
import Keyboard from "./Keyboard";

export interface ICalc {
  num: string | number;
  sign: string;
  res: string | number;
  tempEval: string;
}

interface ICalculator {
  calc: ICalc;
  handleClick: (event: any) => void;
}

function Calculator(props: ICalculator) {
  return (
    <div className="project">
      <h1 className="title">Mac Calculator</h1>
      <p className="subtitle">
        Change Sass var $calc-size to adjust overall size
      </p>
      <div className="calc">
        <div className="calc-sect-display">
          <div className="calc-display">{props.calc.num || props.calc.res || 0}</div>
        </div>
        <Keyboard
          handleClick={props.handleClick}
          calc={props.calc}
        />
      </div>
    </div>
  );
}

export default Calculator;
