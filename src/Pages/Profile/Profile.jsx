import React, { useEffect } from 'react'
import UserName from './UserName/UserName'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { AllList, ProductionList } from '../../Template';
import selectorProductions from '../../reducks/productions/operations/selectorProduction';
import { AdsCard } from '../../Template/AdsCard/AdsCard';
import styles from './Profile.module.css'
import selectorProfile from '../../reducks/profile/operations/selectorProfile';
import selectorSigleComment from '../../reducks/singleComments/operations/selectorSingleComment';

const Profile = () => {
  const user = useSelector(state=>state.user);
  const dispatch=useDispatch()
  const productions=useSelector(state=>state.productions)
  const comments=useSelector(state=>state.comments)
  const profile =useSelector(state=>state.profile)
  const navigate=useNavigate();
  const {uid}=useParams()
  
  useEffect(()=>{
    if(uid!="null"&&uid){
      dispatch(selectorProfile(uid))
      dispatch(selectorProductions(20,uid))
      dispatch(selectorSigleComment(20,uid))
    }else{
      navigate("/Login/SignIn")
    }
    
  },[profile.name,uid])
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
}

export default Profile
