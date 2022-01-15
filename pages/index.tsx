import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aswani Weds Vishnu</title>
        <meta
          name="description"
          content="We loved with a love that was more than love."
        />
      </Head>
      <div className="page">
        <section className="landing">
          <h1 className="landing__name">Vishnu</h1>
          <h1 className="landing__name">Aswani</h1>

          <div className="landing__likes">
            <div className="landing__likes-count">172</div>
            <div className="landing__likes-icon">
              <Image
                src="/images/heart.svg"
                width="32"
                height="36"
                alt="likes"
              />
            </div>
          </div>

          <div className="landing__actions">
            <button className="landing__action-btn">
              <div>
              <Image
                src="/images/map.svg"
                width="32"
                height="32"
                alt="location"
              />
              </div>
            </button>
            <div className="landing__action-countdown">
              <span className="landing__action-text">
                21 days
              </span>
              <span className="landing__action-text">
                Feb 6
              </span>
            </div>
          </div>
        </section>

        <section className="">

        </section>
        <footer className="footer">
          <div className="footer-wishes">
            Best wishes
            <span>-Ajay, Anjali & Preveenraj</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
