import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Appoinment2 from "./Components/Appoinment2/Appoinment2";
import Home from "./Components/Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/appoinment2">
            <Appoinment2></Appoinment2>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
