import React from 'react'
import styles from './styles/Hero.module.css'

const Hero = () => {
  return (
    <>
        <div className={styles.hero}>
            <h1 className= {`${styles.shadow} has-text-white title is-1 is-size-2-mobile has-text-centered has-text-weight-semibold has-text-white p-6 m-6`}>
                Eventful Evenings <br/>
                Made Easy
            </h1>
        </div>
    </>
  )
}

export default Hero