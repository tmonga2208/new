import React, { useRef ,useState } from 'react';
import NavBar from './navbar';
import Footer from './footer';
import styles from './css/contact.module.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
const [name, setName] = useState('');
const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_71i4i1q', 'template_1zvezgk', form.current, {
        publicKey: 'DIHlvXTN3hOjikORT',
        user_name: name,
        user_email: email,
      })
      .then(
        () => {
            alert("Email sent successfully!")
          console.log('SUCCESS!');
        },
        (error) => {
            alert("Email failed to send!")
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <NavBar/>
      <h1 className={styles.contit}>Contact Us</h1>
      <div className={styles.ContactForm}>
        <form ref={form} onSubmit={sendEmail}>
          <label>
            Name:
            <input className={styles.in} type="text" name="user_name" required onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Email:
            <input className={styles.in} type="email" name="user_email" required onChange={e => setEmail(e.target.value)}/>
          </label>
          <label>
            Message:
            <textarea className={styles.in} name="message" required />
          </label>
          <input className={styles.but} type="submit" value="Send" />
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactForm;