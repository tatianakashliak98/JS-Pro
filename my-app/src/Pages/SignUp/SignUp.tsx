import React, { useState } from "react";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import Input from "../../components/Input/Input";
import ButtonSign from "../../components/ButtonSign/ButtonSign";
import { StyledForm } from "../SignIn/Styled";
import "./style.css";
import { useDispatch } from "react-redux";
import { CREATE_USER } from "../../actions/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

const SignUp = () => {
  const [isSignUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, SetconfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  return (
    
    <PageTemplate title="Sign Up">
      <StyledForm>
        <Input
          customClass="input__style-form"
          type="text"
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={setName}
        />
        <Input
          customClass="input__style-form"
          type="text"
          label="Email"
          placeholder="Your Email"
          value={email}
          onChange={setEmail}
        />
        <Input
          customClass="input__style-form"
          type="password"
          label="Password"
          placeholder="Your Password"
          value={password}
          onChange={setPassword}
        />
        <Input
          customClass="input__style-form"
          type="password"
          label="Confirm password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={SetconfirmPassword}
        />
        <ButtonSign
          titleButton="Sign Up"
          onClick={() => dispatch(CREATE_USER({username:name,password,email }))}
        />
      </StyledForm>
    </PageTemplate>
  );
};

export default SignUp;
