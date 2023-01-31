import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import Page from "./components/Page";
import $ from "jquery";
// import 'boxicons'


function App() {
  return (
    <Router className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Home/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
