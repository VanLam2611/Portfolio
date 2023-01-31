import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './screens/Home';
import $ from "jquery";
// import 'boxicons'


function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
