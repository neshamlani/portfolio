import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useRef } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  Button,
  NavItem,
} from "reactstrap";

import me from "../src/assetes/me.jpg";
import github from "../src/assetes/github.png";
import linkedin from "../src/assetes/linkedin.png";
import twitter from "../src/assetes/twitter.png";
import { skillsList } from "../src/constants/skillList";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const aboutMeRef = useRef();
  const experienceRef = useRef();
  const educationRef = useRef();
  const skillsRef = useRef();
  const contactMeRef = useRef();

  const toggle = () => setIsOpen(!isOpen);

  const aboutMeScroll = () => {
    aboutMeRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const experienceScroll = () => {
    experienceRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const educationScroll = () => {
    educationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const skillScroll = () => {
    skillsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const contactMeScroll = () => {
    skillsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const InfoChip = ({ src, title }) => (
    <div className="chips">
      <Image src={src} width={30} height={30} layout='fixed' alt={title}/>
      <div className="fs-6">{title}</div>
    </div>
  );

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <title>NESH AMLANI</title>
        <meta name="description" content="Currently developing using ReactJS & NextJS, while enhancing skills for BackEnd and Flutter." />
        <meta name="author" content="Nesh Amlani" />

        <meta property="og:title" content="Nesh Amlani" />
        <meta property="og:description" content="Currently developing using ReactJS & NextJS, while enhancing skills for BackEnd and Flutter." />
      </Head>
      <Navbar color="dark" dark expand="md" className="p-3">
        <NavbarBrand className="fw-bold fs-3">Nesh Amlani</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Button
                type="button"
                className="btn btn-dark"
                onClick={aboutMeScroll}
              >
                About Me
              </Button>
            </NavItem>
            <NavItem>
              <Button
                type="button"
                className="btn btn-dark ms-md-2"
                onClick={experienceScroll}
              >
                Experience
              </Button>
            </NavItem>
            <NavItem>
              <Button
                type="button"
                className="btn btn-dark ms-md-2"
                onClick={educationScroll}
              >
                Education
              </Button>
            </NavItem>
            <NavItem>
              <Button
                type="button"
                className="btn btn-dark ms-md-2"
                onClick={skillScroll}
              >
                Skills
              </Button>
            </NavItem>
            <NavItem>
              <Button
                type="button"
                className="btn btn-dark ms-md-2"
                onClick={contactMeScroll}
              >
                Contact Me
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="w-100 bg-dark text-white">
        <div className="container">
          {/* About Me */}
          <div className="row" ref={aboutMeRef}>
            <div className="col-md-6 p-4 p-md-5 d-flex flex-column justify-content-between">
              <div className="d-flex flex-column">
                <div className="fw-bold fs-1">Nesh Amlani</div>
                <div className="fs-3 mt-4">I develop dynamic websites</div>
                <div className="fs-6 mt-4">
                  Currently developing using ReactJS & NextJS, while enhancing
                  skills for BackEnd and Flutter.
                </div>
              </div>
              <div>
                <Button
                  className="btn btn-dark mt-4"
                  onClick={experienceScroll}
                >
                  Check out my work
                </Button>
              </div>
            </div>
            <div className="col-md-6 p-4 p-md-5">
              <Image src={me} alt="Nesh Amlani" className="w-75" width={420} height={420} layout='responsive' />
            </div>
          </div>
          {/* Work Experience */}
          <div className="row pt-5 pb-5" ref={experienceRef}>
            <div className="col-12">
              <div className="fs-1 fw-bold text-center">Work Experience</div>
              <div className="fs-3 mt-4">CipherNutz IT services:</div>
            </div>
            <div className="col-12 col-md-8">
              <div className="fs-5 mt-3">
                CipherNutz IT services is a IT service company providing Website
                and Hybrid App development services from scratch using new
                technologies such as ReactJS and NextJS.
              </div>
              <div className="fs-5">
                I have been working in CipherNutz IT services from
                September/2020 - Present. I have worked on many projects using
                many different technologies.
              </div>
            </div>
            <div className="row mt-5 d-flex justify-content-center">
              <div className="col-md-4 text-center p-4">
                <div className="fs-3 fw-bold">Back-End Developer</div>
                <div className="fs-5 mt-3">
                  I am learning Back-End development in NodeJS to became
                  Full-Stack Developer.
                </div>
                <div className="mt-4 fs-4">Language:</div>
                <div className="text-start">
                  <div className="fs-5">Javascript, NodeJS, ExpressJS</div>
                </div>
              </div>
              <div className="col-md-4 text-center p-4">
                <div className="fs-3 fw-bold">Front-End Developer</div>
                <div className="fs-5 mt-3">
                  I like to code things from scratch, and enjoy bringing ideas
                  to life in the browser.
                </div>
                <div className="mt-4 fs-4">Language:</div>
                <div className="text-start">
                  <div className="fs-5">
                    Javascript, ReactJS, NextJS, HTML, CSS, SASS
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center p-4">
                <div className="fs-3 fw-bold">Flutter Developer</div>
                <div className="fs-5 mt-3">
                  I like Hybrid App developer and so have started learning
                  Flutter Development.
                </div>
                <div className="mt-4 fs-4">Language:</div>
                <div className="text-start">
                  <div className="fs-5">Dart</div>
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div className="row pb-5" ref={educationRef}>
            <div className="col-12">
              <div className="fs-1 fw-bold text-center">Education</div>
              {/* Computer Engineering */}
              <div className="mt-4">
                <span className="fs-3">
                  <b>Marwadi University</b>
                </span>
                <span className="fs-5">
                  , Rajkot - Bachelor In Computer Engineering
                </span>
              </div>
              <div className="fs-5 mt-3 d-flex flex-column ms-md-3">
                <span>Duration of study: 2017-2021</span>
                <span>Total CPI: 9.04.</span>
              </div>
              {/* Romania */}
              <div className="mt-4">
                <span className="fs-3">
                  <b>University Of Pitesti</b>
                </span>
                <span className="fs-5">
                  , Romania — Bachelor In Computer Engineering
                </span>
              </div>
              <div className="fs-5 mt-3 d-flex flex-column ms-md-3">
                <span>Duration of study: October 2018 - January 2019,</span>
                <span>
                  3rd Semester completed at University Of Pitesti. By the help
                  of a student exchange program known as ERASMUS+.
                </span>
              </div>
              {/* 12th grade */}
              <div className="mt-4">
                <span className="fs-3">
                  <b>Kendriya Vidyalaya INS Valsura</b>
                </span>
                <span className="fs-5">, Jamnagar — 12 th Grade</span>
              </div>
              <div className="fs-5 mt-3 d-flex flex-column ms-md-3">
                <span>Completion Year: 2017,</span>
                <span>Secured 73%.</span>
              </div>
              {/* 10th grade */}
              <div className="mt-4">
                <span className="fs-3">
                  <b>Kendriya Vidyalaya INS Valsura</b>
                </span>
                <span className="fs-5">, Jamnagar — 10 th Grade</span>
              </div>
              <div className="fs-5 mt-3 d-flex flex-column ms-md-3">
                <span>Completion Year: 2015,</span>
                <span>Secured 80.5%.</span>
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className="row pb-5" ref={skillsRef}>
            <div className="col-12">
              <div className="fs-1 fw-bold text-center">Skills</div>
              <div className="d-flex justify-content-center flex-wrap">
                {skillsList.map((skill) => (
                  <InfoChip src={skill.src} title={skill.title} />
                ))}
              </div>
            </div>
          </div>
          {/* Contact me */}
          <div className="row pb-5" ref={contactMeRef}>
            <div className="col-12 mb-2">
              <div className="fs-1 fw-bold text-center">Contact Me</div>
            </div>
            <div className="col-md-6 fs-5">
              <div className="d-flex flex-column">
                <div className="mb-4">Reach Out To Me</div>
                <div className="fs-5">
                  Phone Number:{" "}
                  <a
                    href="tel:7043733177"
                    className="text-decoration-none text-light"
                  >
                    7043733177
                  </a>
                </div>
                <div className="fs-5">
                  Email:{" "}
                  <a
                    href="mailto:neshamlani1970@gmail.com"
                    className="text-decoration-none text-light"
                  >
                    neshamlani1970@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 fs-5">
              <div className="d-flex flex-column">
                <div className="mb-4">Connect With Me</div>
                <div className="d-flex">
                  <a
                    href="https://github.com/neshamlani"
                    target="_blank"
                    rel="noreferrer"
                    className="chipsImg"
                  >
                    <Image src={github} width={30} height={30} layout='fixed' />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/neshamlani1970/"
                    target="_blank"
                    rel="noreferrer"
                    className="chipsImg"
                  >
                    <Image src={linkedin} width={30} height={30} layout='fixed' />
                  </a>
                  <a
                    href="https://twitter.com/groot_1970"
                    target="_blank"
                    rel="noreferrer"
                    className="chipsImg"
                  >
                    <Image src={twitter} width={30} height={30} layout='fixed' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
