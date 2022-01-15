import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "@comp/Icon";
import { getDatabase, ref, set, onValue } from "firebase/database";

const Home: NextPage = () => {
  const [icons, setIcons] = useState([]);
  const [likeAnimation, setLikeAnimation] = useState(false);
  const [likeCount, setLikeCount] = useState("-");

  const database = getDatabase();

  useEffect(() => {
    addIconsToEvent();

    const starCountRef = ref(database, "likes");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setLikeCount(data);
    });
  }, []);

  const addIconsToEvent = () => {
    const iconsArray = [];
    const iconCount =
      window.innerWidth < 500 ? 10 : window.innerWidth < 900 ? 30 : 50;
    for (let i = 0; i < iconCount; i++) {
      const iconNo = parseInt(Math.random() * 9) + 1;
      iconsArray.push({
        key: "key" + i,
        iconNo,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`,
          animationName: i % 2 === 0 ? "tada" : "swing",
          animationDuration: `${Math.random() * 5 + 2}s`,
        },
      });
    }

    setIcons(iconsArray);
  };

  const shareWishes = () => {
    const isLiked = localStorage.getItem("isLiked");

    setLikeAnimation(true);
    setTimeout(() => {
      setLikeAnimation(false);
    }, 1000);
    if (!isLiked) {
      set(ref(database, 'likes'), (likeCount + 1));
    }
    localStorage.setItem("isLiked", "true");
  };

  return (
    <>
      <Head>
        <title>Aswani Weds Vishnu</title>
        <meta
          name="description"
          content="We loved with a love that was more than love."
        />
      </Head>
      <div className="page" onDoubleClick={shareWishes}>
        <section className="landing">
          <h1 className="landing__name">Vishnu</h1>
          <h1 className="landing__name">Aswani</h1>

          <div className="landing__likes">
            <div className="landing__likes-count">{likeCount}</div>
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
              <span className="landing__action-text">21 days</span>
              <span className="landing__action-text">Feb 6</span>
            </div>
          </div>
        </section>

        <section className="save">
          {icons.map((icon) => (
            <Icon iconNo={icon.iconNo} key={icon.key} style={icon.style} />
          ))}

          <div className="save__text">
            <div className="save__text-left">Save the date</div>
            <div className="save__text-right">
              <span className="save__text-place">
                Near Ernakulam Sava Temple
              </span>
              <span className="save__text-date">Feb 6, 2022</span>
              <span className="save__text-event">they're getting married</span>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-wishes">
            Best wishes
            <span>-Ajay, Anjali & Preveenraj</span>
          </div>
        </footer>

        <div
          className={`like-icon__outer ${
            likeAnimation ? "like-icon__outer--active" : ""
          }`}
        >
          <Image
            src={"/images/like-heart-outer.svg"}
            alt="Like Animation"
            width={714}
            height={603}
          />
        </div>
        <div
          className={`like-icon__inner ${
            likeAnimation ? "like-icon__inner--active" : ""
          }`}
        >
          <Image
            src={"/images/like-heart-inner.svg"}
            alt="Like Animation"
            width={592}
            height={468}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
