import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyleNavbar = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.color.first};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  color: ${({ theme }) => theme.color.fourth};
`;
export const Header = styled.h1`
  font-size: 2rem;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
`;
export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.fourth};
  font-weight: ${({ isActive }) => isActive && "700"};
`;

export default StyleNavbar;
