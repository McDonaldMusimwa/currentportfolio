import Hero from "./Hero/Hero"
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.Home}>
      <Hero />
    </div>
  )
}

export default Home