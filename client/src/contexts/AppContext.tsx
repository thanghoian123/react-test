/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react";
import { ICalc } from "../components/Calculator";
export interface ICalcMethod {
  numClickHandler: (e: string) => void;
  comaClickHandler: (e: string) => void;
  signClickHandler: (e: string) => void;
  equalsClickHandler: () => void;
  invertClickHandler: () => void;
  percentClickHandler: () => void;
  resetClickHandler: () => void;
}
export const defaultState: IState = {
  calc: {
    num: 0,
    sign: "",
    res: 0,
    tempEval: "",
  },
  calcMethod: {
    numClickHandler: (e: string) => {},
    comaClickHandler: (e: string) => {},
    signClickHandler: (e: string) => {},
    equalsClickHandler: () => {},
    invertClickHandler: () => {},
    percentClickHandler: () => {},
    resetClickHandler: () => {},
  },
  history:[]
};

const toLocaleString = (num: any) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1");

const removeSpaces = (num: any) => num.toString().replace(/\s/g, "");

const historyCalculator = (calc: ICalc[]) => {
  localStorage.setItem("history", JSON.stringify(calc));
};

const getHistory = () => {
  return JSON.parse(localStorage.getItem("history") || "[]");
};

interface IState {
  calc: ICalc;
  calcMethod: ICalcMethod;
  history?: ICalc[];
}
export const AppContext = React.createContext(defaultState);

export const AppProvider = ({ children }: { children: React.ReactElement }) => {
  const [calc, setCalc] = React.useState<ICalc>({
    num: 0,
    sign: "",
    res: 0,
    tempEval: "",
  });

  // const historyData = getHistory();

  const numClickHandler = (e: string) => {
    const value = e;
    if (removeSpaces(calc.num as number).length < 16) {
      const num =
        removeSpaces(calc.num as number) % 1 === 0 &&
        !calc.num.toString().includes(".")
          ? toLocaleString(Number(removeSpaces(calc.num + value)))
          : toLocaleString(calc.num + value);

      setCalc({
        ...calc,
        num,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const comaClickHandler = (e: string) => {
    const value = e;
    const num = !calc.num.toString().includes(".")
      ? calc.num + value
      : calc.num;
    setCalc({
      ...calc,
      num,
      // tempEval: calc.tempEval + num,
    });
  };

  const signClickHandler = (e: string) => {
    console.log(e);
    setCalc({
      ...calc,
      sign: e,
      tempEval: calc.num
        ? calc.tempEval + calc.num + e
        : calc.res
        ? calc.tempEval + calc.res + e
        : calc.tempEval + e,

      // !calc.tempEval
      //   ?
      //   : calc.tempEval + e.target.innerHTML,
      res: calc.num || calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    try {
      const res = eval(calc.tempEval + calc.num).toString();
      
      setCalc({ ...calc, res, num: 0, tempEval: "" });
      // historyData.push({ ...calc, res, tempEval: calc.tempEval + calc.num });
      // historyCalculator([...historyData]);
    } catch (error) {}
    // if (calc.sign && calc.num) {
    //   setCalc({
    //     ...calc,
    //     res:
    //       calc.num === "0" && calc.sign === "/"
    //         ? "Can't divide with 0"
    //         : toLocaleString(
    //             math(
    //               Number(removeSpaces(calc.res)),
    //               Number(removeSpaces(calc.num)),
    //               calc.sign
    //             )
    //           ),
    //     sign: "",
    //     num: 0,
    //   });
    // }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num
        ? toLocaleString(removeSpaces(calc.num as number) * -1)
        : calc.res
        ? toLocaleString(removeSpaces(calc.res as number) * -1)
        : 0,
    });
  };

  const percentClickHandler = () => {
    const num = calc.num
      ? parseFloat(removeSpaces(calc.num)) / Math.pow(100, 1)
      : calc.res
      ? parseFloat(removeSpaces(calc.res)) / Math.pow(100, 1)
      : 0;
    // let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;s
    setCalc({
      ...calc,
      num: num,
      res: num,
      // tempEval: num + "",
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      tempEval: "",
      num: 0,
      res: 0,
    });
  };

  const calcMethod = {
    numClickHandler,
    comaClickHandler,
    signClickHandler,
    equalsClickHandler,
    invertClickHandler,
    percentClickHandler,
    resetClickHandler,
  };

  return (
    <AppContext.Provider value={{ ...defaultState, calc, calcMethod }}>
      {children}
    </AppContext.Provider>
  );
};
