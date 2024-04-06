function InputEdit({ name, type, onChange, value, labelString, edit, onFocus }) {
    return (
        <div className="settings_container_inputs">
            <label className="settings_input_label">{labelString}:</label>
            <input
                className="settings_input"
                type={type}
                name={name}
                id={name}
                required
                value={value}
                onChange={onChange}
                pattern={type === "tel" ? '[0-9]{10}' : undefined}
                autoComplete="off"
                readOnly={edit}
                onFocus={onFocus}
            />
        </div>
    )
}

export default InputEdit