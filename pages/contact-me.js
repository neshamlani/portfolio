import React from 'react';
import Image from 'next/image'
import Head from 'next/head';

import Page from '../src/components/Page';
import github from "../src/assetes/github.png";
import linkedin from "../src/assetes/linkedin.png";
import twitter from "../src/assetes/twitter.png";

const ContactMe = () => {
  return (
    <div>
      <Head>
        <title>Contact Me | NESH AMLANI</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content="Currently developing using ReactJS & NextJS, while enhancing skills for BackEnd and Flutter." />
        <meta name="author" content="Nesh Amlani" />
        <meta name="google-site-verification" content="wvMP8u5OEj3LMEgQM5naUQZoV31zkD28erSViRc1FAY" />
        <meta property="og:title" content="Nesh Amlani" />
        <meta property="og:description" content="Currently developing using ReactJS & NextJS, while enhancing skills for BackEnd and Flutter." />
      </Head>
      <Page>
        <div className="row pb-5">
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
                  <Image src={github} width={30} height={30} layout='fixed' alt='Github' />
                </a>
                <a
                  href="https://www.linkedin.com/in/neshamlani1970/"
                  target="_blank"
                  rel="noreferrer"
                  className="chipsImg"
                >
                  <Image src={linkedin} width={30} height={30} layout='fixed' alt='LinkedIn' />
                </a>
                <a
                  href="https://twitter.com/groot_1970"
                  target="_blank"
                  rel="noreferrer"
                  className="chipsImg"
                >
                  <Image src={twitter} width={30} height={30} layout='fixed' alt='Twitter' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  )
};

export default ContactMe;