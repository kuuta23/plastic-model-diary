import React, { useCallback, useState } from 'react'
import { DisplayImage, InputImage } from '../../../../../Template'
import styles from "./Image.module.css"

const Image = ({imageUrl,onChange}) => {

  return (
    <div
    className={styles.Frame}>
      <DisplayImage
      imageUrl={imageUrl}/>
      <InputImage
      onChange={onChange}/>
      
    </div>
  )
}

export default Image
