import React from 'react'
import { DisplayImage } from '../../../../../Template'
import ComplessionImages from '../../../../../Template/Images/DisplayImages/CompressionImages/CompressionImages'

const Image = ({image,images=[],id=""}) => {
  if(image){
    return(
      <ComplessionImages
      id={id}
      images={images}/>
    )
  }else if(images.length!=0){
    return(
      <ComplessionImages
      id={id}
      images={images}/>
    )
  }

}

export default Image