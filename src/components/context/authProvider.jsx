import axios from "axios";
import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    const loginAction = async (data) => {

        axios.post("http://localhost:8000/login", data)
            .then(res => {
                setUser(res.data)
                setToken(res.data[0]?.username)
                localStorage.setItem("site", res.data[0]?.username);
                navigate("/user");
                return;
            })
            .catch(err => console.log(err))

        // try {
        //     const response = await fetch("http://localhost:8000/login", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(data),
        //     });
        //     const res = await response.json();
        //     if (res.data) {
        //         setUser(res.data.user);
        //         setToken(res.token);
        //         localStorage.setItem("site", res.token);
        //         navigate("/user");
        //         return;
        //     }
        //     throw new Error(res.message);
        // } catch (err) {
        //     console.error("Errooooooor" + err);
        // }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};