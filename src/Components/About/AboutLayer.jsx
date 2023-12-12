//import React from 'react'
import styles from "./AboutLayer.module.css";
import Data from "../../assets/projects.js";
import profile from "../../assets/Img.png";
import titleimg from "../../assets/Titleimg.png";
import button from "../../assets/ButtonCv.png";
import collon from "../../assets/collon.png";
const AboutLayer = () => {
  return (
    <>
      <div className={styles.Aboutlayer}>
        <div className={styles.Left}>
          <span>
            Nice to meet you!{" "}
            <p>
              <strong>Welcome too ...</strong>{" "}
            </p>
          </span>
          <img src={profile} alt="profile" className={styles.Profile} />
          <img src={titleimg} alt="titleimage" className={styles.Name} />
          <img src={button} alt="button" className={styles.Cv} />
        </div>
        <div className={styles.Right}>
          <div className={styles.Contacts}>
            <p>
              📱<strong>+27 67 103 3055</strong>
            </p>

            <p>
              📧 <strong>mcdonaldmusimwa100@gmail.com</strong>
            </p>
          </div>
          <div className={styles.Info}>
            <span>{Data.bio}</span>
            <span>{Data.bio2}</span>
          </div>
          <div className={styles.Block}>
            <img src={collon} alt="collon" />
            {Data.poetry}
          </div>
        </div>
      </div>
      <div className={styles.Footer}></div>
    </>
  );
};

export default AboutLayer;
