import React from 'react'
import styles from "./Ad.module.css"

const Ad = () => {
  return (
    <>
    <div
    className={styles.DisplayFrame}>
      <a 
      href="//af.moshimo.com/af/c/click?a_id=4409249&p_id=54&pc_id=54&pl_id=619" 
      rel="nofollow" 
      referrerpolicy="no-referrer-when-downgrade">
        <img 
        src="//image.moshimo.com/af-img/0032/000000000619.gif" 
        width="234" 
        height="60" 
        style={{"border":"none"}}/>
      </a>
      <img 
      src="//i.moshimo.com/af/i/impression?a_id=4409249&p_id=54&pc_id=54&pl_id=619" 
      width="1" 
      height="1" 
      style={{"border":"none;"}}/>
    </div>
    </>
    
  )
}

export default Ad
