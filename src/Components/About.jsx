import styles from './About.module.css';
import AboutLayer from './About/AboutLayer';
import Technologies from './Technologies/Technologies';
import Footer from './UI/Footer/Footer';

const About = () => {
  return (
    <div className={`ml-80 md:w-full md:m-4 md:ml-0 ${styles.About}`} id='about'>
      <AboutLayer />
      <Technologies />


    </div>
  )
}

export default About