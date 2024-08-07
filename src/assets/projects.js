import self from "./self.png";

import comfyhouse from '../assets/comfyhouse.jpg'
import stockmanagement from "../assets/stockmanagement.jpg"
import Bug from "../assets/bug.jpg";
import coding from "../assets/coding.jpg";
import Crush from "../assets/crush.jpeg";

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
      key: 4,
      title: "A glance at Software Testing",
      date: "December 14 2023",
      image: Crush,
      link: "https://www.linkedin.com/pulse/glance-software-testing-mcdonald-musimwa-dff8f%3FtrackingId=yAuvUI%252FeQ7W4qIRMQQHDBA%253D%253D/?trackingId=yAuvUI%2FeQ7W4qIRMQQHDBA%3D%3D",
    },
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
  bio: "Hello there! I'm McDonald, a Developer that loves backend but not afraid to dable with some front end .I have experience in a wide range of technologies and frameworks. I specialize in building user-driven web applications and websites that are both functional and aesthetically pleasing. Some of my recent notable projects include task management web application, stock management web application, these showcase my skills in web services,front end, and database intergration.What sets me apart from other developers is my diverse background .",
  bio2: "I have horned my through on solo projects as well as collaborative ones, and I have experience in fields such as accounting and marketing. This unique perspective allows me to approach development challenges from multiple angles, resulting in more creative and effective solutions. I'm always eager to take on new challenges and collaborate with other passionate individuals - let's build something great together!",
  poetry: `"Code weaves the fabric of innovation, where logic dances with creativity, bugs are a mere whispers in the symphony of creation and are conquered by the tenacity of a determined mind."`,
  skills: [
    {
      key: 1,
      title: "Languages",
      techs: ["c#", "typescript", "python", "sql", "html", "css"],
      description:
        "I have worked with different languages and i am always excited to learn more and expand.Open to see my regular go too languages.",
    },
    {
      key: 2,
      title: "Frameworks",
      techs: [
        "asp.net",
        "entity framework",
        "next js",
        "react js",
        "node js",
        "express js",
        "bootstrap",
      ],
      description:
        "I enjoy learning different frameworks and libraries and see their different capabilities i am always open to lean a new piece of tech.Open to see my regular go too frameworks or libraries.",
    },
    {
      key: 3,
      title: "Tools",
      techs: ["git", "mysql", "sql server", "mongodb", "sqlite", "visual studio"],
      description:
        "Tools are a way to make development life easy ,i always use the common in the market but always up to grab a new tool.",
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
      live: "https://github.com/McDonaldMusimwa/stockifynextjs.git", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/McDonaldMusimwa/stockifynextjs.git", // this should be a link to the **repository** of the project, where the code is hosted.
      image: stockmanagement,
      key: 1,
      description: "After mastering the basics and building medium-sized websites, I craved a challenge that would push my skills from design through to deployment. My background in accounting, dealing with stock costing, reconciliation, and stock-outs, sparked an idea: create a stock management application to streamline these processes. This led to the development of an experimental app that uses the FIFO (First In, First Out) method for inventory management. The application revolutionizes how businesses track stock levels, manage orders, and maintain efficient inventory turnover.",
      build_process: "The journey began with building the application using React and Node.js, complemented by MongoDB for its flexible data storage capabilities. MongoDB's ability to embed related data made it a perfect fit. To ensure a robust schema, I utilized Mongoose. As I delved into Next.js, I decided to migrate the application to leverage its powerful features like NextAuth, seamless routing, server-side rendering, and streaming. This transition not only enhanced the app's performance but also opened new avenues for scalability and user experience.Next.js also eliminated the need for a separate server codebase. This allowed me to leverage React Server Components for seamless database interactions.",
      challenges: "I am no designer by any stretch of the imagination, so the initial web app was not aesthetically pleasing. As a result, I rebuilt the entire UI. One of the biggest challenges was developing algorithms to deduct ordered products from the relevant stock while maintaining the FIFO design. This required careful planning and testing to ensure accuracy and efficiency.Authentication was another significant challenge. I initially used a third-party package, but my implementation was flawed. Migrating to Next.js was the best decision as it is a full-fledged framework that comes with built-in authentication features.You can view the source code.",

      tech: [
        "Next Js", "React Js", "Mongo DB", "Figma", "Visual Studio Code"
      ],
      wip:"yes"
    },
    {
      title: "Ecommerce Shop",
      live: "https://fashionoza.netlify.app/",
      source: "https://github.com/McDonaldMusimwa/Ecommerce-shop",
      image: comfyhouse,
      key: 2,
      description: "This is a fictitious e-commerce convenience store. The motivation behind building this app was to learn and apply vanilla JavaScript without relying on frameworks. I also practiced using async functions and consuming third-party REST APIs.",
      build_process: "The app served as a challenge to produce a product within a restricted timeline and limited resources. Consequently, I used vanilla JavaScript and CSS. I consumed third-party REST APIs and rendered the data on the frontend. To minimize API calls, I stored the API responses in local storage and read from there.",
      tech: ["Vanilla JavaScript", "CSS", "HTML", "Local Storage"],
      challenges:"Building an e-commerce convenience store with vanilla JavaScript and third-party REST APIs presents several challenges. Managing asynchronous operations and handling API integration can be complex, requiring robust error handling and understanding of data formats. Storing data efficiently in local storage, ensuring responsive design, and optimizing performance are crucial for a smooth user experience. Additionally ensuring accessibility and cross-browser compatibility further complicates the development process. Overall, careful planning and testing are essential to overcome these challenges and deliver a functional, user-friendly application."
    }],
};

export default info;
