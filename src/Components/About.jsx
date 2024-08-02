import styles from './About.module.css';
import AboutLayer from './About/AboutLayer';
import Technologies from './Technologies/Technologies';

const About = () => {
  return (
    <div className={styles.About}>
      <AboutLayer />
<Technologies />
    </div>
  )
}

export default About