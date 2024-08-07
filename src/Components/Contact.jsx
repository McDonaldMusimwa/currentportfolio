import styles from './Contact.module.css';
import Contacts from './Contact/Contacts';
import { useState,useEffect } from 'react';

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobile = windowWidth <= 600;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const screenSizeClass = mobile 
    ? styles.Contact 
    : 'ml-80 md:w-full md:ml-0 md:m-4';
  return (

    <div
      className={screenSizeClass}
      id='about'
    >
      <Contacts />


    </div>
  )
}

export default Contact