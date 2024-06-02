function InputEdit({ name, type, onChange, value, labelString, edit, onFocus, disabled = false, required = true }) {
    return (
        <div className="settings_container_inputs">
            <label className="settings_input_label">{labelString}:</label>
            <input
                className="settings_input"
                type={type}
                name={name}
                id={name}
                required={required ? true : undefined}
                value={value}
                onChange={onChange}
                pattern={type === "tel" ? '[0-9]{10}' : undefined}
                autoComplete="off"
                readOnly={edit}
                onFocus={onFocus}
                disabled={disabled ? true : undefined}
            />
        </div>
    )
}

export default InputEdit