import React from 'react'
import { DisplayImage } from '../../../../../Template'

const Image = ({imageUrl,images=[]}) => {
  if(imageUrl||images.length!==0){
    return(
      <DisplayImage
      imageUrl={imageUrl}
      imageUrlList={images}/>
    )
  }

}

export default Image