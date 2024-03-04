import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import youtube from "../../../assets/youtube.png";
import Bars from "../../../assets/burger.png";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpened, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobile = windowWidth <= 600; // Adjust the breakpoint according to your needs

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpened);
  };



  return (
    <nav className={styles.NavMain}>
      {mobile ? (
        <div className={styles.MenuToggle} onClick={handleMenuToggle}>
          {menuOpened ? (
            <img
              src={Bars}
              alt="handleMenuToggle"
              className={styles.MenuIcon}
            />
          ) : (
            <span className={styles.CloseIcon}>X</span>
          )}
          <span className={styles.Name}>McDonald.</span>
        </div>
      ) : null}
      
      { !mobile || !menuOpened ? (
        <div
          className={`${styles.headermenu} ${
            menuOpened ? styles["is-open"] : ""
          }`}
        >
          <ul className={styles.NavTop}>
            <h2 onClick={navigateToHome}>McDonald.</h2>
            <NavLink
              onClick={() => setMenuOpen(!menuOpened)}
              to="/"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(!menuOpened)}
              to="about"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(!menuOpened)}
              to="services"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Technologies
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(!menuOpened)}
              to="works"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Works
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(!menuOpened)}
              to="blogs"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Blogs
            </NavLink>
            <NavLink
              onClick={() => setMenuOpen(!menuOpened)}
              to="contacts"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Contacts
            </NavLink>
          </ul>
          <ul className={styles.NavBottom}>
            <a
              onClick={() => setMenuOpen(false)}
              href="https://www.linkedin.com/in/mcdonaldmusimwa"
              title="LinkedIn icons"
            >
              <img className={styles.icon} src={linkedin} alt="LinkedIn" />
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="https://twitter.com/Mcdonal70309191"
              title="Twitter icons"
            >
              <img className={styles.icon} src={twitter} alt="Twitter" />
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig"
              title="YouTube icons"
            >
              <img className={styles.icon} src={youtube} alt="YouTube" />
            </a>
            <span className={styles.Copyright}>
              Copyright © 2023
              <br /> McDonald Musimwa.
            </span>
          </ul>
        </div>
      ):null}


    </nav>
  );
};

export default NavBar;
