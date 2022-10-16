/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import Calculator from "../components/Calculator";
import { AppContext } from "../contexts/AppContext";

function Home() {
  const { calc, calcMethod } = React.useContext(AppContext);
  const handleClick = (event: string) => {
    switch (event) {
      case "C" || "AC":
        calcMethod.resetClickHandler();
        break;
      case "%":
        calcMethod.percentClickHandler();
        break;
      case "+/-":
        calcMethod.invertClickHandler();
        break;
      case "+":
      case "-":
      case "*":
      case "÷":
        calcMethod.signClickHandler(event);
        break;
      case ".":
        calcMethod.comaClickHandler(event);
        break;
      case "=":
        calcMethod.equalsClickHandler();
        break;
      default:
        calcMethod.numClickHandler(event);
        break;
    }
  };
  console.log(calc);

  return (
    <div>
      <h1>Home page</h1>
      <Calculator calc={calc} handleClick={handleClick} />
    </div>
  );
}

export default Home;
