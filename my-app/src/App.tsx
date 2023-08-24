import React from "react";
import Title from "./components/Title";
import Header from "./components/Header";
import Tabs from "./components/Tabs/Tabs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Title customClass="title">
        <span>Sign In</span>
      </Title>

      <Tabs />
    </div>
  );
}

export default App;
