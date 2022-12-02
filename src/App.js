import "./App.css";
import React, { useState } from "react";
import data from "./data";
import List from "./components/List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="container">
      <h2>{people.length} birthdays today</h2>
      <List people={people} />
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
}

export default App;
