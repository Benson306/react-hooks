import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dash from "./components/Dash";
import UseReducerHook from "./components/UseReducerHook";

function App() {

  return (
    <div className="App min-h-screen bg-slate-700">
      <h1 className="p-5 flex justify-center font-mono text-4xl text-white">React Hooks</h1>
      <Router>
        <Switch> 
          <Route exact path="/">
            <Dash />
          </Route>
          <Route path='/reducer'>
            <UseReducerHook />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
