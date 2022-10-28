import styled, { keyframes } from "styled-components";
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
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    flex-direction: column;
    height: 20vh;
  }
`;
const shake = keyframes`
0% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Header = styled.h1`
  font-size: 3rem;
  font-family: "Caveat", cursive;
  animation-name: ${shake};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;
  font-size: 1.5rem;
  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    gap: 1rem;
    font-size: 1.3rem;
    margin-top: 0.5rem;
  }
`;
export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.fourth};
`;
export const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.fourth};
`;

export default StyleNavbar;
