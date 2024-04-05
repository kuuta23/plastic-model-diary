import React, { useCallback } from 'react'
import styles from "./Radio.module.css"

const Radio = (
    {
        values=[],
        name="",
        onChange,
        height=30,
        id
    }
) => {
  const resetRadio=()=>{
    values.forEach((value,i)=>{
      const inputElement=document.getElementById("radio-"+name+"-"+i)
      const labelElement=document.getElementById("radio-"+name+"-"+i+"-label")
      inputElement.checked=false;
      labelElement.style.backgroundColor="aliceblue"
    })
    const event={target:{value:""}}
    onChange(event)
  }

  const inputRadio=useCallback((event)=>{
    onChange(event)
  })
  const click=(i)=>{
    values.forEach((value,i)=>{
      const element = document.getElementById("radio-"+name+"-"+i+"-label")
      element.style.backgroundColor="aliceblue"
    })
    const element = document.getElementById("radio-"+name+"-"+i+"-label")
    element.style.backgroundColor="rgb(200,255,100)"
  }
  return (
    <div
    className={styles.Frame}
    id={id}>
      {
        values.map((value,i)=>(
          <>
          <input 
          id={"radio-"+name+"-"+i}
          className={styles.Radio}
          name={"radio-"+name}
          onChange={inputRadio}
          type="radio"
          value={value} />
          <label
          id={"radio-"+name+"-"+i+"-label"}
          htmlFor={"radio-"+name+"-"+i}
          className={styles.Label}
          onClick={()=>click(i)}>
            {value}
          </label>
          </>
        ))
      }
      <label
      onClick={()=>{resetRadio()}}
      id={"radio-"+name+"-"}
      htmlFor={"radio-"+name+"-"}
      className={styles.Label}>
        リセット
      </label>
    </div>
  )
}

export default Radio
