import { useState } from "react"
import UsePortals from '../customHooks/UsePortals'
import { Link } from "react-router-dom"
import Menu from "./Menu"
import { Bell, Menu as MenuIcon, ShoppingCart } from "lucide-react"

function Header() {
    const [isLogin, setIsLogin] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [classActive, setClassActive] = useState('')

    const handleMenu = () => {
        setClassActive('show')
        setIsShow(true)
    }

    return (
        <header className='header'>
            <div className='header_temp'></div>
            <nav className='header_nav'>
                <div className='header_nav_search'>
                    <input type="text" name="search" id="search" placeholder='Botanitas, pastel, dulces...' autoComplete='off' />
                    <button type='button' className='header_nav_btnSearch'>B</button>
                </div>
                <div className='header_nav_filters'>
                    <a href="#">Comida</a>
                    <a href="#">Bebidas</a>
                    <a href="#">Accesorios</a>
                    <a href="#">Dulceria</a>
                    <a href="#">Postres</a>
                    <a href="#">Más</a>
                </div>
            </nav>
            {
                isLogin ?
                    <div className='header_btns_user'>
                        <a href="#" className='header_btns_user_btn'>
                            <span className="icon_notifications">
                                <Bell size={24} className="header_icon" />
                                <span className="notification"></span>
                            </span>
                        </a>
                        <a href="/cart" className='header_btns_user_btn'>
                            <ShoppingCart size={24} className="header_icon" />
                        </a>
                        <a href="/user" className='header_btns_user_img'>
                            <img src="/profile.jpg" alt="Imágen del usuario ~" />
                            <span className="header_nav_user_state online"></span>
                        </a>
                        <button onClick={handleMenu} className="header_btns_user_menu">
                            <MenuIcon size={24} className="menu_icon" />
                        </button>
                    </div>
                    :
                    <div className='header_btns'>
                        <Link to={"/login"} className='header_btns_btn_login' title="Iniciar sesión">Entrar</Link>
                        <Link to={"/signup"} className='header_btns_btn_create' title="Crear nueva cuenta">Crear cuenta</Link>
                        <button onClick={handleMenu} className="header_btns_user_menu">
                            <MenuIcon size={24} className="menu_icon" />
                        </button>
                    </div>

            }
            {
                isShow &&
                <UsePortals>
                    <Menu classActive={classActive} setIsShow={setIsShow} />
                </UsePortals>
            }
        </header>
    )
}

export default Header