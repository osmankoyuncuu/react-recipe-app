import Card from "../../component/Card";
import StyleHome, {
  Button,
  CardContainer,
  HomeIcon,
  Input,
  SearhBox,
  Select,
} from "../../Styles/Home.styled";
import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [food, setFood] = useState("");
  const [time, setTime] = useState("breakfast");
  const [card, setCard] = useState([]);

  const getRecipe = async () => {
    const id = "307914b7";
    const api_key = "c161ae86451015c9a16d3ef7b30dfa55";
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=${id}&app_key=${api_key}&mealType=${time}`;
    await axios(url).then((res) => setCard(res.data.hits));
  };
  const handleSearch = () => {
    getRecipe();
    setFood("");
  };

  return (
    <StyleHome card={card}>
      <h2>Food App</h2>
      <SearhBox>
        <Input
          type="text"
          onChange={(e) => setFood(e.target.value)}
          value={food}
        />
        <Select name="meal" id="meal" onChange={(e) => setTime(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </Select>
        <Button onClick={handleSearch}>Search</Button>
      </SearhBox>
      {card.length === 0 && <HomeIcon src="./assets/home.svg" alt="" />}
      <CardContainer>
        {card.map((item) => (
          <Card key={item.recipe.label} item={item} />
        ))}
      </CardContainer>
    </StyleHome>
  );
};

export default Home;
