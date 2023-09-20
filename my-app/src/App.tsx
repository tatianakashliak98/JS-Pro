import PostList from "./Pages/PostList/PostList";
import SignIn from "./Pages/SignIn/SignIn";
import Success from "./Pages/Success/Success";
import SelectedPost from "./Pages/SelectedPost/SelectedPost";
import SignUp from "./Pages/SignUp/SignUp";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import SearchPage from "./components/SearchPage/SearchPage";

import ActivateUser from "./components/ActivateUser/ActivateUser";
import { decodeJwt, expToMinutes, updateAccessToken } from "./helpers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import PostsIsFavorite from "./Pages/PostsIsFavorite/PostsIsFavorite";
import MyPosts from "./Pages/MyPosts/MyPosts";
import PagePost from "./Pages/PagePost/PagePost";

function NotFound() {
  return <h1>Page Not found</h1>;
}
function App() {
  const token = localStorage.getItem("access");
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  let expTimestampInSeconds = 0;
  if (token) {
    const decodedToken = decodeJwt(token);
    expTimestampInSeconds = decodedToken.payload.exp;
  }

  let remainingMinutes = expToMinutes(expTimestampInSeconds);
  // console.log(remainingMinutes);

  const startTokenRefreshTimer = () => {
    if (!token) {
      return null
    }
    const expirationTimestamp = decodeJwt(token).payload.exp;
    const currentTime = Date.now();
    const timeUntilExpiration = expirationTimestamp *1000 - currentTime;
 
    if ((timeUntilExpiration) > 20000) {
      setInterval(updateAccessToken,
        timeUntilExpiration - 20000
      );
    } else {
      localStorage.removeItem('access')
    }
    }
    
  useEffect(() => {
    startTokenRefreshTimer();
    window.addEventListener('storage', (event) => {
      console.log(event)
      if (event.key === 'access' && event.newValue === null) {
        navigate('/signIn')
      }
    })
  },[])

  return (
    <>
      <Routes>
        {!token && (
          <>
            <Route
              path="/actived/:uid/:token"
              element={<ActivateUser />}
            ></Route>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/success" element={<Success />} />
          </>
        )}

        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/postsIsFavorine" element={<PostsIsFavorite />}></Route>
        <Route path="/MyPosts" element={<MyPosts />}></Route>
        <Route path="/posts/:id" element={<PagePost />}></Route>
        <Route path="/posts/:id" element={<SelectedPost />}></Route>

        <Route path="/searchPage" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/posts" />} />
      </Routes>
    </>
  );
}

export default App;
