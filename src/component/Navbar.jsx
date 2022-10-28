import StyleNavbar, {
  A,
  Header,
  NavbarLink,
  Ul,
} from "../Styles/Navbar.styled";

const Navbar = ({ setIsLogin, setCard }) => {
  return (
    <StyleNavbar>
      <Header>Recipe</Header>
      <Ul>
        <NavbarLink to="/" onClick={() => setCard([])}>
          Home
        </NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <A href="https://github.com/osmankoyuncuu" target="_blank">
          Github
        </A>
        <NavbarLink to="/login" onClick={() => setIsLogin(false)}>
          Logout
        </NavbarLink>
      </Ul>
    </StyleNavbar>
  );
};

export default Navbar;
