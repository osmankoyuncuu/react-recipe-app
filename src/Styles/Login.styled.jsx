import styled from "styled-components";

const StyleLogin = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.responsive.xxlarge}) {
    background-size: 100vw 100vh;
  }
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
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 350px;
    height: 350px;
  }
`;

export const LoginIcon = styled.img`
  width: 150px;
  margin-top: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 100px;
    margin-top: 1rem;
  }
`;
export const LoginHeader = styled.h2`
  margin: 1rem;
  font-size: 2.2rem;
`;

export default StyleLogin;
