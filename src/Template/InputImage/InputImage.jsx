import React, { useEffect, useState } from 'react'
import image from "./Button.png"
import styles from "./InputImage.module.css"

const InputImage = ({onChange}) => {
  useEffect(()=>{
    const buttonElement=document.getElementById("imageButton");
    const inputElement=document.getElementById("inputImage");
    buttonElement.addEventListener("click",(event)=>{
      event.preventDefault()
      inputElement.click();
    })
  },[])

  return (
    <div>
      <button
      id="imageButton"
      className={styles.Button}>
        画像を選択
      </button>
      <input
      className={styles.Input}
      id='inputImage'
      type="file" 
      accept='image/*,.jpg'
      src={image} 
      alt="画像を選択"
      onChange={onChange}
      multiple/>
      
    </div>
  )
}

export default InputImage
