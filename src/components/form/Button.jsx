function Button({ loading, title }) {
    return (
        <button
            className="btn btn_primary"
            type="submit"
            disabled={loading ? true : undefined}
        >
            {
                loading ?
                    <div className="loading"></div>
                    :
                    title
            }
        </button>
    )
}

export default Button