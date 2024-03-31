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
                imageUrlList.map((value,i)=>(
                    <div
                    className={styles.ImageFrame}
                    key={i}>
                        {
                            deleteClick?(
                                <button
                                className={styles.DeleteButton}
                                onClick={()=>deleteClick(i)}>
                                    ×
                                </button>
                            ):(<></>)
                        }
                        
                        <img 
                        src={value} 
                        className={styles.Image} />
                    </div>
                    
                ))
            }
        </div>
    )
  
}

export default DisplayImage
