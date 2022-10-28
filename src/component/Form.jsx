import { useState } from "react";
import StyleForm, { Button, Input } from "../Styles/Form.styled";
import { useNavigate } from "react-router-dom";

const Form = ({ setIsLogin }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    if (user.name && user.password) {
      setIsLogin(true);
      navigate("/");
    }
  };
  return (
    <StyleForm>
      <Input
        type="text"
        placeholder="Username"
        onChange={handleChange}
        value={user.name}
        name="name"
        autoFocus
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={handleChange}
        value={user.password}
        name="password"
      />
      <Button onClick={handleLogin}>Login</Button>
    </StyleForm>
  );
};

export default Form;
