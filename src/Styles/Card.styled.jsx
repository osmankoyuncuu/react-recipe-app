import styled from "styled-components";

const StyleCard = styled.div`
  margin-top: 0.5rem;
`;

export const CardBox = styled.div`
  background-color: ${({ theme }) => theme.color.second};
  width: 15rem;
  height: 25rem;
  border-radius: 1rem;
  color: ${({ theme }) => theme.color.fourth};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 1.1rem;
`;
export const CardHeader = styled.h3`
  text-align: center;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImg = styled.img`
  width: 200px;
  border-radius: 0.5rem;
`;

export const Button = styled.button`
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${({ theme }) => theme.color.fourth};
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.first};
  padding: 0 1rem;
  cursor: grab;
  margin-top: 1rem;
  &:hover {
    opacity: 0.82;
  }
  &:active {
    cursor: grabbing;
    transform: scale(0.98);
  }
`;

export default StyleCard;
