import React from "react";
import Title from "./components/Title";
import Header from "./components/Header";


import Tabs from "./components/TabsContainer/Tabs/Tabs";

import PageTemplate from "./components/PageTemplate/PageTemplate";
import { title } from "process";
import SignIn from "./components/SignIn/SignIn";
import Success from "./components/Success/Success";
import SelectedPost from "./components/SelectedPost/SelectedPost";



import Tabs from "./components/TabsContainer/Tabs/Tabs";
import PostList from "./components/PostList/PostList";
import PageTemplate from "./components/PageTemplate/PageTemplate";
import { title } from "process";
import SignIn from "./components/SignIn/SignIn";
import Success from "./components/Success/Success";
import SelectedPost from "./components/SelectedPost/SelectedPost";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>

      <PageTemplate title='Sign Up'>
        {/* <SignIn/> */}
        {/* <Success/> */}
        <SignUp/>
        {/* <SelectedPost/> */}
      </PageTemplate>

    </>
  );
}

export default App;
