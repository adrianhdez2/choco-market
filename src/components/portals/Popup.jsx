import { Handshake, ShoppingBag, UserCheck } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

function Popup({ top, left }) {

    const [haveNotif] = useState(true)

    return (
        <div
            className="notifications_menu"
            style={{ top: top, left: left }}
        >
            <div className="container_title_notifications">
                <h3 className="title_notifications">Notificaciones</h3>
            </div>
            <div className="notifications_container" style={{ justifyContent: haveNotif ? 'flex-start' : 'center' }}>
                {
                    haveNotif ?
                        <>
                            <Link className="notification_item">
                                <ShoppingBag size={14} className="icon_notification" />
                                Jorge Jiménez hizo un encargo
                            </Link>
                            <Link className="notification_item">
                                <UserCheck size={14} className="icon_notification" />
                                Luis Vicente disponible ahora
                            </Link>
                            <Link className="notification_item">
                                <Handshake size={14} className="icon_notification" />
                                Jacquelina quiere comprar
                            </Link>
                        </>
                        :
                        <small>No hay notificaciones</small>
                }
            </div>
        </div>
    )
}

export default Popup