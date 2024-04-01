import React from 'react'

const Color = ({color}) => {
  if(color){
    return (
      <div>
        <span>カラー　：</span><span>{color}</span>
      </div>
    )
  }

}

export default Color
