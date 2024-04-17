import React from 'react'
import Image from '../../Image/Image'

const AllImages = ({images=[]}) => {
  return (
    <div>
      {
        images.map((image)=>(
            <Image
            image={image}/>
        ))
      }
    </div>
  )
}

export default AllImages
