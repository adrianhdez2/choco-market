import { Search } from 'lucide-react'

function Nav() {
    return (
        <nav className='header_nav'>
            <form action="/search" className='header_nav_search'>
                <input
                    type="text"
                    name="q"
                    id="search"
                    placeholder='Botanitas, pastel, dulces...'
                    autoComplete='off'
                />
                <button type='submit' className='header_nav_btnSearch'><Search /></button>
            </form>
            <div className='header_nav_filters'>
                <a className="nav_filter" href="/search?c=comida">Comida</a>
                <a className="nav_filter" href="/search?c=bebidas">Bebidas</a>
                <a className="nav_filter" href="/search?c=accesorios">Accesorios</a>
                <a className="nav_filter" href="/search?c=dulceria">Dulceria</a>
                <a className="nav_filter" href="/search?c=postres">Postres</a>
                <a className="nav_filter" href="/search?c=all">Todos</a>
            </div>
        </nav>
    )
}

export default Nav