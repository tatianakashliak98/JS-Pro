import React, { createContext, useState } from "react";
import Title from "./components/Title";
import Header from "./components/Header";

import Tabs from "./Pages/TabsContainer/Tabs/Tabs";
import PostList from "./Pages/PostList/PostList";

import PageTemplate from "./components/PageTemplate/PageTemplate";
import { title } from "process";
import SignIn from "./Pages/SignIn/SignIn";
import Success from "./Pages/Success/Success";
import SelectedPost from "./Pages/SelectedPost/SelectedPost";
import SignUp from "./Pages/SignUp/SignUp";
import { Routes, Route, Link, NavLink, useNavigate, useLocation, useParams, Navigate } from "react-router-dom";
import { NOTFOUND } from "dns";
import SearchPage from "./components/SearchPage/SearchPage";

// interface IThemeContex {
//   theme: "light" | "dark",
//   toggleTheme: () => void,
// }

// export const ThemeContext = createContext<IThemeContex>({ theme: "light", toggleTheme: () => { } });

// const Users = () => {
//   const location = useLocation();
//   console.log(location)
//   return (
//     <>
//       <span>Users page</span>
//       <ul>
//         <NavLink to="/user/1" state={{name:'John'}}>John</NavLink>
//         <br />
//         <NavLink to="/user/2" state={{name:'Mark'}}>Mark</NavLink>
//         <br />
//         <NavLink to="/user/3" state={{name:'Max'}}>Max</NavLink>
//       </ul>
//     </>
//   )

// }

// const User = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const params = useParams();
//   console.log(params)
//   return (

//     <span onClick={()=>navigate(-1)}>Specefic user { state.name}</span>
//   )
// }

// const Posts = () => {
//   return (

//     <span>Posts page</span>
//   )
// }
// const PrivateRoute = ({ component: Component, isAuthenticated }) => (
//   <Route
//     element={(props) => (
//     isAuthenticated === true
//       ? <Component {...props} />
//       : <Navigate to ='/login'/>
//   )}/>
// )
function NotFound() {
  return <h1>Page Not found</h1>
}
function App() {
  // const [theme, setTheme] = useState<"light" | "dark">('light');
  // const toggleTheme = () => {
  //   setTheme(theme === "dark" ? "light" : 'dark')
  // }
  // const navigate = useNavigate();
  // const isAuthenticated === true;
  const location = useLocation();
  return (
    // <ThemeContext.Provider value={{theme,toggleTheme}}>
    // <>
    // <PageTemplate title=''>
    //     {/* <SignIn/> */}
    //     {/* <Success/> */}
    //     {/* <SignUp/> */}
    //     {/* <SelectedPost/> */}
    //     <PostList/>
    //   </PageTemplate>
    // </>
    // <>
    //   <SearchPage/>
    // </>
    <>

      <Routes>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<SelectedPost />}></Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/success" element={<Success />} />
        <Route path="/searchPage" element={<SearchPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Navigate to='posts' /> */}
      {/* {location.pathname === '/' && <Navigate to='posts'/>} */}
</>
   
  );
}

export default App
 {/* </ThemeContext.Provider>   */}
    {/* // <>
    //   <div>
    //     <button onClick={() => navigate('/users', { state: { someDate: 'passed from props' } })}>go to users</button>
    //     <br />
    //     <Link to='/posts'> Posts link</Link>
    //   </div>
      // <Routes>
      //   <Route path="/users" element={<Users />} />
      //   <Route path="/user/:id" element={<User />} />
      //   <Route path="/posts" element={<Posts />} />
      //   <PrivateRoute/>
      // </Routes>
    // </> */}