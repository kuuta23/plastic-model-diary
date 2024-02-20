import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Profile.module.css"
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector(state=>state.user)
  const navigetionProfile=()=>{
    if(user.isSignedIn){
      return("/Profile/"+user.uid)
    }else{
      return("/Profile/null")
    }
  }
  return (
    <div
    className=''>
        <Link
        className={styles.Link}
        to={navigetionProfile()}>
            プロフィール
        </Link>
      
    </div>
  )
}

export default Profile
