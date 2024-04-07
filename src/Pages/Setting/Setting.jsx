import React from 'react'
import {Outlet} from "react-router-dom"
import styles from "./Setting.module.css"

const Setting = () => {
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
