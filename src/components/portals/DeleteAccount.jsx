import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'


function DeleteAccount({ handleModal, isShow }) {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true

    const handleDelete = () => {
        axios.post("http://localhost:3001/auth/delete")
            .then(res => {
                if (res.data.status) {
                    navigate('/login')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="container_dialog">
            <div className={`dialog ${isShow && 'expand'}`}>
                <h3 className="dialog_title">Eliminar cuenta</h3>
                <h4 className="dialog_question">¿Está seguro que desea eliminar su cuenta?</h4>
                <small className="dialog_terms">Al eliminar esta cuenta todos sus datos serán eliminados y no habrá forma alguna de recuperar dichos datos.</small>
                <small className="dialog_terms">Si desea conocer más consulte <Link to={"/terminos-y-condiciones"}>términos y condiciones.</Link></small>
                <div className="dialog_btns">
                    <button type="button" className="btn_dialog btn_cancel" onClick={handleModal}>Cancelar</button>
                    <button type="button" className="btn_dialog btn_primary" onClick={handleDelete}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAccount