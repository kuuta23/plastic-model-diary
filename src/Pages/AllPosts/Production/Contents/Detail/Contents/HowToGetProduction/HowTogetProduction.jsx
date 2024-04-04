import React from 'react'

const HowTogetProduction = ({howToGetProduction}) => {
  if(howToGetProduction){
    return (
      <div>
        <span>入手方法：</span><span>{howToGetProduction}</span>
      </div>
    )
  }

}

export default HowTogetProduction
