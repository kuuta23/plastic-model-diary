import React from 'react'
import DisplayUserName from '../../../../Template/DisplayUserName/DisplayUserName'
import { useSelector } from 'react-redux'

const UserName = () => {
    const production=useSelector(state=>state.production)
  return (
    <div>
      <DisplayUserName
      userName={production.userName}
      to={production.profileUrl}/>
    </div>
  )
}

export default UserName