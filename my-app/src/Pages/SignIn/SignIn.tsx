import React, { useState } from "react";

import Input from "../../components/Input/Input";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import "./SignIn.css";
import ButtonSign from "../../components/ButtonSign/ButtonSign";
import "./style.css";
import { StyledForm } from "./Styled";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { SIGN_IN } from "../../actions/action";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  const navigate = useNavigate();
  return (
    <PageTemplate title="Sign In">
      <StyledForm>
        <Input
          customClass="input__style-form"
          type="text"
          placeholder="Your Email"
          label="Email"
          value={email}
          onChange={setEmail}
        />
        <Input
          customClass="input__style-form"
          type="password"
          placeholder="Your password"
          label="Password"
          value={password}
          onChange={setPassword}
        />
        <ButtonSign
          titleButton="Sign In"
          onClick={() => dispatch(SIGN_IN(navigate, email, password))}
        />
      </StyledForm>
    </PageTemplate>
  );
};
export default SignIn;
