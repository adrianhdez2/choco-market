import { Link } from "react-router-dom"


function DisabledAccount({handleModal, isShow}) {
    return (
        <div className="container_dialog">
            <div className={`dialog ${isShow && 'expand'}`}>
                <h3 className="dialog_title">Desactivar cuenta</h3>
                <h4 className="dialog_question">¿Está seguro que desea desactivar su cuenta?</h4>
                <small className="dialog_terms">Al desactivar esta cuenta dejará de ser visible para otros usuarios.</small>
                <small className="dialog_terms">Si desea conocer más consulte <Link to={"/terminos-y-condiciones"}>términos y condiciones.</Link></small>
                <div className="dialog_btns">
                    <button type="button" className="btn_dialog btn_cancel" onClick={handleModal}>Cancelar</button>
                    <button type="button" className="btn_dialog btn_primary">Desactivar</button>
                </div>
            </div>
        </div>
    )
}

export default DisabledAccount