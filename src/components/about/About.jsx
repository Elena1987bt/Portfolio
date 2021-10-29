import me from '../../img/myself.jpg';
import './about.css';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img src={me} alt="" className="about-img" />
          </div>
        </div>
        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-sub">
            Hello! My name is Elena Ackovska. I come from Bitola, Republic of
            Macedonia. I am 34 years old. I am married and I have two children.
          </p>
          <p className="about-sub">
            I have graduated at the faculty of law. I also have master of
            political science degree.
          </p>
          <p className="about-desc">
            I switched my carrier in web development because I find it very
            interesting and fun. I took the six-month full stack web development
            course in FOO CODING - Malmö, Sweden. I also took some Udemy courses
            to improve and straighten my skills in web development. I don't have
            experience in a software development company, but I do have
            experience in coding by doing some projects by myself.
          </p>
        </div>
      </div>
      <div className="about-shape"></div>
    </div>
  );
};

export default About;
