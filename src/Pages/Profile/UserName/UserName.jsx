import React, { useState } from 'react'
import styles from './UserName.module.css'
import EditUserName from './EditUserName/EditUserName'
import { EditButton } from '../../../Template'

const UserName = () => {
    const [edit,setEdit]=useState(false)
  return (
    <div
    className={styles.Frame}>
        <div
        className={styles.Font}>
            name
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
