import { useNavigate } from "react-router-dom";
import vector from "../../assets/Vector.png";
import button from "../../assets/Button.png";
import styles from "./Hero.module.css";
import profile from "../../assets/profile.jpg";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import line from "../../assets/Line.png";

const Hero = () => {
  const navigate = useNavigate();
  const navigateToContact = () => {
    navigate("/contacts");
  };
  return (
    <div className={`${styles.Pa} mx-7 lg:w-full bg-blue-100 shadow-lg`}>
      <div className={`${styles.Hero} md:w-full`}>
        <div className={`${styles.container}`}>
          <img src={vector} alt="design" className={styles.vector}/>
          <div className={`${styles.bottomleft} md:text-sm`}>
            MY NAME IS <strong className={styles.stroke}>MCDONALD MUSIMWA...</strong>
          </div>
        </div>
        <>
          <div className={styles.Text}>
            <strong className={styles.stroke}>Software developer </strong>based in{" "}
            <strong>CapeTown</strong>
          </div>
          <button
            className={`md:w-6 md:w-4 p-4 ${styles.button}`}
            src={button}
            alt="button"
            onClick={navigateToContact}
         >
            Talk to me
            </button>
          
        </>
      </div>

      <div className={`${styles.Image}`}>
        <img  src={profile} alt="profile" />
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/mcdonaldmusimwa"
            title="linkedin icons"
          >
            <img className={styles.icon} src={linkedin} />
          </a>
          <a href="https://twitter.com/Mcdonal70309191" title="linkedin icons">
            <img className={styles.icon} src={twitter} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig"
            title="youtube icons"
          >
            <img className={styles.icon} src={youtube} />
          </a>
          <img className={styles.line} src={line} alt="line" />
        </div>
      </div>
    </div>
  );
};

export default Hero;