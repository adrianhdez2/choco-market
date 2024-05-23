import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/context/authProvider";

const PrivateRoutesLS = () => {
  const user = useAuth();
  if (user.token) return <Navigate to="/user" />;
  return <Outlet />;
};

export default PrivateRoutesLS;