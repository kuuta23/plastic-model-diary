import React from 'react'
import styles from "./Image.module.css"
const Image = ({image,onClick}) => {
  return (
    <div
    className={styles.Frame}
    onClick={onClick}>
        <img 
        src={image} 
        className={styles.Image}
        alt="" />
    </div>
  )
}

export default Image
