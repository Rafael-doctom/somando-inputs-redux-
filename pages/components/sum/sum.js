import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { sum } from '../../store/Calculator/Calculator.actions';

function SomarInputs() {

    const resultado = useSelector(function (state) {
        return state.calculator
    });

    const dispatch = useDispatch();

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const teste = {
        width: "30vw",
        heigt: "50vh",
        margin: "15rem auto",
        textAlign: "center",
    };

    const input = {
        width: "30vw",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "5px",
        borderRadius: "5px",
        margin: "0.35rem 0",
        color: "gray",
        fontSize: "1.25rem",
    };

    const button = {
        width: "30vw",
        heigt: "50vh",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "#F78900",
        fontWeight: "600",
        fontSize: "1.55rem",
    };

    const result = {
        fontSize: "1.55rem",
        fonteFamily: "monospace",
        margin: "1rem 0"
    };

    return (
        <>
            <div className="main" style={teste}>
                <div className="content">
                    <input style={input} type="number" placeholder="(A)Digite o 1ª valor aqui"
                        onChange={(e) => setA(Number(e.target.value))}
                    />
                    <input style={input} type="number" placeholder="(B)Digite o 2ª valor aqui"
                        onChange={(e) => setB(Number(e.target.value))}

                    />
                    <button style={button} onClick={() => {
                        dispatch(sum(a, b))
                    }}>
                        SOMAR
                    </button>

                    <div style={result}>
                        {resultado}
                    </div>
                </div>
            </div>

        </>
    )

};


export default SomarInputs;