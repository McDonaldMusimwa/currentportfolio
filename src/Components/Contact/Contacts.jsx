import Data from "../../assets/projects";
import arrow from "../../assets/arrow.png";
import styles from "./Contacts.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const [active, setActive] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setActive(true)
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICEID,
        import.meta.env.VITE_TEMPLATEID,
        e.target,
        import.meta.env.VITE_PUBLICKEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
      setActive(false)
    e.target.reset();
  };
  return (
    <div className={styles.Contact}>
      <div className={styles.Text}>
        <h2> Contact</h2>
        <span>
          <h3>Reach Out to me</h3>
        </span>
        <p>+27 67 103 3055</p>
        <p>mcdonald.musimwa100@gmail.com</p>
        <div className={styles.Socials}>
          {Data.socials.map((social) => {
            return (
              <a href={social.link} key={social.key}>
                {social.label}{" "}
              </a>
            );
          })}
        </div>
      </div>
      <form ref={form} className={styles.form} onSubmit={sendEmail}>
        <h2>Any Work ?</h2>

        <input type="text" name="name" id="clientName" placeholder="Name" />

        <input
          type="email"
          name="clientEmail"
          id="clientEmail"
          placeholder="Email"
        />

        <textarea
          name="clientText"
          id="clientText"
          placeholder="Message"
        ></textarea>
        <button className={styles.ContactButton} onTouchStart={sendEmail}>
          {active ? "Sending..." : " Send Message"}
          <img src={arrow} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default Contacts;
