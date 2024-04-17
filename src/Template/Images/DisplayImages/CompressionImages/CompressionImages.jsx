import React, { useEffect, useState } from 'react'
import styles from "./CompressionImages.module.css"
import Image from '../../Image/Image'

const CompressionImages = ({images=[],id={}}) => {
    const [num,setNum]=useState(0)
    useEffect(()=>{
      let bottom=0;
      let left=0;
      let zIndex=200;
      images.forEach((s,i)=>{
        const element = document.getElementById(id+"-image-"+i);
        element.style.bottom=bottom+"px"
        element.style.left=left+"px"
        element.style.zIndex=zIndex;
        bottom=bottom+6;
        left=left+5;
        zIndex--;
      })
    },[])
    const imageClick=()=>{
      if(images.length!==0){
        const image=images[0]
        images.splice(0,1);
        images[images.length]=image
      }
      if(images.length-1>num){
        setNum((num)=>num+1)
      }else{
        setNum(0)
      }
    }
    
  return (
    <div
    className={styles.Frame}>
      {
        images.map((image,i)=>(
          <div
          key={i}
          id={id+"-image-"+i}
          className={styles.Image}>
            <Image
            image={image}
            onClick={imageClick}/>
          </div>
        ))
      }
        
    </div>
  )
}

export default CompressionImages
