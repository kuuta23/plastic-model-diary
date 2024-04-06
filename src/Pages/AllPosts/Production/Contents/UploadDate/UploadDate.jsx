import React from 'react'

const UploadDate = ({timestamp=new Date()}) => {
    const time = new Date(timestamp.seconds*1000)
    console.log(time);


  return (
    <div>
      <span>{time.getFullYear()}</span>
      .
      <span>{time.getMonth()}</span>
      .
      <span>{time.getDate()}</span>
    </div>
  )
}

export default UploadDate
