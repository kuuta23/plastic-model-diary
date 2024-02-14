import React from 'react'
import { DisplayImage, InputImage } from '../../../../../Template'

const Image = ({onChange,imageUrl}) => {
  return (
    <div>
        <DisplayImage
        imageUrl={imageUrl}/>
        <InputImage
        onChange={onChange}/>
      
    </div>
  )
}

export default Image
