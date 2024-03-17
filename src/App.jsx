import styles from './style';
import {Billing,Business,Button,CardDeal,Client,CTA,FeedbackCard,Footer,GetStarted,Hero,Navbar,Stats,Testimonials} from './components';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}` }>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>
      
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing> 
          <CardDeal></CardDeal> 
          <Testimonials></Testimonials> 
          <Client></Client> 
          <CTA></CTA> 
          <Footer></Footer> 

        </div>
      </div>

    </div>
  )
}

export default App