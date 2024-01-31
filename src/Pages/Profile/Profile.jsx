import React, { useEffect } from 'react'
import UserName from './UserName/UserName'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ProductionList } from '../../Template';
import selectorProductions from '../../reducks/productions/operations/selectorProduction';

const Profile = () => {
  const user = useSelector(state=>state.user);
  const dispatch=useDispatch()
  const productions=useSelector(state=>state.productions)
  const profile =useSelector(state=>state.profile)
  const navigate=useNavigate();
  useEffect(()=>{
    if(!user.isSignedIn){navigate("/LogIn/SignIn")}
    dispatch(selectorProductions(20,true))
  },[profile.name])
  if(user.isSignedIn){
    return (
      <div>
        <UserName/>
        <hr />
        <ProductionList
        productionList={productions.productions}
        deleteButton={true}/>
      </div>
    )
  }
  
}

export default Profile
