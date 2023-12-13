import self from "./self.png";
import stockifyGif from "./StockGif.gif";
import EShop from "./eshop.jpeg";
import Gym from "./gym.jpeg";
import Calculator from "./calculator.jpeg";
import Bug from "../assets/bug.jpg";
import coding from "../assets/coding.jpg";
import techbusiness from "../assets/techbusiness.jpg";
export let colors = ["rgb(247,183,51)", "rgb(252,74,25)"];
// export let colors = ["rgb(0,255,0)", "rgb(0,225,255)"];

const info = {
  firstName: "McDonald",
  lastName: "musimwa",
  initials: "MM", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by hot chocolate",
    },
    {
      emoji: "🇿🇦 ",
      text: "based in SA",
    },
    {
      emoji: "💻 ",
      text: "Full Stack Developer",
    },
    {
      emoji: "📧",
      text: "mcdonald.musimwa74@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/McDonaldMusimwa",
      icon: "fa fa-github",
      label: "github",
      key: 1,
    },
    {
      link: "https://www.linkedin.com/in/mcdonald-musimwa-434589124/",
      icon: "fa fa-linkedin",
      label: "linkedin",
      key: 2,
    },
    {
      link: "https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig",
      icon: "fa fa-youtube",
      label: "youtube",
      key: 3,
    },
    // {
    //   link: "https://www.linkedin.com/in/joshua-van-breda-a09328209/",
    //   icon: "fa fa-linkedin",
    //   label: "linkedin",
    // },
    // {
    //   link: "https://twitter.com",
    //   icon: "fa fa-twitter",
    //   label: "twitter",
    // },
  ],
  posts: [
    {
      key: 1,
      title: "Bug Report",
      date: "November 10 2023",
      image: Bug,
      link: "https://www.linkedin.com/posts/mcdonaldmusimwa_softwaretesting-activity-7128683228713869312-7yC-?utm_source=share&utm_medium=member_desktop",
    },
    {
      key: 2,
      title: "Code with the end in mind",
      date: "October 2, 2023",
      image: coding,
      link: "https://www.linkedin.com/posts/mcdonaldmusimwa_design-and-code-with-the-end-in-mind-being-activity-7117449642677522432-Z4jn?utm_source=share&utm_medium=member_desktop",
    },
    {
      key: 3,
      title: "Technology Transforming the Business Landscape",
      date: "June 2, 2023",
      image: techbusiness,
      link: "https://www.linkedin.com/pulse/transforming-business-landscape-navigating-evolving-realm-musimwa/?trackingId=e0%2Fkk0efR8iVb4umO8Jdpg%3D%3D",
    },
  ],
  bio: "Hello there! I'm McDonald, a Full Stack JavaScript Developer with experience in a wide range of technologies and frameworks. I specialize in building user-driven web applications and websites that are both functional and aesthetically pleasing. Some of my notable projects include phonebook api, ecommerce shop, which showcase my skills in web services, node js, and database intergration.What sets me apart from other developers is my diverse background .",
  bio2: "I have horned my through on solo projects as well as collaborative ones, and I have experience in fields such as marketing and design. This unique perspective allows me to approach development challenges from multiple angles, resulting in more creative and effective solutions. I'm always eager to take on new challenges and collaborate with other passionate individuals - let's build something great together!",
  poetry: `"Code weaves the fabric of innovation, where logic dances with creativity, and bugs, mere whispers in the symphony of creation, are conquered by the tenacity of a determined mind."`,
  skills: [
    {
      key: 1,
      title: "Languages",
      techs: ["Java", "javascript", "python", "sql", "html", "css"],
      description:
        "I have worked different languages and i am always excited to learn more and expand.Open to see my regular go too languages.",
    },
    {
      key: 2,
      title: "Frameworks",
      techs: ["react js", "node js", "express js"],
      description:
        "I enjoy learning different frameworks and libraries and see their different capabilities i am always open to lean a new piece of tech.Open to see my regular go too frameworks or libraries.",
    },
    {
      key: 3,
      title: "Tools",
      techs: ["github", "mysql", "apache", "mongodb", "Vite"],
      description:
        "Tools are a way to make development life easy ,i always use the common in the maarket but always up to grab a new tool.",
    },
  ],
  hobbies: [
    {
      label: "gym",
      emoji: "💪🏽 ",
    },
    {
      label: "learning",
      emoji: "🧠 ",
    },
    {
      label: "coding",
      emoji: "👨🏽‍💻 ",
    },
    {
      label: "film",
      emoji: "🎥 ",
    },
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Stock management",
      live: "https://mcdonaldmusimwa.github.io/stockifylandingpage/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://mcdonaldmusimwa.github.io/stockifylandingpage/", // this should be a link to the **repository** of the project, where the code is hosted.
      image: stockifyGif,
      key: 1,
    },
    {
      title: "Ecommerce Shop",
      live: "https://willowy-boba-b5e4b3.netlify.app/",
      source: "https://github.com/McDonaldMusimwa/Ecommerce-shop",
      image: EShop,
      key: 2,
    },
    {
      title: "Fit Club Website",
      live: "https://mcdonaldmusimwa.github.io/FitClub/",
      source: "https://github.com/McDonaldMusimwa/FitClub",
      image: Gym,
      key: 3,
    },
    {
      title: "Web application calculator",
      live: "https://mcdonaldmusimwa.github.io/CalculatorWithReact/",
      source: "https://github.com/McDonaldMusimwa/CalculatorWithReact",
      image: Calculator,
      key: 4,
    },
  ],
};

export default info;
