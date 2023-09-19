import React, { ReactNode, useState, FC, useEffect } from "react";

import "./style.css";
import BurgerMenu from "../BurgerMenu";
import { StyledBurgerComponent, StyledBurgerComponentUser } from "./Styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const userName = useSelector(({ user }) => user);
  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/signIn");
  };
  useEffect(() => {
    let token = localStorage.getItem("access");
    let response = fetch("https://studapi.teachmeskills.by/auth/users/me/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      response.json().then((userName) => {
        dispatch({ type: "SET_USER", payload: userName });
      });
    });
  }, []);
  return (
    <div className="header__wrapper">
      <BurgerMenu
        customClass="burger"
        text={isOpen ? "x" : "☰"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`user burger__opened ${isOpen ? "visible" : ""}`}>
          <StyledBurgerComponentUser>
            <span className="user__icon">AM</span>
            {userName.username}
          </StyledBurgerComponentUser>
          <StyledBurgerComponent onClick={() => navigate("/posts")}>
            {" "}
            Home{" "}
          </StyledBurgerComponent>
          <StyledBurgerComponent onClick={() => navigate("/posts")}>
            {" "}
            Add post{" "}
          </StyledBurgerComponent>
          <StyledBurgerComponent onClick={() => navigate("/signUp")}>
            {" "}
            Sign Up{" "}
          </StyledBurgerComponent>
          <StyledBurgerComponent onClick={logOut}>
            {" "}
            Log Out{" "}
          </StyledBurgerComponent>
          <StyledBurgerComponent
            onClick={() => dispatch({ type: "TOGGLE_THEME", payload: "light" })}
          >
            {" "}
            Light{" "}
          </StyledBurgerComponent>
          <StyledBurgerComponent
            onClick={() => dispatch({ type: "TOGGLE_THEME", payload: "dark" })}
          >
            {" "}
            Dark{" "}
          </StyledBurgerComponent>
        </div>
      </BurgerMenu>
      <div className="header__search">
      </div>
      <button
        className="header__button-search"
        onClick={() => navigate("/searchPage")}
      >
        &#128269;
      </button>
      <div className="user">
        {" "}
        <span className="user__icon">AM</span> {userName.username}
      </div>
    </div>
  );
};

export default Header;
