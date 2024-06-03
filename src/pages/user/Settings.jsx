import { Camera, KeyRound, Settings as SettingIcon } from "lucide-react"
import { useEffect, useState } from "react"
import InputEdit from "../../components/form/InputEdit"
import UsePortals from '../../customHooks/UsePortals'
import DeleteAccount from "../../components/portals/DeleteAccount"
import DisabledAccount from "../../components/portals/DisabledAccount"
import axios from "axios"

function Settings() {
  axios.defaults.withCredentials = true

  const [isShow, setIsShow] = useState(false)
  const [isShow2, setIsShow2] = useState(false)
  const [imagePreviews, setImagePreviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);


  const handleModal = () => {
    setIsShow(!isShow)
  }

  const handleModal2 = () => {
    setIsShow2(!isShow2)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('img_user', selectedFile, 'image.webp');

    axios.post('http://localhost:3001/users/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        if (res.data.status) return window.location.reload()
      })
      .catch((error) => {
        console.error('Error al subir la imagen:', error);
      });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFile(files[0]);
    const previews = [];
    const reader = new FileReader();

    reader.onload = (e) => {
      previews.push(e.target.result);
      if (previews.length === files.length) {
        setImagePreviews(previews);
      }
    };

    for (let i = 0; i < files.length; i++) {
      reader.readAsDataURL(files[i]);
    }
  };

  const [values, setValues] = useState({
    user_id: '0012AD98',
    full_name: 'Antonio de Jesús',
    last_name_p: 'Loya',
    last_name_m: 'Castillo',
    phone: '000 000 00 00',
    email: 'ejemplo@ejemplo.com',
    picture: '',
    user_role: '',
    last_login: ''
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

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:3001/users/verify')
      .then(res => {
        if (res.data.status) {
          axios.post('http://localhost:3001/users/user', { status: res.data.status })
            .then(res => {
              setValues(res.data)
              setImagePreviews(res.data.picture)
              setLoading(false)
            })
            .catch(error => {
              console.log("Error obtener los datos de usuario:", error.response ? error.response.data : error.message);
              setLoading(false)
            });
        }
      })
      .catch(error => {
        console.log("Error en la verficación de usuario: ", error.response ? error.response.data : error.message);
        setLoading(false)
      });
  }, [])

  return (
    <div className="user_page_rigth_container">
      <header className="user_page_rigth_header">
        <SettingIcon size={30} className="user_page_icon" />
      </header>
      <div className="settings_container">
        <form className="settings_container_top" onSubmit={handleSubmit}>
          <div className="settings_container_top_info">
            <div className="settings_container_top_info_user">
              <div className="settings_img_user_container">
                <label className="img_user">
                  <img src={imagePreviews} alt="" className="settings_img_user" />
                  <span className="hover_cam">
                    <Camera size={25} className="icon_hover_cam" />
                  </span>
                  <input type="file" name="img_user" id="img_user" hidden accept="image/png, image/jpg, image/wepb, image/jpeg" onChange={handleFileChange} />
                </label>
              </div>
              <div className="settings_details_user_container">
                <span className="settings_user_id">{values.full_name + ' ' + values.last_name_p + ' ' + values.last_name_m}</span>
                <small className="settings_user_type">{values.user_role}</small>
              </div>
            </div>
            {/* <div className="settings_container_top_info_state">
              <button type="button" className="btn btn_primary">Cambiar estado</button>
            </div> */}
          </div>
          <div className="settings_container_top_changes">
            <InputEdit type="text" name="full_name" value={values.full_name} labelString={"Nombre(s)"} onChange={handleValues} />
            <InputEdit type="text" name="last_name_p" value={values.last_name_p} labelString={"Apellido paterno"} onChange={handleValues} />
            <InputEdit type="text" name="last_name_m" value={values.last_name_m} labelString={"Apellido materno"} onChange={handleValues} />
            {/* <InputEdit type="tel" name="phone" value={values.phone} labelString={"Teléfono"} onChange={handleValues} required={false}/> */}
            <InputEdit type="email" name="email" value={values.email} labelString={"Correo electrónico"} onChange={handleValues} disabled={true} />
          </div>
          <div className="settings_container_top_password">
            <button type="submit" className="btn btn_primary">Guardar cambios</button>
          </div>
        </form>
        <div className="settings_container_bottom">
          {/* <span className="settings_date">Último acceso 9-feb-2024</span> */}
          {/* <button type="button" onClick={handleSubmit}>Desactivar mi cuenta</button> */}
          <button type="button" onClick={handleModal}>Eliminar mi cuenta</button>
        </div>
      </div>

      {
        isShow &&
        <UsePortals>
          <DeleteAccount handleModal={handleModal} isShow={isShow} />
        </UsePortals>
      }

      {
        isShow2 &&
        <UsePortals>
          <DisabledAccount handleModal={handleModal2} isShow={isShow2} />
        </UsePortals>
      }
    </div>
  )
}

export default Settings