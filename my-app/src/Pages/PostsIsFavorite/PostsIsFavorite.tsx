import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import TabsContainer from "../TabsContainer/TabsContainer";
import Post from "../../components/Post/Post";

const PostsIsFavorite = () => {
  const navigate = useNavigate();
  const posts = useSelector(({ posts }) => posts);
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-expect-error
    if (!posts.length) dispatch(FETCH_POSTS());
  }, []);
  return (
    <PageTemplate title="Blog">
      <TabsContainer customClassFavorite="tab_container-active" />
      <div className="posts-container__left">
        {Array.isArray(posts) &&
          posts.map(
            ({ id, date, title, description, image, likes, isFavorite }) =>
              isFavorite === true && (
                <Post
                  customClass="post-container__left"
                  key={id}
                  id={id}
                  date={date}
                  title={title}
                  description={description}
                  image={image}
                  likes={likes}
                />
              )
          )}
      </div>
    </PageTemplate>
  );
};

export default PostsIsFavorite;
