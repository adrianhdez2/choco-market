import PropTypes from "prop-types"
import { useState } from "react"

function Menu({ isShow, setIsShow }) {
    const [isVisible, setIsVisible] = useState(isShow)

    const toggleMenu = () => {
        setIsVisible(!isVisible)
        setTimeout(() => setIsShow(!isShow), 300)
    }

    return (
        <section className={`menu ${isVisible ? 'show' : 'hidden'}`}>
            <button type="button" onClick={toggleMenu}>C</button>
            <nav className='header_menu'>
                <div className='header_menu_search'>
                    <input type="text" name="search" id="search" placeholder='Botanitas, pastel, dulces...' autoComplete='off' />
                    <button type='button' className='header_menu_btnSearch'>B</button>
                </div>
                <div className='header_menu_filters'>
                    <a href="#">Comida</a>
                    <a href="#">Bebidas</a>
                    <a href="#">Accesorios</a>
                    <a href="#">Dulceria</a>
                    <a href="#">Postres</a>
                    <a href="#">Más</a>
                </div>
            </nav>
        </section>
    )
}

export default Menu

Menu.propTypes = {
    setIsShow: PropTypes.func.isRequired,
    isShow: PropTypes.bool.isRequired
}
