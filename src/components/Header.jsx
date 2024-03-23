import { useState } from "react"
import Menu from "./Menu"

function Header() {
    const [isLogin, setIsLogin] = useState(false)
    const [isShow, setIsShow] = useState(false)

    const handleMenu = (e) => {
        e.preventDefault()
        setIsShow(!isShow)
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
                        <button className='header_btns_btn_login'>Entrar</button>
                        <button className='header_btns_btn_create'>Crear cuenta</button>
                        <button onClick={handleMenu} className="header_btns_user_menu">M</button>
                    </div>

            }

            {isShow && <Menu setIsShow={setIsShow} isShow={isShow}/>}
        </header>
    )
}

export default Header