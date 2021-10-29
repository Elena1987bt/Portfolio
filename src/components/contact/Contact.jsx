import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedIn.png';
import { useThemeContext } from '../../context';
import Form from '../form/Form';

const Contact = () => {
  const { state } = useThemeContext();
  const darkMode = state.darkMode;

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
              076 052 5506
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              elena.ackovska24@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              Dalbyvägen 36C Arlöv , Sweden
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
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
