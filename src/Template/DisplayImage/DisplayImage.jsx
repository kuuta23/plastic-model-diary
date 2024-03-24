import React from 'react'
import styles from "./DisplayImage.module.css"

const DisplayImage = ({imageUrl='',imageUrlList=[],deleteClick}) => {
    if(imageUrlList.length==0&&imageUrl){
        imageUrlList.push(imageUrl)
    }

    return(
        <div
        className={styles.Frame}>
            {
                imageUrlList.map((value)=>(
                    <img 
                    src={value} 
                    className={styles.Image} />
                ))
            }
        </div>
    )
  
}

export default DisplayImage
