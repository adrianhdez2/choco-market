import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../customHooks/useAuth'
import { LogOut } from 'lucide-react'
import { useToken } from '../../../customHooks/useToken'
import { useFetch } from '../../../customHooks/useFetch'

export default function LeftContainer() {

    const { logOut, token } = useAuth()
    const idUser = useToken(token)
    const { data, loading, error } = useFetch({ url: `http://localhost:8000/api/users/${idUser}` })

    return (
        <>
            <div className="user_left_container_user">
                {
                    loading || error ? 
                    <div className="skeleton_preview"></div> 
                    : 
                    <img className="user_left_card_img_user" src={`/users/${data.pathIMG}`} alt={`Imagen de ${data.names}`} />
                }
                <div className="user_left_card_info_user">
                    <h4 className="user_left_card_title">
                        {
                            loading || error ? "cargando" : data.names
                        }
                    </h4>
                    <small className="user_left_card_type">
                        {
                            loading || error ? "cargando" : data.type
                        }
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
                <button onClick={() => logOut()}>
                    <LogOut size={20} />
                    Cerrar sesión
                </button>
            </div>
        </>
    )
}
