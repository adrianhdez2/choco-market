import { NavLink, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import axios from 'axios'

export default function LeftContainer() {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true

    const handleLogOut = () => {
        axios.get('http://localhost:8000/api/users/logout')
            .then(res => {
                console.log(res);
                // navigate('/login'); 
            })
            .catch(error => {
                console.log("Error en logout:", error.response ? error.response.data : error.message);
            });
    }

    return (
        <>
            <div className="user_left_container_user">
                <img className="user_left_card_img_user" src={`/users/loya.png}`} alt={`Imagen de loya}`} />
                <div className="user_left_card_info_user">
                    <h4 className="user_left_card_title">
                        antonio loya
                    </h4>
                    <small className="user_left_card_type">
                        cliente
                    </small>
                </div>
            </div>
            <div className="user_left_container_links">
                <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user"} end>Principal</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/compras"}>Mis compras</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/productos"}>Mis productos</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/settings"}>Ajustes</NavLink>
            </div>
            <div className="user_left_container_button">
                <button onClick={handleLogOut}>
                    <LogOut size={20} />
                    Cerrar sesión
                </button>
            </div>
        </>
    )
}
