import React from 'react'
import styles from "./DisplayImage.module.css"

const DisplayImage = ({imageUrl}) => {
    if(imageUrl){
        return (
            <img 
            className={styles.Image}
              src={imageUrl} 
              alt="" />
          )
    }else{return<></>}
  
}

export default DisplayImage
