import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/GlobalStyles";
import AppRouter from "./router/AppRouter";

const style = {
  color: {},
};
const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
