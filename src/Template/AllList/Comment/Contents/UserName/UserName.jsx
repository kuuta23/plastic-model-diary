import React from 'react'
import DisplayUserName from '../../../../DisplayUserName/DisplayUserName'

const UserName = ({userName="不明",profileUrl}) => {
  return (
    <div>
      <DisplayUserName
      userName={userName}
      to={profileUrl}/>
    </div>
  )
}

export default UserName
