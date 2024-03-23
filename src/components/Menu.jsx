import PropTypes  from "prop-types"

function Menu({ handleMenu, isShow }) {
    
    return (
        <section className={`menu`}>
            <button type="button" onClick={handleMenu}>C</button>
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
    handleMenu: PropTypes.func.isRequired,
    isShow: PropTypes.bool.isRequired
}