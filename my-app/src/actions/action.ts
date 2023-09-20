import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig";

export const INCREMENT_CREATOR = (payload: number) => ({
  type: "INCREMENT",
  payload,
});
export interface IUser {
  username: string;
  email: string;
  password: string;
}

export const FETCH_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      // let response = await fetch(
      //   "https://studapi.teachmeskills.by/blog/posts/?limit=12"
      // );
      instance.get('/blog/posts/?limit=12')
        .then((data) => {
          console.log(data);
          let posts = data.data.results
          dispatch({ type: "SET_POSTS", payload: posts });
      return posts;
      })
      // let jsonPosts = await response.json();
      // let posts = jsonPosts.results;
      
     
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};
export const ADD_PAGEPOST = (id: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
      dispatch({ type: "SET_LOADING" });

      try {
          let response = await fetch(
              `https://studapi.teachmeskills.by/blog/posts/${id}/`
          )
          let jsonPagePost = await response.json();
        let pagePost = jsonPagePost.results;
        dispatch({ type: "SET_PAGE_POST", payload: jsonPagePost });
        return pagePost
      } catch (err) {
          console.log(err);
      } finally {
          dispatch({ type: "SET_LOADING" });
      }
  };
};
export const FETCH_MY_POSTS = () => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const token = localStorage.getItem('access')
      let response = await fetch(
        "https://studapi.teachmeskills.by/blog/posts/my_posts/",
        {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      }
      );
      let jsonMyPosts = await response.json();
      let MyPosts = jsonMyPosts.results;
      dispatch({ type: "SET_MY_POSTS", payload: MyPosts });
      return MyPosts;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const CREATE_USER = (payload: IUser) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/",
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let jsonUser = await response.json();
      let user = jsonUser.results;
      dispatch({ type: "SET_USER", payload: jsonUser });
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};

export const ACTIVATE_USER = (navigate: any, uid: string, token: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    const activateUser = async () => {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/users/activation/",
        {
          method: "POST",
          body: JSON.stringify({ uid, token }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(() => {
          dispatch({ type: "SET_ACTIVATION" });
          navigate("/success");
        })
        .finally(() => {
          dispatch({ type: "SET_LOADING" });
        });
    };
    activateUser();
  };
};

export const SIGN_IN = (navigate: any, email: string, password: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch({ type: "SET_LOADING" });

    try {
      let response = await fetch(
        "https://studapi.teachmeskills.by/auth/jwt/create/",
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((data) => data.json())
        .then(({ access, refresh }) => {
          if (access) {
            navigate("/posts");
            localStorage.setItem("access", access);
            localStorage.setItem("refresh", refresh);
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "SET_LOADING" });
    }
  };
};
