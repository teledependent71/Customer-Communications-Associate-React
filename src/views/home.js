import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Customer Communications Associate</title>
        <meta property="og:title" content="Customer Communications Associate" />
      </Helmet>
    </div>
  )
}

export default Home
