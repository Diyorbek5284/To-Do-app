import React, { useState } from "react";
import "./App.css";
import Card from "./Card";
import refresh from "./refresh.png";
import moon from "./moon.png";
import Quyosh from "./thesoon.png";
import logoT from "./logoT2.png";
import logoT1 from "./logoT1.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Card image={refresh} />
        <Card image={moon} />
        <Card image={Quyosh} />
        <Card image={logoT} />
        <Card image={logoT1} />
      </div>
    </div>
  );
}

export default App;
