import React from 'react'
import styles from './styles/Hero.module.css'

const Hero = () => {
  return (
    <>
        <div className={`${styles.hero} gradient`}>
            <h1 className= {`${styles.title} has-text-white has-text-weight-semibold has-text-white mt-6 p-6`}>
                Eventful Evenings <br></br>
                Made Easy
            </h1>
        </div>
    </>
  )
}

export default Hero