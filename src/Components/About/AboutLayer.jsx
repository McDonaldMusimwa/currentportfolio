//import React from 'react'
import styles from "./AboutLayer.module.css";
import Data from "../../assets/projects.js";
import profile from "../../assets/Img.png";
import titleimg from "../../assets/Titleimg.png";
import button from "../../assets/ButtonCv.png";
import collon from "../../assets/collon.png";
import McDonaldCv from "../../assets/McDonaldMusimwa_CV.pdf";
const AboutLayer = () => {
  const downloadCv = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = McDonaldCv;
    downloadLink.download = "McDonaldMusimwa_CV.pdf"; // Set the desired name for the downloaded file
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <>
      <div className={styles.Aboutlayer}>
        <div className={`${styles.Left} md:text-center`}>
          <span>
            Nice to meet you!{" "}
            <h3>
              <strong>Great to have you visit me ...</strong>{" "}
            </h3>
          </span>
          <img src={profile} alt="profile" className={styles.Profile} />
          <img src={titleimg} alt="titleimage" className={styles.Name} />
          <img
            src={button}
            alt="button"
            className={styles.Cv}
            onClick={downloadCv}

          />
          <div className="w-full p-4  bg-white rounded-lg">
          <h3 className="text-center">
            <strong>Community</strong>
            <hr />
          </h3>
          <p className="p-1 text-black">
            Since beginning my journey in software development, I have spent a lot of time learning solo and collaborating with other students in the USA. After the lockdown, I discovered developer meetups around Cape Town. I've taken an interest in different communities and building social coding networks. For example, during my learning of <strong>C# </strong>and <strong>.NET</strong>, I joined the <strong>CPTMSDUG </strong>group, where we share new features and advancements in C# and other microsoft products. I am also a big fan of <strong>React </strong>and i foresee a time where I contribute to the local React group.

          </p>

        </div>
        </div>
        <div className={styles.Right}>
          <h3 className="text-center"><strong>About Me</strong></h3>
          <hr />
          <p className="p-1 text-left p-4 text-black">
            Hi there, <strong>McDonald</strong> here. My journey into software programming has been both interesting and traditional. If someone had told me four years ago that I’d be tinkering with computers, I would have laughed it off.

            My interest in computer programming was sparked by boredom with routine. I was saving up funds to take accounting exams, but after three years of struggling to save enough and spending my evenings watching TV, I needed a change. I started reading about bitcoins, and although I didn't dive into Bitcoin itself, learning about blockchain technology ignited my curiosity and led me to web development. Finding out about the low to no cost of studying tech was my “aha” moment, and I took the initiative to study with freeCodeCamp.

            Fate stepped in when I enrolled in a full-time Bachelor’s degree in Software Development at Brigham Young University, all while maintaining my job as a financial accountant. Through teamwork and collaboration with other students from different parts of the world, I’m proud to say that I’m graduating in December 2024. I'm excited to see where my curiosity takes me next.

            I have immense respect for the friends and colleagues who have shaped me into the diverse programmer I am today.
          </p>
        </div>
     
      </div>
     
    </>
  );
};

export default AboutLayer;
