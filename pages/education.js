import React from 'react';
import Head from 'next/head';

import Page from '../src/components/Page';

const Education = () => {
  return (
    <div>
      <Head>
        <title>Education | NESH AMLANI</title>
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
      </Page>
    </div>
  )
};

export default Education;