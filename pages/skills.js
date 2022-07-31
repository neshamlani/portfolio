import React from "react";
import Image from "next/image";
import Head from "next/head";

import Page from "../src/components/Page";

import { skillsList } from "../src/constants/skillList";

const Skills = () => {
  const InfoChip = ({ src, title }) => (
    <div className="chips">
      <Image src={src} width={30} height={30} layout="fixed" alt={title} />
      <div className="fs-6">{title}</div>
    </div>
  );
  return (
    <div>
      <Head>
        <title>Skills | NESH AMLANI</title>
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
        <div className="row pb-5">
          <div className="col-12">
            <div className="fs-1 fw-bold text-center">Skills</div>
            <div className="d-flex justify-content-center flex-wrap">
              {skillsList.map((skill) => (
                <InfoChip
                  src={skill.src}
                  title={skill.title}
                  key={skill.title}
                />
              ))}
            </div>
          </div>
          <div className="col-12 mt-5">
            <div className="fs-1 fw-bold text-center">Research Paper</div>
            <div className="d-flex justify-content-center flex-wrap">
              Wrote a research paper on
              <a
                href="http://bulletin.feccupit.ro/archive/view/2018_2_4.html"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: 5, color: "#fff" }}
              >
                TESTING NETWORK SECURITY USING KALI LINUX.
              </a>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Skills;
