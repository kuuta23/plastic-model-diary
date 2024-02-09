import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Profile.module.css"

const Profile = () => {
  return (
    <div
    className=''>
        <Link
        className={styles.Link}
        to={"/Profile"}>
            プロフィール
        </Link>
      
    </div>
  )
}

export default Profile
