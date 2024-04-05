import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
function Nav() {
    return (
        <nav className='header_nav'>
            <div className='header_nav_search'>
                <input type="text" name="search" id="search" placeholder='Botanitas, pastel, dulces...' autoComplete='off' />
                <button type='button' className='header_nav_btnSearch'><Search/></button>
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
    )
}

export default Nav