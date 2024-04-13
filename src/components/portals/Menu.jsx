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
                <form action="/search" className='header_menu_search'>
                    <input type="text" name="q" id="search" placeholder='Botanitas, pastel, dulces...' autoComplete='off' required/>
                    <button type='submit' className='header_menu_btnSearch'>
                        <Search size={24} />
                    </button>
                </form>
                <div className='header_menu_filters'>
                    <a className="nav_filter" href="/search?c=comida">Comida</a>
                    <a className="nav_filter" href="/search?c=bebidas">Bebidas</a>
                    <a className="nav_filter" href="/search?c=accesorios">Accesorios</a>
                    <a className="nav_filter" href="/search?c=dulceria">Dulceria</a>
                    <a className="nav_filter" href="/search?c=postres">Postres</a>
                    <a className="nav_filter" href="/search?c=all">Todos</a>
                </div>
            </nav>
        </section>
    )
}

export default Menu
