import { NavLink, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function LeftContainer() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true

    const handleLogOut = () => {
        axios.post('http://localhost:3001/auth/logout')
            .then(res => {
                if (res.data?.status) navigate('/login');
            })
            .catch(error => {
                console.log("Error en logout:", error.response ? error.response.data : error.message);
            });
    }

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:3001/users/verify')
            .then(res => {
                if (res.data.status) {
                    axios.post('http://localhost:3001/users/user', {status: res.data.status})
                        .then(res => {
                            setData(res.data)
                            setLoading(false)
                        })
                        .catch(error => {
                            console.log("Error obtener los datos de usuario:", error.response ? error.response.data : error.message);
                            setLoading(false)
                        });
                }
            })
            .catch(error => {
                console.log("Error en la verficación de usuario: ", error.response ? error.response.data : error.message);
                setLoading(false)
            });
    }, [])

    return (
        <>
            <div className="user_left_container_user">
                {
                    loading ?
                        <div className="skeleton_preview"></div>
                        :
                        <img className="user_left_card_img_user" src={data.picture} alt={`Imagen de ${data.names}`} />
                }
                <div className="user_left_card_info_user">
                    <h4 className="user_left_card_title">
                        {loading ? 'Cargando...' : data.full_name}
                    </h4>
                    <small className="user_left_card_type">
                        {loading ? 'Cargando' : data.user_role}
                    </small>
                </div>
            </div>
            <div className="user_left_container_links">
                <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user"} end>Principal</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/shopping"}>Mis compras</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/products"}>Mis productos</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background_select' : ''} to={"/user/security"}>Seguridad</NavLink>
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
