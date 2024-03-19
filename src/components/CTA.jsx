import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's see what YOUR website could look like!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Contact us in order to schedule a consultation in which we can start designing the best website for your company's style and needs.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button></Button>
      </div>
    </section>
  )
}

export default CTA