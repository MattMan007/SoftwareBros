import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find out how a website can <br className='sh:block hidden' /> greatly improove your business</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Having a modern style website can do wonders for your business. Atracting investors, young people you can hire and also bla bla bla. Not to mention the other advantages, bla bla bla...
        </p>

        <Button styles="mt-10"></Button>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>

    </section>
  )
}

export default CardDeal