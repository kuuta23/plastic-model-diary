import React, { useEffect } from 'react'
import UserName from './UserName/UserName'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Profile.module.css'
import AllPosts from '../AllPosts/AllPosts';
import selectorMyProductions from '../../reducks/productions/operations/selectorMyProduction';

const Profile = () => {
  const dispatch=useDispatch()
  const profile =useSelector(state=>state.profile)
  const navigate=useNavigate();
  const {uid}=useParams()
  
  useEffect(()=>{
    if(uid!="null"&&uid){
      dispatch(selectorMyProductions())
    }else{
      navigate("/Login/SignIn")
    }
    
  },[profile.name,uid])
  return (
    <div
    className={styles.Frame}>
      <UserName/>
      <hr />
      <AllPosts
      local={true}
      />
    </div>
  )
}

export default Profile
