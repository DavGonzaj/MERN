import { Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NumOrWord from "./components/Numbers";
import Welcome from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" element={<Welcome />} />
        <NumOrWord path="/:input" />
        <NumOrWord path="/:input/:textColor/:bgColor" />
      </Router>
    </div>
  );
}

export default App;
