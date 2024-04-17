import React from 'react'
import { useSelector } from 'react-redux'
import { AllImages } from '../../../../Template'

const Image = () => {
    const production=useSelector(state=>state.production)
    const images=production.images
  return (
    <div>
        <AllImages
        images={images}/>
    </div>
  )
}

export default Image
