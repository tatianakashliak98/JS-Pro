import React from "react";
import Title from "./components/Title";
import Header from "./components/Header";
import Tabs from "./components/Tabs/Tabs";


function App() {
  return (
    <>
      <Header />
      <Title customClass="title">
        <span>Sign In</span>
      </Title>
      <Tabs />
    </>

  );
}

export default App;
