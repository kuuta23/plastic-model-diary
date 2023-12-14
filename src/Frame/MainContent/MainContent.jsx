import React from 'react'
import styles from './MainContent.module.css'

const MainContent = ({mainContent}) => {
  return (
    <div
    className={styles.Frame}>
      {mainContent}
    </div>
  )
}

export default MainContent
