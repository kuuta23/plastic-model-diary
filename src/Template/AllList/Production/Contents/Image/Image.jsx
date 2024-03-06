import React from 'react'
import DisplayImage from '../../../../DisplayImage/DisplayImage'

const Image = ({imageUrl,imageUrlList=[]}) => {
  return(
    <DisplayImage
    imageUrl={imageUrl}
    imageUrlList={imageUrlList}/>
  )
}

export default Image