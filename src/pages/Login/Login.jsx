import StyleLogin, {
  Circle,
  LoginHeader,
  LoginIcon,
} from "../../Styles/Login.styled";
//import { useState } from "react";
import Form from "../../component/Form";

const Login = () => {
  return (
    <StyleLogin>
      <Circle>
        <LoginIcon src="./assets/meal2.svg" alt="" />
        <LoginHeader>Welcome</LoginHeader>
        <Form />
      </Circle>
    </StyleLogin>
  );
};

export default Login;
