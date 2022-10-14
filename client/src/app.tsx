// client/src/app.tsx
import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import NoMatch from "./components/NoMatch";
import { AppProvider } from "./contexts/AppContext";
import routes from "./routes";

export const App: React.FC = () => {
  return (
    <AppProvider>
      <div>
        <Link to="/home">Home</Link>
        <Switch>
          {routes.map(({ path, exact, C, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={() => <C />} />
          ))}

          <Route render={(props) => <NoMatch />} />
        </Switch>
      </div>
    </AppProvider>
  );
};
