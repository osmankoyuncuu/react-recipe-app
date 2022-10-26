import StyleForm, { Button, Input } from "../Styles/Form.styled";

const Form = () => {
  return (
    <StyleForm>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </StyleForm>
  );
};

export default Form;
