import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import PrivateRouter from "./PrivateRouter";
import { useState } from "react";
import About from "../pages/About/About";
import Details from "../pages/Details/Details";

const AppRouter = ({ isLogin, setIsLogin, card, setCard }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRouter isLogin={isLogin} />}>
          <Route
            index
            element={
              <Home
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                card={card}
                setCard={setCard}
              />
            }
          />
        </Route>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/details"
          element={
            <Details isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
      </Routes>
    </>
  );
};

export default AppRouter;
