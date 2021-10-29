import React from 'react';
import Me from '../../img/me.png';
import AnimatedShapes from '../animatedShapes/AnimatedShapes';
import { useThemeContext } from '../../context';
import './intro.css';

const Intro = () => {
  const { state } = useThemeContext();
  const darkMode = state.darkMode;
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-text">Hello, My name is</h2>
          <h1 className="intro-name">Elena Ackovska</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Junior Web Developer</div>
              <div className="intro-title-item">HTML/CSS</div>
              <div className="intro-title-item">JavaScript</div>
              <div className="intro-title-item">React</div>
              <div className="intro-title-item">Node.js/Express.js</div>
              <div className="intro-title-item">MongoDB</div>
            </div>
          </div>
          <p className="intro-desc">
            I design and develop modern websites and web application using HTML,
            CSS, JavaScript and React for the front-end and Node.js, Express.js
            and MongoDB for the back-end.
          </p>
        </div>
        <a href="#about" className="intro-scroll">
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            className="intro-scroll"
            fill="none"
            stroke={darkMode ? 'white' : 'black'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                strokeWidth="2.9895"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div className="intro-right">
        <img src={Me} alt="Elena Ackovska" />
      </div>
      <AnimatedShapes />
    </div>
  );
};

export default Intro;
