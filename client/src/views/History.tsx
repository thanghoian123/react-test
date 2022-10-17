import React, { useContext } from "react";
import { ICalc } from "../components/Calculator";
import { AppContext } from "../contexts/AppContext";

function History() {
  const { history } = useContext(AppContext);
  console.log(history, "========");
  return (
    <div>
      History
      {history && history.length > 0 ? (
        <ul>
          {(history || []).map((i: ICalc, index: number) => {
            return <li key={index}>{i.tempEval || ""} = {eval(i.tempEval)}</li>;
          })}
        </ul>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
}

export default History;
