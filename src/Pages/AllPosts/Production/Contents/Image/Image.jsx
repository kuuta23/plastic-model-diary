import React from 'react'
import { DisplayImage } from '../../../../../Template'

const Image = ({image,images=[]}) => {
  if(image){
    return(
      <DisplayImage
      imageUrlList={[image]}/>
    )
  }else if(images.length!=0){
    return(
      <DisplayImage
      imageUrlList={images}/>
    )
  }

}

export default Image