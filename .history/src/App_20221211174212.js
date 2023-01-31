import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Page from "./components/Page";
import $ from "jquery";
// import 'boxicons'


function App() {
  return (
    <Router className="App">
      <Route
        exact
        path="/"
        render={() => (
          <Page>
            <Home />
          </Page>
        )}
      />
    </Router>
  );
}

export default App;
