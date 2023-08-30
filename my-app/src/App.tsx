import React from "react";
import Title from "./components/Title";
import Header from "./components/Header";
import Tabs from "./components/TabsContainer/Tabs/Tabs";
import PostList from "./components/PostList/PostList";
import PageTemplate from "./components/PageTemplate/PageTemplate";
import { title } from "process";
import SignIn from "./components/SignIn/SignIn";
import Success from "./components/Success/Success";
import SelectedPost from "./components/SelectedPost/SelectedPost";

function App() {
  return (
    <>
      <PageTemplate title=''>
        {/* <SignIn/> */}
        {/* <Success/> */}
        <SelectedPost/>
      </PageTemplate>
    </>
  );
}

export default App;
