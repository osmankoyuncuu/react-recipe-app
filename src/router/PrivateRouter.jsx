import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = ({ isLogin }) => {
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
