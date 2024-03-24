import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Menu from "./Menu"

function Header() {
    const [isLogin, setIsLogin] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [isVisible, setIsVisible] = useState(null)

    const handleMenu = () => {
        if(isVisible) {
            setIsVisible(!isVisible)
            setTimeout(() => {setIsShow(!isShow)}, 300)
        }else{
            setIsShow(!isShow)
        }
    }

    useEffect(() => {
        setIsVisible(isShow)
    }, [isShow])

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
                        <a href="#" className='header_btns_user_btn'>N</a>
                        <a href="/cart" className='header_btns_user_btn'>C</a>
                        <a href="/user" className='header_btns_user_img'>
                            <img src="/profile.jpg" alt="Imágen del usuario ~" />
                            <span className="header_nav_user_state online"></span>
                        </a>
                        <button onClick={handleMenu} className="header_btns_user_menu">M</button>
                    </div>
                    :
                    <div className='header_btns'>
                        <Link to={"/login"} className='header_btns_btn_login' title="Iniciar sesión">Entrar</Link>
                        <Link to={"/signup"} className='header_btns_btn_create' title="Crear nueva cuenta">Crear cuenta</Link>
                        <button onClick={handleMenu} className="header_btns_user_menu">
                            {isShow ? 'C' : 'M'}
                        </button>
                    </div>

            }

            {isShow && <Menu isVisible={isVisible} />}
        </header>
    )
}

export default Header