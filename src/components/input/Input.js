import React from 'react'
import './Input.css'
const Input = (props) => {
    return (
        <div className="input_wrap">
            <input  type={props.type} name={props.name} value={props.value} onChange={props.onchange} onBlur={props.onblur} />
            <label>{props.label}</label>
        </div>
    )
}

export default Input