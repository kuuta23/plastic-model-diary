import React, { useCallback, useState } from 'react'
import { DisplayImage, InputImage } from '../../../../../Template'
import styles from "./Image.module.css"

const Image = ({imagesUrl=[],onChange,deleteClick}) => {

  return (
    <div
    className={styles.Frame}>
      {
        imagesUrl.map((value)=>(
          <DisplayImage
          imageUrl={value}/>
        ))
      }
      <InputImage
      onChange={onChange}
      deleteClick={deleteClick}/>
      
    </div>
  )
}

export default Image
