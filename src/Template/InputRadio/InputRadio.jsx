import React from 'react'
import styles from "./InputRadio.module.css"

const InputRadio = ({
    name="",
    radio=[{value:""}],
    onChange,
    start
}) => {
  return (
    <div>
      {
        radio.map(({value,color},key)=>(
            <label 
            className={styles.Label}
            style={{"color":color}}
            key={key}>
                <input 
                onChange={onChange}
                type="radio" 
                checked={start==value}
                name={name} 
                id=""
                value={value} />{value}
            </label>
            
                
        ))
      }
    </div>
  )
}

export default InputRadio
{}