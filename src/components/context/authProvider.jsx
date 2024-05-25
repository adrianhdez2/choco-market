import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            try {
                const storedToken = await localforage.getItem("token");
                if (storedToken) {
                    setToken(storedToken);
                }
            } catch (error) {
                console.error("Failed to retrieve user from localForage", error);
            }
        };
        loadUser();
    }, []);

    const loginAction = async (data) => {
        try {
            setLoading(true);
            const res = await axios.post("http://localhost:8000/api/users/login", data);
            setToken(res.data.token);
            await localforage.setItem("token", res.data.token);
            navigate("/user");
            setLoading(false);
        } catch (err) {
            setError(err.response?.data?.error || "Error de inicio de sesión");
            setLoading(false);
        }
    };

    const logOut = async () => {
        setToken("");
        await localforage.removeItem("token");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, loginAction, logOut, error, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
