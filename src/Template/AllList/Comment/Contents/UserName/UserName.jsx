import React from 'react'
import DisplayUserName from '../../../../DisplayUserName/DisplayUserName'

const UserName = ({userName="不明"}) => {
  return (
    <div>
      <DisplayUserName
      userName={userName}/>
    </div>
  )
}

export default UserName
