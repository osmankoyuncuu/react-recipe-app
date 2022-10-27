import styled from "styled-components";

const StyledAbout = styled.div`
  background-color: ${({ theme }) => theme.color.third};
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
  /*align-items: center;*/
`;
export const AboutIcon = styled.img`
  width: 400px;
`;

export const AboutHeader = styled.h2`
  text-align: center;
  letter-spacing: 0.1rem;
`;

export const HeaderName = styled.span`
  font-size: 2rem;
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
`;
export const AboutBox = styled.div`
  margin-top: 2rem;
`;

export default StyledAbout;
