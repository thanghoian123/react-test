/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from "react";
export const defaultState = {
  calc: {},
  count: 0,
  up: () => {},
  down: () => {},
};
export const AppContext = React.createContext(defaultState);

export const AppProvider = ({ children }:{children: React.ReactElement}) => {
  const [count, setCount] = React.useState(0);
  const up = () => {
    console.log("------ upppp")
    setCount((pre) => pre + 1);

  };

  const down = () => {
    console.log("------ down")
    setCount((pre) => pre - 1);
  };
  return (
    <AppContext.Provider value={{ ...defaultState, count, up, down }}>
      {children}
    </AppContext.Provider>
  );
};
