import React from "react";
import Title from "./components/Title";
import Header from "./components/Header";
import Tabs from "./components/TabsContainer/Tabs/Tabs";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <>
      <Header></Header>
      {/* <Title customClass="title">
        <span>Sign In</span>
      </Title>
      <Tabs /> */}
      <PostList />
    </>
  );
}

export default App;
