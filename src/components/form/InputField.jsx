import { Eye, EyeOff } from "lucide-react";

function InputField({
            type,
            value,
            name,
            placeholder,
            onChange,
            icon: Icon,
            login = false,
            isShow = false,
            handleShow = undefined,
            classN = 'form_input_user',
            classInput = ''
        }) {


    return (
        <label className={`${classN} form_input`}>
            <span className="form_input_icon">
                {Icon && <Icon size={20} className="form_icon" />}
            </span>
            <input
                type={type}
                value={value}
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className={`input ${classInput}`}
                autoComplete="off"
                pattern={type === "tel" ? '[0-9]{10}' : undefined}
                minLength={type === "password" ? '8' : undefined}
                required
            />
            {
                login && <span className="form_input_icon show_pass" onClick={handleShow}>
                    {isShow ?
                        <EyeOff size={17} className="icon" />
                        :
                        <Eye size={17} className="icon" />}
                </span>
            }
        </label>
    )
}

export default InputField;
