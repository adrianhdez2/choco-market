import axios from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const [error, setError] = useState(""); // Estado para manejar errores
    const navigate = useNavigate();

    const loginAction = async (data) => {
        try {
            const res = await axios.post("http://localhost:8000/login", data);
            setUser(res.data[0]); 
            setToken(res.data[0]?.token); 
            localStorage.setItem("site", res.data.token);
            navigate("/user");
            window.location.reload();
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.error || "Error de inicio de sesión");
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
        window.location.reload();
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
