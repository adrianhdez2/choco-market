import axios from "axios"
import { Outlet, useNavigate } from "react-router-dom"
import LeftContainer from "../components/user/home/LeftContainer"
import { useEffect } from "react"

const User = () => {
    // const navigate = useNavigate()
    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/verify")
            .then(res => {
                // console.log(res);
            })
            .catch(error => {
                console.log("Error verifying user:", error.response ? error.response.data : error.message);
            });
    }, []);

    return (
        <section id="user_page">
            <div className="user_left">
                <LeftContainer />
            </div>
            <div className="user_right">
                <Outlet />
            </div>
        </section>
    )
}

export default User
