import React from "react";
import StyleDetails, {
  DetailsBox,
  DetailsHeader,
  DetailsIcon,
  DetailsImg,
  Nutrients,
} from "../../Styles/Detail.styled";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [details, setDetails] = useState("");
  const { state: item } = useLocation();
  const getRecipe = async () => {
    const url = item._links.self.href;
    await axios(url).then((res) => setDetails(res.data.recipe));
  };
  useEffect(() => {
    getRecipe();
  }, []);
  console.log(details.totalNutrients.CA.quantity);
  const { label, image, totalNutrients, calories } = details;
  return (
    <StyleDetails>
      <DetailsHeader>
        <h2>{label}</h2>
        <DetailsIcon src="./assets/diet.svg" alt="" />
      </DetailsHeader>
      <DetailsBox>
        <Nutrients>
          <p>Nutrients</p>
          <p>
            Calcium: {Math.round(totalNutrients.CA.quantity)}
            <small>{totalNutrients.CA.unit}</small>
          </p>
          <p>
            Carbs: {Math.round(totalNutrients.CHOCDF.quantity)}
            <small>{totalNutrients.CHOCDF.unit}</small>
          </p>
          <p>
            Cholesterol: {Math.round(totalNutrients.CHOLE.quantity)}
            <small>{totalNutrients.CHOLE.unit}</small>
          </p>
          <p>
            Energy: {Math.round(totalNutrients.ENERC_KCAL.quantity)}
            <small>{totalNutrients.ENERC_KCAL.unit}</small>
          </p>
          <p>Calories: {Math.round(calories)}</p>
          <p>
            Fat: {Math.round(totalNutrients.FAT.quantity)}
            <small>{totalNutrients.FAT.unit}</small>
          </p>
          <p>
            Protein: {Math.round(totalNutrients.PROCNT.quantity)}
            <small>{totalNutrients.PROCNT.unit}</small>
          </p>
        </Nutrients>
        <DetailsImg src={image} alt="" />
        <div>tarif</div>
      </DetailsBox>
    </StyleDetails>
  );
};

export default Details;
