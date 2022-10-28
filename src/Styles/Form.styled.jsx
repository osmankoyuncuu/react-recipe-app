import styled from "styled-components";

const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin-top: 1rem;
  @media (max-width: ${({ theme }) => theme.responsive.small}) {
    width: 10rem;
      margin-top: 0;
  
`;

export const Input = styled.input`
  margin: 0.5rem 0;
  height: 2rem;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  outline-color: gray;
  padding-left: 1rem;
  font-size: 1.2rem;
`;
export const Button = styled.button`
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.color.first};
  font-size: 1.1rem;
  color: whitesmoke;
  margin-top: 0.5rem;
  cursor: grab;
  &:hover {
    opacity: 0.92;
  }
  &:active {
    cursor: grabbing;
    transform: scale(0.98);
  }
`;

export default StyleForm;
