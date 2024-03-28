import { Link } from "react-router-dom"

const users = [
    {
        id: 1,
        img: 'jorge.png',
        state: 'online',
        name: '/productos/jorge'
    },
    {
        id: 2,
        img: 'jacquelina.png',
        state: 'offline',
        name: '/productos/jacquelina'
    },
    {
        id: 3,
        img: 'loya.png',
        state: 'offline',
        name: '/productos/loya'
    },
]


function Users() {
    return (
        <article className="container_users_list">
            <span className="title_users_list">Vendedores</span>
            <div className="users_list">
                {
                    users.map((user) => (
                        <Link to={user.name} className="user" key={user.id}>
                            <img src={`/users/${user.img}`} alt=""/>
                            <span className={`header_nav_user_state ${user.state}`}></span>
                        </Link>
                    ))
                }
            </div>
        </article>
    )
}

export default Users