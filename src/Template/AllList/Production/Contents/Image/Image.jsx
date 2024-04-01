import React from 'react'
import DisplayImage from '../../../../DisplayImage/DisplayImage'

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