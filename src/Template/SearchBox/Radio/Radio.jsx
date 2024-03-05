import React from 'react'
import styles from "./Radio.module.css"

const Radio = (
    {
        radio=[
            {
                display:"",
                output:"",
            }
        ],
        name="",
        onChange,
        height=30,
        id
    }
) => {
  return (
    <div
    className={styles.Frame}
    id={id}>
      {
        radio.map(({display,output},key)=>(
            <label 
            key={key}
            htmlFor=""
            className={styles.Radio}>
                <input
                onChange={onChange}
                type='radio'
                name={name}
                value={output}/>
                <div>
                {display} 
                </div>
            </label>
        ))
      }
    </div>
  )
}

export default Radio
