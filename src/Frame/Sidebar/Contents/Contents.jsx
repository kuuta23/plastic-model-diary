import React from 'react'
import styles from './Contents.module.css'
import Content from './Contet/Content'
const Contents = ({contents=[{value:"ホーム",link:"/"}]}) => {
  return (
    <div
    className={styles.Frame}>
        {
            contents.map((content,key)=>(
                <Content
                value={content.value}
                key={key}
                link={content.link}/>
            ))
        }
      
    </div>
  )
}

export default Contents
