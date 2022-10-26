import styled from "styled-components";

const StyleLogin = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-position: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Circle = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background-color: #f5f5f59d;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const LoginIcon = styled.img`
  width: 150px;
  margin-top: 2rem;
`;
export const LoginHeader = styled.h2`
  margin: 1rem;
  font-size: 2.2rem;
`;

export default StyleLogin;
