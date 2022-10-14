import React from "react";
import { AppContext } from "../contexts/AppContext";

function Home() {
  const { calc, count, up, down } = React.useContext(AppContext);
  console.log(calc, "==========");
  return (
    <div>
      <h1>Home page</h1>
      <p>{count}</p>
      <button onClick={up}>upp</button>
      <button onClick={down}>down</button>
    </div>
  );
}

export default Home;
