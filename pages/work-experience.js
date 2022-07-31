import React from "react";
import Head from "next/head";

import Page from "../src/components/Page";

const WorkExperience = () => {
  return (
    <div>
      <Head>
        <title>Experience | NESH AMLANI</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="description"
          content="Currently developing using ReactJS & NextJS, while enhancing skills for BackEnd and Flutter."
        />
        <meta name="author" content="Nesh Amlani" />
        <meta
          name="google-site-verification"
          content="wvMP8u5OEj3LMEgQM5naUQZoV31zkD28erSViRc1FAY"
        />
        <meta property="og:title" content="Nesh Amlani" />
        <meta
          property="og:description"
          content="Currently developing using ReactJS & NextJS, while enhancing skills for BackEnd and Flutter."
        />
      </Head>
      <Page>
        <div className="row pt-5 pb-5">
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
              I have been working in CipherNutz IT services from September/2020
              - March 2022. I have worked on many projects using many different
              technologies.
            </div>
          </div>
          <div className="col-12">
            <div className="fs-3 mt-4">MuCrest:</div>
          </div>
          <div className="col-12 col-md-8">
            <div className="fs-5 mt-3">
              MuCrest is a IT service company providing Website and Hybrid App
              development services from scratch using new technologies such as
              ReactJS and NextJS.
            </div>
            <div className="fs-5">
              I have been working in MuCrest from April/2022 - Present. I have
              worked on many projects using many different technologies.
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
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
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
                I like Hybrid App developer and so have started learning Flutter
                Development.
              </div>
              <div className="mt-4 fs-4">Language:</div>
              <div className="text-start">
                <div className="fs-5">Dart</div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default WorkExperience;
