import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/GlobalStyles";
import AppRouter from "./router/AppRouter";
import Navbar from "./component/Navbar";
import { useState } from "react";

const style = {
  color: {
    first: "#251B37",
    second: "#372948",
    third: "#FFCACA",
    fourth: "#FFECEF",
  },
  responsive: {
    small: "576px",
    medium: "768px",
    large: "992px",
    xlarge: "1200px",
    xxlarge: "1400px",
  },
};
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [card, setCard] = useState([]);

  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      {isLogin && <Navbar setIsLogin={setIsLogin} setCard={setCard} />}
      <AppRouter
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        card={card}
        setCard={setCard}
      />
    </ThemeProvider>
  );
};

export default App;
