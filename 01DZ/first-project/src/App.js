import React from "react";
import "./App.css";
import Car from "./items/Car/Car";
import Name from "./items/Name/Name";
import Dates from "./Date/Date";

function App() {
  return (
    <div className="App">
      <div>test</div>
      <Name />
      <Car />
      <Dates />
    </div>
  );
}

export default App;
