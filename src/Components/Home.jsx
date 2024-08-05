import Hero from "./Hero/Hero"
import styles from './Home.module.css';
import sql from "../assets/sql.svg"
import typescript from "../assets/typescript.svg";
import javascript from "../assets/javascript.svg";
import python from "../assets/python.svg";
import html from "../assets/html.png";
import css from "../assets/css.svg"
import react from "../assets/react.svg";
import nextjs from "../assets/next.svg";
import dotnet from "../assets/dotneticon.svg";
import tailwind from "../assets/tailwindcssicon.svg"
import csharp from "../assets/c-sharp.svg"
import git from "../assets/git.svg";
//import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook";
const Home = () => {
  return (
    <div className="w-full mx-4 md:w-full p-4" id="home">


      <Hero />

      <div className={`flex m-2 w-6/12 md:w-1/6 h-10 lg:ml-80 ${styles.Heroicons}`}>

        <img className="w-2" src={sql} alt="sql icon" />
        <img className="w-2" src={typescript} alt="typescript" />
        <img className="w-2" src={javascript} alt="javascript" />
        <img src={python} alt="python icon" />
        <img className="w-2" src={csharp} alt="cee sharp" />
        <img src={html} alt="html icon" />
        <img src={css} alt="css icon" />
        <img src={tailwind} alt="tailwind icon" />
        <img src={react} alt="react icon" />
        <img className="w-2" src={nextjs} alt="next js" />
        <img src={dotnet} alt="dotnet icon" />
        <img className="w-2" src={git} alt="cee sharp" />


      </div>
    </div>
  )
}

export default Home