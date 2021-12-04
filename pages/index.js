import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { Button } from "reactstrap";

import me from "../src/assetes/me.jpg";
import Page from '../src/components/Page';

const App = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>NESH AMLANI</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content="Currently developing using ReactJS & NextJS, while enhancing skills for BackEnd and Flutter." />
        <meta name="author" content="Nesh Amlani" />
        <meta name="google-site-verification" content="wvMP8u5OEj3LMEgQM5naUQZoV31zkD28erSViRc1FAY" />
        <meta property="og:title" content="Nesh Amlani" />
        <meta property="og:description" content="Currently developing using ReactJS & NextJS, while enhancing skills for BackEnd and Flutter." />
      </Head>
      <Page>
        <div className="row">
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
                onClick={() => router.push('/work-experience')}
              >
                Check out my work
              </Button>
            </div>
          </div>
          <div className="col-md-6 p-4 p-md-5">
            <Image src={me} alt="Nesh Amlani" className="w-75" width={420} height={420} layout='responsive' />
          </div>
        </div>
      </Page>
    </>
  );
};

export default App;
