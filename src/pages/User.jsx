import { Outlet } from "react-router-dom"
import LeftContainer from "../components/user/home/LeftContainer"

function User() {
    return (
        <section id="user_page">
            <div className="user_left">
                <LeftContainer/>
            </div>
            <div className="user_right">
                <Outlet />
            </div>
        </section>
    )
}

export default User
