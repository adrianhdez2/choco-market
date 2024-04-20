import { Search } from 'lucide-react'
import { LINKS } from '../../constans/data'

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
                    required
                />
                <button type='submit' className='header_nav_btnSearch'><Search /></button>
            </form>
            <div className='header_nav_filters'>
                {
                    LINKS.map(({ id, title, filter }) => (
                        <a key={id} className="nav_filter" href={`/search?c=${filter}`}>{title}</a>
                    ))
                }
            </div>
        </nav>
    )
}

export default Nav