import styled from "styled-components";

const StyleHome = styled.div`
  width: 100vw;
  height: ${({ card }) => (card.length === 0 ? "90vh" : "100%")};
  background-color: ${({ theme }) => theme.color.third};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  font-size: 1.5rem;
  padding: 2rem 0;
`;

export const SearhBox = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  height: 2rem;
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  outline-color: gray;
  padding-left: 1rem;
  font-size: 1.1rem;
`;

export const Select = styled.select`
  padding: 0 1rem;
  font-size: 1.1rem;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 0 1rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #411d41;
  font-size: 1.1rem;
  color: whitesmoke;
  cursor: grab;
  &:hover {
    opacity: 0.92;
  }
  &:active {
    cursor: grabbing;
    transform: scale(0.98);
  }
`;
export const HomeIcon = styled.img`
  width: 500px;
  margin-top: 3rem;
  @media (max-width: ${({ theme }) => theme.responsive.medium}) {
    width: 400px;
  }
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    margin-top: 5rem;
    width: 300px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 1rem;
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    margin: 5rem 1rem 2rem;
  }
`;

export default StyleHome;
