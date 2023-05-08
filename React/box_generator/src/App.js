import react, { useState } from "react";
import "./App.css";
import NewBox from "./components/NewBox";
import BoxDisplay from "./components/boxDisplay";

function App() {
  const [currentColor, setCurrentColor] = useState([]);

  const sendColor = (color) => {
    setCurrentColor([...currentColor, color]);
  };

  return (
    <div className="App">
      <NewBox onSend={sendColor} />
      <BoxDisplay color={currentColor} />
    </div>
  );
}

export default App;
