import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Contents.module.css"

const Contents = () => {
  const contents=[
    {
        text:"リストでの検索ワードの変更",
        link:"Searchwords"
    }
  ]
  return (
    <div>
      {
        contents.map(({text,link},key)=>(
            <div
            className={styles.Content}
            key={key}>
                <Link
                className={styles.Link}
                to={link}>
                    {text}
                </Link>
            </div>
        ))
      }
    </div>
  )
}

export default Contents
