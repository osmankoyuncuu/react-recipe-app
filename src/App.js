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
};
const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      {isLogin && <Navbar />}
      <AppRouter isLogin={isLogin} setIsLogin={setIsLogin} />
    </ThemeProvider>
  );
};

export default App;
