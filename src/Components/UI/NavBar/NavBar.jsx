import { useState } from 'react';
import styles from './NavBar.module.css';
import linkedin from '../../../assets/linkedin.png';
import twitter from '../../../assets/twitter.png';
import youtube from '../../../assets/youtube.png';
import Bars from '../../../assets/bars.png'; // Import the Bars component or replace it with an icon

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const mobile = window.innerWidth <= 768;
    const [menuOpened, setMenuOpen] = useState(false);

    return (
        <>
            <div className={styles.NavMain}>
                <span className={styles.Name}>McDonald.</span>
                {(!menuOpened && mobile) ? (
                    <div
                        style={{
                            backgroundColor: 'var(--appColor)',
                            padding: '0.5rem',
                            borderRadius: '5px',
                        }}
                        onClick={() => setMenuOpen(true)}
                    >
                        <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                    </div>
                ) : (
                    <div className={styles.headermenu}>
                        <nav className={styles.NavTop}>
                            <NavLink  onClick={() => setMenuOpen(false)} to="/">Home</NavLink>
                            <NavLink  onClick={() => setMenuOpen(false)} to="about">About</NavLink>
                            <NavLink  onClick={() => setMenuOpen(false)} to="services">Technologies</NavLink>
                            <NavLink  onClick={() => setMenuOpen(false)} to="works">Works</NavLink>
                            <NavLink  onClick={() => setMenuOpen(false)} to="blogs">Blogs</NavLink>
                            <NavLink  onClick={() => setMenuOpen(false)} to="contacts">Contacts</NavLink>
                        </nav>
                        <div className={styles.NavBottom}>
                            <a  onClick={() => setMenuOpen(false)} href="https://www.linkedin.com/in/mcdonaldmusimwa" title="linkedin icons">
                                <img className={styles.icon} src={linkedin} />
                            </a>
                            <a  onClick={() => setMenuOpen(false)} href="https://twitter.com/Mcdonal70309191" title="linkedin icons">
                                <img className={styles.icon} src={twitter} />
                            </a>
                            <a  onClick={() => setMenuOpen(false)} href="https://www.youtube.com/channel/UCjiAsiaKGKNKSck8i3iPZig" title="youtube icons">
                                <img className={styles.icon} src={youtube} />
                            </a>
                            <span>Copyright ©2023 McDonald Musimwa. All right reserved</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default NavBar;
