/* eslint-disable react/display-name */
import React, { memo } from "react";
import { ICalc } from "./Calculator";

interface IKeyboardProps {
  handleClick: (event: any) => void;
  calc: ICalc
}

const keyboardMap = [
  {
    className: "calc-sect-memory",
    btns: ["C", "-/+", "←"],
  },
  {
    className: "calc-sect-operations",
    btns: ["÷", "*", "-", "+", "="],
  },
  {
    className: "calc-sect-numbers",
    btns: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
];

const Keyboard = memo((props: IKeyboardProps) => {
  return (
    <div>
      {/* {keyboardMap.map((i, index) => {
        return (
          <div className={i.className} key={index}>
            {i.btns.map((btn) => (
              <Button
                key={btn}
                value={btn}
                handleClick={() => props.handleClick(btn)}
              />
            ))}
          </div>
        );
      })} */}
      <div className="calc-sect-memory">
        <button
          className="calc-button calc-delete"
          onClick={() => props.handleClick("C")}
        >
          <span className="calc-button--inner">
            {!props.calc.res ? "AC" : "C"}
          </span>
        </button>
        <button
          className="calc-button calc-delete"
          onClick={() => props.handleClick("+/-")}
        >
          <span className="calc-button--inner">+/-</span>
        </button>
        <button
          className="calc-button calc-delete"
          onClick={() => props.handleClick("%")}
        >
          <span className="calc-button--inner">%</span>
        </button>
      </div>
      <div className="calc-sect-operations">
        <button
          className="calc-button calc-divide"
          onClick={() => props.handleClick("÷")}
        >
          <span className="calc-button--inner">÷</span>
        </button>
        <button
          className="calc-button calc-multiply"
          onClick={() => props.handleClick("*")}
        >
          <span className="calc-button--inner">*</span>
        </button>
        <button
          className="calc-button calc-subtract"
          onClick={() => props.handleClick("-")}
        >
          <span className="calc-button--inner">-</span>
        </button>
        <button
          className="calc-button calc-add"
          onClick={() => props.handleClick("+")}
        >
          <span className="calc-button--inner">+</span>
        </button>
        <button
          className="calc-button calc-equals"
          onClick={() => props.handleClick("=")}
        >
          <span className="calc-button--inner">=</span>
        </button>
      </div>
      <div className="calc-sect-numbers">
        <button className="calc-button or-10" onClick={() => props.handleClick(",")}>
          <span className="calc-button--inner">,</span>
        </button>
        <button
          className="calc-button calc-num-0"
          onClick={() => props.handleClick("0")}
        >
          <span className="calc-button--inner">0</span>
        </button>
        <button
          className="calc-button calc-num-1"
          onClick={() => props.handleClick("1")}
        >
          <span className="calc-button--inner">1</span>
        </button>
        <button
          className="calc-button calc-num-2"
          onClick={() => props.handleClick("2")}
        >
          <span className="calc-button--inner">2</span>
        </button>
        <button
          className="calc-button calc-num-3"
          onClick={() => props.handleClick("3")}
        >
          <span className="calc-button--inner">3</span>
        </button>
        <button
          className="calc-button calc-num-4"
          onClick={() => props.handleClick("4")}
        >
          <span className="calc-button--inner">4</span>
        </button>
        <button
          className="calc-button calc-num-5"
          onClick={() => props.handleClick("5")}
        >
          <span className="calc-button--inner">5</span>
        </button>
        <button
          className="calc-button calc-num-6"
          onClick={() => props.handleClick("6")}
        >
          <span className="calc-button--inner">6</span>
        </button>
        <button
          className="calc-button calc-num-7"
          onClick={() => props.handleClick("7")}
        >
          <span className="calc-button--inner">7</span>
        </button>
        <button
          className="calc-button calc-num-8"
          onClick={() => props.handleClick("8")}
        >
          <span className="calc-button--inner">8</span>
        </button>
        <button
          className="calc-button calc-num-9"
          onClick={() => props.handleClick("9")}
        >
          <span className="calc-button--inner">9</span>
        </button>
      </div>
    </div>
  );
});

export default Keyboard;
