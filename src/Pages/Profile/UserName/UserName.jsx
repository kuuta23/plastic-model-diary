import React, { useEffect, useState } from 'react'
import styles from './UserName.module.css'
import EditUserName from './EditUserName/EditUserName'
import { EditButton } from '../../../Template'
import { useSelector } from 'react-redux'

const UserName = () => {
    const [edit,setEdit]=useState(true)
    const profile=useSelector(state=>state.profile);
    useEffect(()=>{setEdit(!edit)},[profile.name])
  return (
    <div
    className={styles.Frame}>
        <div
        className={styles.Font}>
            {profile.name}
        </div>
        <div
        className={styles.EditButton}>
            <EditButton
            onClick={()=>setEdit(!edit)}/>
        </div>
        <div className={styles.Spacer}></div>
        {
            edit?(
                <div
                className={styles.EditUserName}>
                    <EditUserName/>
                </div>
            ):<></>
        }
        
    </div>
  )
}

export default UserName
