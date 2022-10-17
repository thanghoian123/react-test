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
      <h1 className="title">Calculator</h1>
      <div className="calc">
        <div className="calc-sect-display">
          <div className="calc-display" data-testid="result">{props.calc.num || props.calc.res || 0}</div>
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
