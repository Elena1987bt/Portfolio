import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedIn.png';
import { useRef, useState } from 'react';
//import emailjs from 'emailjs-com';
import { useThemeContext } from '../../context';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const { state } = useThemeContext();
  const darkMode = state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     'service_rrvnzco',
    //     'template_3v5nih4',
    //     formRef.current,
    //     'user_DrriDPTGKO2Zj4RDXCA6W'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setDone(true);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div
      className="contact"
      id="contact"
      style={{
        background:
          darkMode &&
          "url('https://ak.picdn.net/shutterstock/videos/1024770461/thumb/11.jpg')",
      }}
    >
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact me</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              076 052 5504
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              elena.ackovska24@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              Dalbyvagen 36C Arlov, Sweden
            </div>
            <a
              href="https://github.com/Elena1987bt"
              className="contact-info-item link"
              target="_blank"
              rel="noreferrer nofollow"
            >
              <img className="contact-icon " src={Github} alt="" />
              My Github account
            </a>
            <a
              href="https://www.linkedin.com/in/elena-ackovska-348b39205/ "
              target="_blank"
              rel="noreferrer nofollow"
              className="contact-info-item link"
            >
              <img className="contact-icon" src={LinkedIn} alt="" />
              My LinkedIn account
            </a>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            <b>Want to hire me?</b> Get in touch. Send me a message or call me
            on my phone. I am looking forward to hear from you!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode && '#333' }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && 'Thank you...'}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
