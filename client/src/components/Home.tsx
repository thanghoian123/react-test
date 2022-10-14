import React from "react";
import { AppContext } from "../contexts/AppContext";

function Home() {
  const { calc, count, up, down } = React.useContext(AppContext);
  console.log(calc, "==========");
  return (
    <div>
      Home page
      <p>{count}</p>
      <button onClick={up}>upp</button>
      <button onClick={down}>down</button>
    </div>
  );
}

export default Home;
