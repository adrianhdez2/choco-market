import { LogOut } from "lucide-react"
import { NavLink, Outlet } from "react-router-dom"

function User() {
    return (
        <section id="user_page">
            <div className="user_left">
                <div className="user_left_container_links">
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user"}>Principal</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/compras"}>Mis compras</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/estadisticas"}>Mis estadisticas</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/settings"}>Mis ajustes</NavLink>
                </div>
                <div className="user_left_container_button">
                    <button>
                        <LogOut size={20} />
                        Cerrar sesión
                    </button>
                </div>
            </div>
            <div className="user_right">
                <Outlet />
            </div>
        </section>
    )
}

export default User