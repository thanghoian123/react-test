import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function History() {
  const { history } = useContext(AppContext);
  console.log(history, "========");
  return <div>History</div>;
}

export default History;
