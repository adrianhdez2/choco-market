import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PublicRoutes = ({ element }) => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/users/verify")
            .then(res => {
                if (res.data.status) {
                    navigate('/user');
                }
            })
            .catch(error => console.log("Error verifying user:", error.response ? error.response.data : error.message));
    }, [navigate]);

    return element;
};
