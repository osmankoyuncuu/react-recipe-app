import StyleNavbar, { Header, NavbarLink, Ul } from "../Styles/Navbar.styled";

const Navbar = () => {
  return (
    <StyleNavbar>
      <Header>Osman</Header>
      <Ul>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/github">Github</NavbarLink>
        <NavbarLink to="/login">Logout</NavbarLink>
      </Ul>
    </StyleNavbar>
  );
};

export default Navbar;
