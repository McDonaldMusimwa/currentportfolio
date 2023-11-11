import Data from '../../assets/projects';
import arrow from '../../assets/arrow.png'
import styles from './Contacts.module.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';








const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e)
        emailjs.sendForm( import.meta.env.VITE_SERVICEID,
            import.meta.env.VITE_TEMPLATEID,
            e.target,
            import.meta.env.VITE_PUBLICKEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    };
    return (
        <div className={styles.Contact}>
            <div className={styles.Text} >
                Contact
                <span><strong>Reach Out to me</strong></span>
                <p><strong>+27 67 103 3055</strong></p>
                <p><strong>mcdonald.musimwa100@gmail.com</strong></p>
                <div className={styles.Socials}>{Data.socials.map((social) => {
                    return <a href={social.link} key={social.key}>{social.label} </a>
                })}</div>
            </div>
            <form ref={form} className={styles.form} onSubmit={sendEmail}>
                <h2>Any Work ?</h2>

                <input type="text" name="name" id="clientName" placeholder="Name" />

                <input type="email" name="clientEmail" id="clientEmail" placeholder="Email" />

                <textarea name="clientText" id="clientText" placeholder="Message"></textarea>
                <button>Send Message<img src={arrow} alt='arrow'/></button>

            </form>
        </div>
    )
}

export default Contacts