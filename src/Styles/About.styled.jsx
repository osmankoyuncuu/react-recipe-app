import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: ${({ theme }) => theme.color.third};
  width: 100vw;
  min-height: 90vh;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    padding: 1rem 0;
  }

  /*align-items: center;*/
`;
export const AboutIcon = styled.img`
  width: 400px;
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 300px;
  }
`;
export const AboutBox = styled.div`
  margin-top: 2rem;
`;

export const AboutHeader = styled.h2`
  text-align: center;
  letter-spacing: 0.1rem;
  font-size: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    font-size: 1.2rem;
  }
`;

export const HeaderName = styled.span`
  font-size: 3rem;
  font-family: "Freehand", cursive;
  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    font-size: 2rem;
  }
`;

export const AboutContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1rem;
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme.color.fourth};
  padding: 2rem;
  border-radius: 1rem;
  letter-spacing: 0.1rem;
  width: 55rem;
  @media (max-width: ${({ theme }) => theme.responsive.large}) {
    width: 45rem;
    align-items: center;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: 34rem;
    font-size: 1.2rem;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 22rem;
    font-size: 1.1rem;
    margin: auto;
  }
`;

export default StyledAbout;
