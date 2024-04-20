import { useState } from 'react';
import { LayoutGrid } from "lucide-react";
import { UseImagePreviews } from "../../customHooks/UseImagePreviews"

function AddProduct() {
    const [imagePreviews, setImagePreviews] = useState([]);
    const [values, setValues] = useState({
        name_pro: '',
        descrip_pro: '',
        price_c: '',
        price_v: '',
        category_pro: 'comida'
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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values);
        console.log(imagePreviews)
    }

    const handleFileChange = (event) => {
        UseImagePreviews(event, setImagePreviews)
    };

    return (
        <div className="user_page_rigth_container">
            <header className="user_page_rigth_header">
                <LayoutGrid size={30} className="user_page_icon" />
            </header>
            <form className="addProduct_container" onSubmit={handleSubmit}>
                <div className="addProduct_container_top">
                    <div className="addProduct_container_top_left">
                        <h3 className="appProduct_title">Nuevo producto</h3>
                        <div className="container_top_left_inputs">
                            <input type="text" name="name_pro" id="name_pro" placeholder="Nombre del producto" className="styles_input_prod name" required autoComplete="off" onChange={handleValues} value={values.name_pro} />
                            <textarea name="descrip_pro" id="descrip_pro" cols="30" rows="10" placeholder="Descripción del producto" className="styles_input_prod textarea" required autoComplete="off" onChange={handleValues} value={values.descrip_pro}></textarea>
                        </div>
                        <div className="container_top_left_inputs">
                            <h4 className="title_prod_add">Precios del producto</h4>
                            <div className="container_top_left_inputs_container">
                                <input type="number" name="price_c" id="price_c" placeholder="Compra" className="styles_input_prod" required autoComplete="off" onChange={handleValues} value={values.price_c} min={0} max={1000000} />
                                <input type="number" name="price_v" id="price_v" placeholder="Venta al público" className="styles_input_prod" required autoComplete="off" onChange={handleValues} value={values.price_v} max={1000000} min={0} />
                            </div>
                        </div>
                        <div className="container_top_left_inputs">
                            <h4 className="title_prod_add">Categría del producto</h4>
                            <div className="container_top_left_inputs_container">
                                <select name="category_pro" id="category_pro" className="styles_input_prod select" onChange={handleValues} defaultValue={values.category_pro} required>
                                    <option value="comida">Comida</option>
                                    <option value="bebidas">Bebidas</option>
                                    <option value="accesorios">Accesorios</option>
                                    <option value="dulceria">Dulceria</option>
                                    <option value="postres">Postres</option>
                                    <option value="otros">Otros</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="addProduct_container_top_right">
                        <h4 className="title_prod_add">Imagenes del producto</h4>
                        <label className={`selector_img_prod ${imagePreviews.length > 0 ? 'imgs' : ''}`}>
                            {
                                imagePreviews.length > 0 ?
                                    imagePreviews.map((preview, index) => (
                                        <img key={index} src={preview} className='img_product_add' />
                                    ))
                                    :
                                    <span>Seleccionar imagenes</span>
                            }
                            <input type="file" name="img_pro" id="img_pro" hidden accept="image/png, image/jpg, image/wepb, image/jpeg" multiple="multiple" required onChange={handleFileChange} />
                        </label>
                    </div>
                </div>
                <div className="addProduct_container_bottom">
                    <button className="btn btn_primary">Guardar</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;
