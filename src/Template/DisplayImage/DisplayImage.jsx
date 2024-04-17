import React, { useState } from 'react'
import styles from "./DisplayImage.module.css"
import SingleImage from "./SingleImage/SingleImage"
import ValueCnt from '../ValueCnt/ValueCnt'

const DisplayImage = ({imageUrl='',imageUrlList=[],deleteClick}) => {
    if(imageUrlList.length==0&&imageUrl){
        imageUrlList.push(imageUrl)
    }
    const [num,setNum]=useState(0)
    const click=()=>{
        var i=num;
        i=i+1;
        if(i>=imageUrlList.length){
            i=0
        }
        setNum(i)
    }
    

    return(
        <div
        className={styles.Frame}>
            <SingleImage
            image={imageUrlList[num]}
            onClick={click}/>
             {
                deleteClick?(
                    <button
                    className={styles.DeleteButton}
                    onClick={()=>deleteClick(num)}
                    type='button'>
                        ×
                    </button>
                ):(<></>)
            }
            <div>
                <ValueCnt
                limit={imageUrlList.length}
                valueCnt={num+1}/>
            </div>
            <span>
                画像をクリックすると画像が切り替わります
            </span>
        </div>
    )
  
}

export default DisplayImage
// {
//     imageUrlList.map((value,i)=>(
//         <div
//         className={styles.ImageFrame}
//         key={i}>
//             {
//                 deleteClick?(
//                     <button
//                     className={styles.DeleteButton}
//                     onClick={()=>deleteClick(i)}
//                     type='button'>
//                         ×
//                     </button>
//                 ):(<></>)
//             }
            
//             <img 
//             src={value} 
//             className={styles.Image} />
//         </div>
        
//     ))
// }