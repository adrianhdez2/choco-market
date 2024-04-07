import { LogOut } from "lucide-react"
import { NavLink, Outlet } from "react-router-dom"

function User() {
    return (
        <section id="user_page">
            <div className="user_left">
                <div className="user_left_container_user">
                    <img className="user_left_card_img_user" src="/users/loya.png" alt="Imagen de loya" />
                    <div className="user_left_card_info_user">
                        <h4 className="user_left_card_title">antonio loya</h4>
                        <small className="user_left_card_type">Vendedor</small>
                    </div>
                </div>
                <div className="user_left_container_links">
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user"} end>Principal</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/compras"}>Mis compras</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/estadisticas"}>Mis estadisticas</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/productos"}>Mis productos</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/settings"}>Ajustes</NavLink>
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