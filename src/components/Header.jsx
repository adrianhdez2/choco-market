import { useEffect, useState } from "react"
import UsePortals from '../customHooks/UsePortals'
import { Link } from "react-router-dom"
import Menu from "./Menu"
import { Bell, Menu as MenuIcon, ShoppingCart } from "lucide-react"
import Popup from "./Popup"

function Header() {
    const [isLogin] = useState(true)
    const [isShow, setIsShow] = useState(false)
    const [classActive, setClassActive] = useState('')
    const [isWebNotif, setWebNotif] = useState(false)
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });


    const handleMenu = () => {
        setClassActive('show')
        setIsShow(true)
    }

    const handleWebNotif = (event) => {
        event.preventDefault()
        setWebNotif(!isWebNotif)
    }

    useEffect(() => {
        let button = document.getElementById('toggleMenu')
        const handleResize = () => {
            if (isWebNotif) {
                const buttonRect = button.getBoundingClientRect()
                const menuWidth = 350;
                const menuHeight = 250;
                let left = buttonRect.left;
                let top = buttonRect.bottom;

                if (buttonRect.left + menuWidth > window.innerWidth) {
                    left = window.innerWidth - menuWidth;
                }

                if (buttonRect.bottom + menuHeight > window.innerHeight) {
                    top = window.innerHeight - menuHeight;
                }

                setMenuPosition({
                    left: left,
                    top: top,
                });
            }
        }


        if (isWebNotif) {
            window.addEventListener('resize', handleResize);
            handleResize();
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isWebNotif])


    return (
        <header className='header'>
            <div className='header_temp'></div>
            <nav className='header_nav'>
                <div className='header_nav_search'>
                    <input type="text" name="search" id="search" placeholder='Botanitas, pastel, dulces...' autoComplete='off' />
                    <button type='button' className='header_nav_btnSearch'>B</button>
                </div>
                <div className='header_nav_filters'>
                    <Link className="nav_filter" to={"/search?q=comida"}>Comida</Link>
                    <Link className="nav_filter" to={"/search?q=bebidas"}>Bebidas</Link>
                    <Link className="nav_filter" to={"/search?q=accesorios"}>Accesorios</Link>
                    <Link className="nav_filter" to={"/search?q=dulceria"}>Dulceria</Link>
                    <Link className="nav_filter" to={"/search?q=postres"}>Postres</Link>
                    <Link className="nav_filter" to={"/search?q=otros"}>Más</Link>
                </div>
            </nav>
            {
                isLogin ?
                    <div className='header_btns_user'>
                        <a href="#" className='header_btns_user_btn' id="toggleMenu" onClick={handleWebNotif}>
                            <span className="icon_notifications">
                                <Bell size={24} className="header_icon" />
                                <span className="notification"></span>
                            </span>
                        </a>
                        <Link to={"/cart"} className='header_btns_user_btn'>
                            <ShoppingCart size={24} className="header_icon" />
                        </Link>
                        <Link to={"/user"} className='header_btns_user_img'>
                            <img src="/profile.jpg" alt="Imágen del usuario ~" />
                            <span className="header_nav_user_state online"></span>
                        </Link>
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

            {
                isWebNotif &&
                <UsePortals>
                    <Popup top={menuPosition.top} left={menuPosition.left} />
                </UsePortals>
            }
        </header>
    )
}

export default Header