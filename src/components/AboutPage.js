import React from 'react';
import Anime from 'react-anime';
import CustomScroll from 'react-custom-scroll';
import BackToHomeBtn from './BackToHomeBtn';
import '../styles/customScroll.css';
import '../styles/AboutPage.css';

const AboutPage = props => {
  return(
    <Anime easing="easeOutCubic" opacity={[0, 1]} translateY={-30} duration={400} delay={300}>
      <div className="about-page">
          <BackToHomeBtn handleClick={props.returnBtn}/>
          <Anime easing="easeOutCubic" left={[-350, -150]} duration={500} delay={800}>
            <p className="page-tag">About Me</p>
          </Anime>
          <CustomScroll heightRelativeToParent="calc(100% - 20px)">
            <div className="page-content">
              <p>Hi there! <span className="hand-wave">👋</span></p>
              <h1>I'm Afiur Rahman Fahim.</h1>
              <p>But that's quite long! So, I like to use <strong>Faahim.</strong> :)</p>
              <p>I'm a 22-year-old developer based in Bangladesh. I specialize in JavaScript and my main area of interest is Front-End Development. I LOVE developing tools/sites that solve real problems or help make someone's life easier. In short, I like impactful work.</p>
              <h3>Skills</h3>
              <p>I believe in tool agonistic skills. Being in an industry that moves at the speed of light, it sometimes doesn't matter what frameworks/tools I'm familiar with. Because tools/frameworks are so fickle these days that they can become obsolete within months! What matters more is how fast can I learn and make myself comfortable with newer technology. I believe I'm a quick learner. I prioritize concepts over techniques.</p>
              <p>However, my current skill set includes <strong>JavaScript</strong>, <strong>React</strong>, <strong>Redux</strong>, <strong>Firebase</strong>, <strong>SASS</strong>, <strong>Bootstrap</strong>, <strong>CSS</strong>, <strong>HTML</strong> etc. And that's excluding all the common (yet sometimes complex) build/workflow tools like Webpack, Babel etc. And oh, No progress bar showing I'm 93% expert at React, Sorry.</p>
              <p>Simplicity, Though overused (and sometimes misused) as a term, Is something I really value. I like to build solutions that are simple yet interactive for the users.</p>
              <p>Besides coding, I'm also very passionate about traveling and reading. I feel like the world is a book that was given to me for exploring when I was born, and I don't wanna die before reading all the pages. I plan to become a nomad someday and explore the endless beauty that this planet homes.</p>
            </div>
          </CustomScroll>
      </div>
    </Anime>
  )
}

export default AboutPage;