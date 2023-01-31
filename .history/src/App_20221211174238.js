import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Page from "./components/Page";
import $ from "jquery";
// import 'boxicons'


function App() {
  return (
    <Router className="App">
      <Switch>

        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
