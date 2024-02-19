import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./List.module.css"

const List = () => {
  return (
    <div
    className={styles.Link}>
        <Link
        className={styles.Link}
        to={"/List"}>
            リスト
        </Link>
    </div>
  )
}

export default List
