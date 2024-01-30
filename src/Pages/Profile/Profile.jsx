import React, { useEffect } from 'react'
import UserName from './UserName/UserName'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const user = useSelector(state=>state.user);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!user.isSignedIn){navigate("/LogIn/SignIn")}
  },[])
  if(user.isSignedIn){
    return (
      <div>
        <UserName/>
      </div>
    )
  }
  
}

export default Profile
