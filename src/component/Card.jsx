import StyleCard, {
  Button,
  CardBox,
  CardHeader,
  CardImg,
} from "../Styles/Card.styled";
import { useNavigate } from "react-router-dom";

const Card = ({ item, isLoading, setIsLoading }) => {
  const navigate = useNavigate();
  const {
    recipe: { label, image },
  } = item;

  const handleDetails = () => {
    setIsLoading(true);
    return navigate(`/details`, { state: item });
  };

  return (
    <StyleCard>
      <CardBox>
        <CardHeader>
          <div>{label}</div>
        </CardHeader>
        <div>
          <CardImg src={image} alt="" />
          <Button onClick={() => handleDetails()}>View More</Button>
        </div>
      </CardBox>
    </StyleCard>
  );
};

export default Card;
