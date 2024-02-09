import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div
    className={styles.Frame}>
      <Link
      className={styles.Link}
      to={"/"}>
        ホーム
      </Link>
    </div>
  )
}

export default Home
