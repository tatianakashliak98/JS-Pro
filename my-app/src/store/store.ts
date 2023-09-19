import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  count: 0,
  theme: "light",
  modalInfo: {
    isOpen: false,
    id: null,
  },
  user: {
    username: "",
    email: "",
    id: null,
    isActivated: false,
  },
  posts: [],
  myPosts: [],
  pagePost:{},
  isLoading: false,
};
const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "TOGGLE_MODAL": {
      return {
        ...state,
        modalInfo: { isOpen: !state.modalInfo.isOpen, id: action.payload },
      };
    }
    case "SET_POSTS": {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case "SET_MY_POSTS": {
      return {
        ...state,
        myPosts: action.payload,
      };
    }
    case "SET_PAGE_POST": {
      return {
        ...state,
        pagePost: {
          ...action.payload
        }
      };
    }
    case "SET_USERNAME": {
      return {
        ...state,
        userName: action.payload,
      };
    }
    case "ADD_LIKE": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; likes: number }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              likes: post.likes !== undefined ? post.likes + 1 : 1,
            };
            return post;
          }
          return post;
        }),
      };
    }
    case "REMOVE_LIKE": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; likes: number }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              likes:
                post.likes !== undefined && post.likes > 0 ? post.likes - 1 : 0,
            };
            return post;
          }
          return post;
        }),
      };
    }
    case "ADD_IS_FAVORITE": {
      return {
        ...state,
        posts: state.posts.map((post: { id: number; isFavorite: boolean }) => {
          if (post.id === action.payload) {
            post = {
              ...post,
              isFavorite:
                post.isFavorite !== undefined ? false : true ,
            };
            return post;
          }
          return post;
        }),
      };
    }
    case "SET_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "SET_ACTIVATION": {
      return {
        ...state,
        user: { ...state.user, isActivated: true },
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
