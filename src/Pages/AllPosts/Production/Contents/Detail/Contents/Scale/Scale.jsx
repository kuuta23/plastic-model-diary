import React from 'react'

const Scale = ({scale}) => {
  if(scale){
    return (
      <div>
        <span>スケール：</span><span>{scale}</span>
      </div>
    )
  }
}

export default Scale
