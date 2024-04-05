import { Link } from "react-router-dom"
import { users } from "../../constans/data"


function Users() {
    return (
        <article className="container_users_list">
            <span className="title_users_list">Vendedores</span>
            <div className="users_list">
                {
                    users.map((user) => (
                        <Link to={`/products/${user.name}`} className="user" key={user.id}>
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