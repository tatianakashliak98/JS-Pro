import React, { useEffect } from "react";
import Post from "../../components/Post/Post";
import "./style.css";
import {
  useNavigate,
} from "react-router-dom";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import TabsContainer from "../TabsContainer/TabsContainer";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_POSTS } from "../../actions/action";

export interface IPost {
  image?: string;
  text?: string;
  date?: string;
  lesson_num?: number;
  title: string;
  author?: number;
  description?: string;
  id?: number;
  customClass?: string;
  likes?: number;
  isFavorite?: boolean;
  onClick?: () => void;
}

const PostList = () => {
  // const [posts, setPosts] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const posts = useSelector(({ posts }) => posts);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-expect-error
    if (!posts.length) dispatch(FETCH_POSTS());
  }, []);

  return (
    <PageTemplate title="Blog">
      <TabsContainer customClassAll="tab_container-active"/>
      <div className="posts__container">
        <div className="posts-container__left">
          {Array.isArray(posts) &&
            posts.map(({ id, date, title, description, image,
              likes
            }) =>
              id < 8 && id > 1 ? (
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
              ) : (
                ""
              )
            )}
        </div>
        <div className="posts-container__right">
          {Array.isArray(posts) &&
            posts.map(({ id, date, title, description, image,
              likes
            }) =>
              id > 8 ? (
                <Post
                  customClass="post-container__right"
                  key={id}
                  id={id}
                  date={date}
                  title={title}
                  description={description}
                  image={image}
                  likes={likes}
                />
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </PageTemplate>
  );
};

export default PostList;
{
  /* <>{
        Array.isArray(posts) && posts.map(({ id, date, title, description, image }) => id === 1 ?
          <PostBig onClick={() => navigate(`/postList/${{id}}`)}key={id} id={id} date={date} title={title} description={description} image={image} /> : '')

      }
      </>
      <div className='posts__container-middle'>{
        Array.isArray(posts) && posts.map(({ id, date, title, image }) => (id <= 5 && id > 1) ?
          <PostMiddle onClick={() => navigate(`/postList/${{id}}`)}key={id} id={id} date={date} title={title} image={image} /> : '')
      }
      </div>
      <div className='posts__container-smoll'>{
        Array.isArray(posts) && posts.map(({ id, date, title, image }) => (id >= 6) ?
          <PostSmoll onClick={() => navigate(`/postList/${{id}}`)}key={id} id={id} date={date} title={title} image={image} /> : '')
      }
      </div> */
}
{
  /* {
        Array.isArray(posts) && posts.map(({ id, date, title, description, image }) => id != 0 ?
        <li onClick={() => navigate(`/posts/${id}`,{state: {id,image,title,description,date,posts}})} id={`${id}`} className='post__container-big'>
        {image ? <img className='post-big__img' src={image} alt="img" /> : ""}
        <div className='post__date'>{date}</div>
        <h2 className='post__title-big'>{title}</h2>
        <div className='post__text-big'>{description}</div>

     </li> : '')

      } */
}
