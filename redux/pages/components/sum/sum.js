import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { sum } from '../../store/Calculator/Calculator.actions'

function SomarInputs() {
    const resultado = useSelector(function (state) {
        return state.calculator
    })
    const dispatch = useDispatch()

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return (
        <div>
            <input type="number" placeholder="(A)Digite o 1ª valor aqui"
                onChange={(e) => setA(Number(e.target.value))}
            /> +
            <input type="number" placeholder="(B)Digite o 2ª valor aqui"
                onChange={(e) => setB(Number(e.target.value))}

            />
            <button onClick={() => {
                dispatch(sum(a, b))
            }}>
                SOMAR
            </button>

            <div>
                {resultado}
            </div>
        </div>
    )

}


export default SomarInputs