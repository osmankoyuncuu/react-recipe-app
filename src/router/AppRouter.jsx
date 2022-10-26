import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import PrivateRouter from "./PrivateRouter";
import { useState } from "react";

const AppRouter = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateRouter isLogin={isLogin} />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
