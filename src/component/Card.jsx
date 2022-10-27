import StyleCard, {
  Button,
  CardBox,
  CardHeader,
  CardImg,
} from "../Styles/Card.styled";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();
  const {
    recipe: { label, image },
  } = item;

  return (
    <StyleCard>
      <CardBox>
        <CardHeader>
          <div>{label}</div>
        </CardHeader>
        <div>
          <CardImg src={image} alt="" />
          <Button onClick={() => navigate(`/details`, { state: item })}>
            View More
          </Button>
        </div>
      </CardBox>
    </StyleCard>
  );
};

export default Card;
