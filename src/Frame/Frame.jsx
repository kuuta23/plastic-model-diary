// 画面全体の配置や大きさの指定

import React from 'react'
import styles from './Frame.module.css'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'
import Footer from './Footer/Footer'
import Ad from './Ad/Ad'

const Frame = ({mainContent}) => {
  return (
    <div
    className={styles.Frame}>
      <Header/>
      <Sidebar/>
      <MainContent
      mainContent={mainContent}/>
      <Footer/>
      <Ad/>
    </div>
  )
}

export default Frame
