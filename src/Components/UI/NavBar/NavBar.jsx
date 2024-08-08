import { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

import { NavLink, useNavigate } from "react-router-dom";
import { VscHome, VscInfo, VscBriefcase, VscMail } from "react-icons/vsc";
/*
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
    <nav className="fixed ">
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

      {!mobile || !menuOpened ? (
        <div
          className={`${styles.headermenu} ${menuOpened ? styles["is-open"] : ""
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
              to="works"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Works
            </NavLink>
          
            <NavLink
              onClick={() => setMenuOpen(!menuOpened)}
              to="contacts"
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Contacts
            </NavLink>
          </ul>

        </div>
      ) : null}


    </nav>
  );
};

export default NavBar;
*/

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

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (<>
    {mobile ? (<nav className={`bg-black-500 text-white ${styles.navBar}`}>



      <ul className={styles.navList}>
        <li>
          <span  onClick={navigateToHome} className={styles.Name}>McDonald.</span>
        </li>
        <li >
        <NavLink 
        to="/" 
        className={({ isActive }) => 
          `${styles.navlink} ${isActive ? 'text-yellow-400' : ''}`
        }
      >
            <VscHome size={24} />
          </NavLink>
        </li>
        <li >
          <NavLink to="about"  className={({ isActive }) => 
            `${styles.navlink} ${isActive ? 'text-yellow-400' : ''}`
          }>
            <VscInfo size={24} />
          </NavLink>
        </li>
        <li >
          <NavLink to="works"  className={({ isActive }) => 
            `${styles.navlink} ${isActive ? 'text-yellow-400' : ''}`
          }>
            <VscBriefcase size={24} />
          </NavLink>
        </li>
        <li >
          <NavLink to="contacts"  className={({ isActive }) => 
            `${styles.navlink} ${isActive ? 'text-yellow-400' : ''}`
          }>
            <VscMail size={24} />
          </NavLink>
        </li>

      </ul>



    </nav>) : (<nav>
      <div
        className={`${styles.headermenu} ${menuOpened ? styles["is-open"] : ""
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
            to="works"
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            Works
          </NavLink>

          <NavLink
            onClick={() => setMenuOpen(!menuOpened)}
            to="contacts"
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            Contacts
          </NavLink>
        </ul>

      </div>


    

    </nav>)}


  </>





  );
};

export default NavBar;
