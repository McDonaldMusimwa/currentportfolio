import Data from "../../assets/projects";
import arrow from "../../assets/arrow.png";
import styles from "./Contacts.module.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
 
  const [error,setError] = useState(false);
  const [success,setSuccess] = useState(false)
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
          
          
          setName("");
        
          setError(false)
          setSuccess(true)
         
        },
        (error) => {
          
          setError(true)
          setSuccess(false)
          
        },
      );
      setActive(false)
      setMessage('')
    e.target.reset();
  };
  return (
    <div className={styles.Contact}>
      <div className={styles.Text}>
        
        
          <h3>Reach Out to me</h3>
       
        <div className="text-left">
        <p className="m-4 p-2">📱 +27 67 103 3055</p>
        <p className="m-4 p-2">📧 mcdonald.musimwa100@gmail.com</p>
        </div>
   
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
      <form ref={form} className={`w-full md:w-2/5 ${styles.form}`} onSubmit={sendEmail}>
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
      {error && <p className="text-red-500 font-bold">{message}</p>}
      {success && <p className="text-green-500 font-bold">{message}</p>}
    </div>
  );
};

export default Contacts;
