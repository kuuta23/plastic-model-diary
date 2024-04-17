import React from 'react'
import styles from "./SingleImage.module.css"

const SingleImage = ({image,onClick}) => {
  return (
    <div
    className={styles.Frame}
    onClick={onClick}>
      <img 
      className={styles.Image}
      src={image} 
      alt="画像" />
    </div>
  )
}

export default SingleImage
