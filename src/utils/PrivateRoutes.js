import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const user = localStorage.getItem("token");
  // let auth = {'token':false}
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
