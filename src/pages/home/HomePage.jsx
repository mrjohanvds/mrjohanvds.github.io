/* eslint-disable max-len */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './home.css';
import saturn from '../../ressources/images/home/saturn.png';
import uranus from '../../ressources/images/home/uranus.png';
import mars from '../../ressources/images/home/mars.png';
import earth from '../../ressources/images/home/terre.png';
import resume from '../../ressources/images/home/RESUME.png';
import projects from '../../ressources/images/home/PROJECTS.png';
import contact from '../../ressources/images/home/CONTACT.png';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const transStars = (x, y) => `translate3d(${x / 125}px,${y / 125}px,0)`;
const transUranus = (x, y) => `translate3d(${x / 75}px,${y / 75}px,0)`;
const transSaturn = (x, y) => `translate3d(${x / 67}px,${y / 67}px,0)`;
const transMars = (x, y) => `translate3d(${x / 50}px,${y / 50}px,0)`;
const transEarth = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const transContact = (x, y) => `translate3d(${x / 23}px,${y / 23}px,0)`;
const transResume = (x, y) => `translate3d(${x / 18}px,${y / 18}px,0)`;
const transProjects = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;

function HomePage() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 1000, friction: 140 } }));
  return (
    <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="background" />
      <animated.div className="stars" style={{ transform: props.xy.interpolate(transStars) }} />

      <animated.div className="uranus" style={{ transform: props.xy.interpolate(transUranus) }} >
        <img src={uranus} alt="uranus" />
      </animated.div>
      <animated.div className="saturn" style={{ transform: props.xy.interpolate(transSaturn) }} >
        <img src={saturn} alt="saturn" />
      </animated.div>
      <animated.div className="mars" style={{ transform: props.xy.interpolate(transMars) }} >
        <img src={mars} alt="mars" />
      </animated.div>
      <animated.div className="earth" style={{ transform: props.xy.interpolate(transEarth) }} >
        <img src={earth} alt="earth" />
      </animated.div>

      <animated.div className="resume" style={{ transform: props.xy.interpolate(transResume) }} >
        <a href="./resume"><img src={resume} alt="resume" /></a>
      </animated.div>
      <animated.div className="projects" style={{ transform: props.xy.interpolate(transProjects) }} >
        <a href="./projects"><img src={projects} alt="projects" /></a>
      </animated.div>
      <animated.div className="contact" style={{ transform: props.xy.interpolate(transContact) }} >
        <a href="./contact"><img src={contact} alt="contact" /></a>
      </animated.div>
    </div>
  )
}
export default HomePage;
