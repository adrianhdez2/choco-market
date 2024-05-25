import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

const PrivateRoutesLS = () => {
  const user = useAuth();
  if (user.token) return <Navigate to="/user" />;
  return <Outlet />;
};

export default PrivateRoutesLS;