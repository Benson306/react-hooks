import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dash from "./components/Dash";
import UseReducerHook from "./components/UseReducerHook";
import { createContext, useState } from 'react';
import UseContextHook from "./components/UseContextHook";

export const LoginContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App min-h-screen bg-slate-700">
      <h1 className="p-5 flex justify-center font-mono text-4xl text-white">React Hooks</h1>
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
          <Router>
            <Switch> 
              <Route exact path="/">
                <Dash />
              </Route>
              <Route path='/reducer'>
                <UseReducerHook />
              </Route>
              <Route path='/useContext'>
                <UseContextHook />
              </Route>
            </Switch>
          </Router>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
