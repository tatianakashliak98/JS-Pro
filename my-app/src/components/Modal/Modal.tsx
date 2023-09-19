import React from "react";
import { StyledModal, StyledModalContainer } from "./Styled";
import { useDispatch, useSelector } from "react-redux";
import { IPost } from "../../Pages/PostList/PostList";
import Post from "../Post/Post";
import { useLocation } from "react-router-dom";

const Modal = () => {
  const { state } = useLocation();
  const modalInfo = useSelector(({ modalInfo }) => modalInfo);
  // const posts = useSelector(({ posts }) => posts);
  const pagePost = useSelector(({ pagePost }) => pagePost);
  const dispatch = useDispatch();

  return (
    <StyledModalContainer
      onClick={() => dispatch({ type: "TOGGLE_MODAL", isOpen: false })}
    >
      <StyledModal>
        {/* {pagePost
          // .filter((post: IPost) => post.id === modalInfo.id)
          .map(({ id, image, title }: IPost) => (
            
          ))} */}
        <Post
              customClass="post-container__selected"
              id={pagePost.id}
              image={pagePost.image}
              title={pagePost.title}
            ></Post>
      </StyledModal>
    </StyledModalContainer>
  );
};

export default Modal;
