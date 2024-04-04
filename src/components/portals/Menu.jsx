import { useEffect, useState } from "react"
import { X, Search } from "lucide-react"

function Menu({ classActive, setIsShow }) {
    const [className, setIsClassname] = useState('')

    const handleMenu = () => {
        setIsClassname('hidden')
        setTimeout(() => setIsShow(false), 300)
    }

    useEffect(() => {
        setIsClassname(classActive)
    }, [classActive])

    return (
        <section className={`menu ${className}`}>
            <button className="header_btns_user_menu" onClick={handleMenu}>
                <X size={24} className="menu_icon" />
            </button>
            <nav className='header_menu'>
                <div className='header_menu_search'>
                    <input type="text" name="search" id="search" placeholder='Botanitas, pastel, dulces...' autoComplete='off' />
                    <button type='button' className='header_menu_btnSearch'>
                        <Search size={24} />
                    </button>
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
