import { useContext } from "react";
import { AuthContext } from "../components/context/authProvider";

export const useAuth = () => {
    return useContext(AuthContext);
};