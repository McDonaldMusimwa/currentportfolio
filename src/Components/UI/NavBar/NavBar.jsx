import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import youtube from "../../../assets/youtube.png";
import Bars from "../../../assets/bars.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpened, setMenuOpen] = useState(false);

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
      {(!menuOpened || !mobile) && (
        <div
          className={`${styles.headermenu} ${
            menuOpened ? styles["is-open"] : ""
          }`}
        >
          <ul className={styles.NavTop}>
            <NavLink onClick={() => setMenuOpen(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="about">
              About
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="services">
              Technologies
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="works">
              Works
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="blogs">
              Blogs
            </NavLink>
            <NavLink onClick={() => setMenuOpen(false)} to="contacts">
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
              Copyright © 2023 McDonald Musimwa.
            </span>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
