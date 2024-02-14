import React, { useEffect } from 'react'
import UserName from './UserName/UserName'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AllList, ProductionList } from '../../Template';
import selectorProductions from '../../reducks/productions/operations/selectorProduction';
import { AdsCard } from '../../Template/AdsCard/AdsCard';
import styles from './Profile.module.css'
import selectorProfile from '../../reducks/profile/operations/selectorProfile';

const Profile = () => {
  const user = useSelector(state=>state.user);
  const dispatch=useDispatch()
  const productions=useSelector(state=>state.productions)
  const comments=useSelector(state=>state.comments)
  const profile =useSelector(state=>state.profile)
  const navigate=useNavigate();
  useEffect(()=>{
    if(!user.isSignedIn){navigate("/LogIn/SignIn")}
    dispatch(selectorProductions(20,true))
  },[profile.name])
  if(user.isSignedIn){
    return (
      <div
      className={styles.Frame}>
        <UserName/>
        <hr />
        <AllList
        productionList={productions.productions}
        commentList={comments.comments}/>
      </div>
    )
  }else{return(<></>)}
  
}

export default Profile
