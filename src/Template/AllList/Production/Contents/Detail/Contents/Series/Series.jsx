import React from 'react'

const Series = ({series}) => {
  if(series){
    return (
      <div>
        <span>シリーズ：</span><span>{series}</span>
      </div>
    )
  }

}

export default Series
