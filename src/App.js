import React from "react";
import "./App.css";
import BabyNames from "./data.json";
import SearchNames from "./Names";

function App() {
  let bbyNames = BabyNames.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="App">
      <SearchNames names={bbyNames} />
    </div>
  );
}

export default App;
