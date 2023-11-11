//import React from 'react'
import vector from '../../assets/vector.png';
import button from '../../assets/button.png';
import styles from './Hero.module.css';
import profile from '../../assets/profile.jpg';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import line from '../../assets/line.png';

const Hero = () => {
    return (
        <div className={styles.Pa}>
            <div className={styles.Hero}>
                <div className={styles.container}>
                    <img src={vector} alt="design" />
                    <div className={styles.bottomleft}>MY NAME
                        IS <strong>MCDONALD
                            MUSIMWA...</strong></div>
                </div>
                <>
                    <div className={styles.Text}><strong>Software developer </strong>based in <strong>CapeTown</strong></div>
                    <img src={button} alt='button' />
                    <div className={styles.contacts}><p>📱 <strong>+27 67 103 3055</strong></p> <p>📧 <strong>mcdonaldmusimwa100@gmail.com</strong></p></div>
                </>
            </div>

            <div className={styles.Image}>
                <img className={styles.image} src={profile} alt='profile' />
                <div className={styles.socials}>
                    <a href="https://www.linkedin.com/in/mcdonaldmusimwa" title="linkedin icons" ><img className={styles.icon} src={linkedin} /></a>
                    <a href="https://twitter.com/Mcdonal70309191" title="linkedin icons"><img className={styles.icon} src={twitter} /></a>
                    <a href="https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig" title="youtube icons"><img className={styles.icon} src={youtube} /></a>
                    <img className={styles.line} src={line} alt="line"/>
                </div>
            </div>


        </div>
    )
}

export default Hero