import { Camera, KeyRound, Settings as SettingIcon } from "lucide-react"
import { useState } from "react"
import InputEdit from "../../components/form/InputEdit"

function Settings() {

  const [values, setValues] = useState({
    nameUser: 'Antonio de Jesús',
    lastnameP: 'Loya',
    lastnameM: 'Castillo',
    phone: '9123219898',
    email: 'ejemplo@ejemplo.com'
  })

  const handleValues = (e) => {
    let { target } = e
    const { name, value } = target

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);
  }

  return (
    <div className="user_page_rigth_container">
      <header className="user_page_rigth_header">
        <SettingIcon size={30} className="user_page_icon" />
      </header>
      <div className="settings_container">
        <form className="settings_container_top">
          <div className="settings_container_top_info">
            <div className="settings_container_top_info_user">
              <div className="settings_img_user_container">
                <label className="img_user">
                  <img src="/users/loya.png" alt="" className="settings_img_user" />
                  <span className="hover_cam">
                    <Camera size={25} className="icon_hover_cam" />
                  </span>
                  <input type="file" name="" id="" hidden />
                </label>
                <small className="settings_img_user_div">DACYTI</small>
              </div>
              <div className="settings_details_user_container">
                <span className="settings_user_id">#0012AD98</span>
                <small className="settings_user_type">Vendedor</small>
              </div>
            </div>
            <div className="settings_container_top_info_state">
              <button type="button" className="btn btn_primary">Cambiar estado</button>
            </div>
          </div>
          <div className="settings_container_top_changes">
            <InputEdit type="text" name="nameUser" value={values.nameUser} labelString={"Nombre(s)"} onChange={handleValues}/>
            <InputEdit type="text" name="lastnameP" value={values.lastnameP} labelString={"Apellido paterno"} onChange={handleValues}/>
            <InputEdit type="text" name="lastnameM" value={values.lastnameM} labelString={"Apellido materno"} onChange={handleValues}/>
            <InputEdit type="tel" name="phone" value={values.phone} labelString={"Teléfono"} onChange={handleValues}/>
            <InputEdit type="email" name="email" value={values.email} labelString={"Correo electrónico"} onChange={handleValues}/>
          </div>
          <div className="settings_container_top_password">
            <label className="form_input">
              <span className="form_input_icon">
                <KeyRound size={20} className="form_icon" />
              </span>
              <input className="input" type="password" name="password" id="password" placeholder="Contraseña" />
            </label>
            <label className="form_input">
              <span className="form_input_icon">
                <KeyRound size={20} className="form_icon" />
              </span>
              <input className="input" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmar contraseña" />
            </label>
            <button type="submit" className="btn btn_primary">Guardar cambios</button>
          </div>
        </form>
        <div className="settings_container_bottom">
          <span className="settings_date">Último acceso 9-feb-2024</span>
          <button type="button">Eliminar mi cuenta</button>
        </div>
      </div>
    </div>
  )
}

export default Settings