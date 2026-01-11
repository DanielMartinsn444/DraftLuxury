// myButton.jsx
import { useState } from "react";

export const Button = ({ cor = "#00d1b2", texto = "Comprar" }) => {
    const [click, setClick] = useState(false);

    return (
        <button
            onClick={() => setClick(!click)}
            style={{
                width: '100%',
                padding: '15px',
                backgroundColor: click ? 'white' : cor, 
                color: click ? 'black' : 'white',
                border: `1px solid ${cor}`,
                cursor: 'pointer',
                fontWeight: 'bold',
                letterSpacing: '1px',
                transition: '0.3s'
            }}
        >
            {click ? "RESERVADO!" : texto}
        </button>
    );
};