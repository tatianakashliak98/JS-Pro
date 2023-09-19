import React, { useState, FC } from "react";
import { IPost } from "../../Pages/PostList/PostList";
import "./style.css";
import {
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useLocation,
  useParams,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Post: FC<IPost> = ({
  title,
  date,
  image,
  description,
  id,
  onClick,
  customClass,
  likes,
  isFavorite,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <li className={customClass}>
      {image && (
        <img
          // onClick={() =>
          //   navigate(`/posts/${id}`, {
          //      state: {
          //         id, image, title, description, date,
          //         likes,isFavorite
          //      },
          //   })
          // }
          onClick={()=>navigate(`/posts/${id}`)}
          className="post__img"
          src={image}
          alt="img"
        />
      )}
      <div className="post__date">{date}</div>
      <h2 className="post__title">{title}</h2>
      <div className="post__text">{description}</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => dispatch({ type: "ADD_LIKE", payload: id })}>
          👍
        </button>
        {likes || 0}
        <span></span>
        <button onClick={() => dispatch({ type: "REMOVE_LIKE", payload: id })}>
          👎
        </button>
        <button onClick={() => dispatch({ type: "ADD_IS_FAVORITE", payload: id })}>🔖</button>
      </div>
    </li>
  );
};

export default Post;
