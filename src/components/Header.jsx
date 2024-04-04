import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import UsePortals from '../customHooks/UsePortals'
import { Bell, Menu as MenuIcon, ShoppingCart } from "lucide-react"
import Menu from "./portals/Menu"
import Nav from '../components/nav/Nav'
import Popup from "./portals/Popup"

function Header() {
    const [isLogin] = useState(true)
    const [isShow, setIsShow] = useState(false)
    const [classActive, setClassActive] = useState('')
    const [isWebNotif, setWebNotif] = useState(false)
    const [isClick, setIsClick] = useState(false)
    const [menuPosition, setMenuPosition] = useState({ top: window.innerHeight, left: window.innerWidth - 350 });


    const handleMenu = () => {
        setClassActive('show')
        setIsShow(true)
    }

    const handleWebNotif = () => {
        if(isClick) {
            setIsClick(false)
        }
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
                    top = window.innerHeight;
                }

                setMenuPosition({
                    left: left,
                    top: top,
                });
            }



            if (isClick) {
                document.addEventListener("click", showaaa)
            }
        }

        const showaaa = () => {
            handleWebNotif()
            setIsClick(!isClick)
        };


        if (isWebNotif) {
            window.addEventListener('resize', handleResize);
            setIsClick(true)
            handleResize();

        }

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener("click", showaaa)
        };
    }, [isClick, isWebNotif])




    return (
        <header className='header'>
            <div className='header_temp'></div>
            <Nav />
            {
                isLogin ?
                    <div className='header_btns_user'>
                        <button className='header_btns_user_btn' id="toggleMenu" onClick={handleWebNotif}>
                            <span className="icon_notifications">
                                <Bell size={24} className="header_icon" />
                                <span className="notification"></span>
                            </span>
                        </button>
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