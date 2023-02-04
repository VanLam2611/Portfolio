import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Page from "./components/Page";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Page>
              <Home />
            </Page>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <Page>
              <About />
            </Page>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
