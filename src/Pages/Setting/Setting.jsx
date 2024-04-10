import React, { useEffect } from 'react'
import {Outlet} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Setting.module.css"
import selectorMyProfile from '../../reducks/profile/operations/selectorMyProfile';

const Setting = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(selectorMyProfile())
  },[])
  return (
    <div>
        <div
        className={styles.Setting}>
            設定
        </div>
        <Outlet/>

    </div>
  )
}

export default Setting
