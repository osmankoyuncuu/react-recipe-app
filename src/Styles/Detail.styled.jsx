import styled from "styled-components";

const StyleDetails = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: ${({ theme }) => theme.color.fourth};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  font-size: 1.5rem;
  padding: 2rem 0;
`;
export const DetailsIcon = styled.img`
  width: 250px;
`;
export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60rem;
  text-align: center;
  gap: 3rem;
`;

export const DetailsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 28rem);
  grid-template-rows: 24rem;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  background-color: ${({ theme }) => theme.color.third};
  border: 2px solid ${({ theme }) => theme.color.third};
  border-radius: 2rem;
  overflow: auto;
`;
export const DetailsImg = styled.img`
  width: 390px;
  border-radius: 0.5rem;
`;

export const Nutrients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  margin: auto;
  letter-spacing: 1px;
`;

export const Ingredient = styled.div`
  /*margin: 3rem;*/
  width: 100%;
  margin: auto;
`;

export const IngredientLi = styled.li`
  margin-top: 0.5rem;
  list-style-type: circle;
`;
export default StyleDetails;
