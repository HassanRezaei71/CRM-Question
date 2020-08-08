import React from "react";
import "./App.css";
import initialPollData from "./Data/initialPollData";
import { Route, Switch } from "react-router";
import routes from './Routes/routes'

function App() {
  const [pollData, setPollData] = useState(initialPollData);
  // const [answers, setAnswers] = useState([]);

  return 
  (
    <Switch pollData = {pollData}>
      {
        routes.map(route=>(
          <Route path={route.path} key={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))
      }
    </Switch>
  )
}

export default App;
