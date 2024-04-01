import { useState } from 'react'

function UseErrorMsg() {
    const [error, setError] = useState(null);

    const setErrorMsg = (msg) => {
        setError(msg);
    };

    return [error, setErrorMsg];
}

export default UseErrorMsg