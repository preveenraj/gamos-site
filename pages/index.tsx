import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Icon from '@comp/Icon';
import { getDatabase, ref, set, onValue } from 'firebase/database';

const Home: NextPage = () => {
  const [icons, setIcons] = useState<any>([]);
  const [likeAnimation, setLikeAnimation] = useState(false);
  const [likeCount, setLikeCount] = useState('-');
  const [daysRemaining, setDaysRemaining] = useState('-');
  const [audio, setAudio] = useState<HTMLAudioElement>({} as HTMLAudioElement);
  const database = getDatabase();

  const initializeAudio = () => {
    const sound = new Audio();
    sound.src = '/bgm_love.mp3';
    // set audio volume
    sound.volume = 0.1;
    sound.autoplay = true;
    setAudio(sound);
  };

  useEffect(() => {
    initializeAudio();
    addIconsToEvent();

    const starCountRef = ref(database, 'likes');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setLikeCount(data);
    });

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date();
    const secondDate = new Date(2022, 1, 6);

    const diffDays = Math.round(Math.abs((+firstDate - +secondDate) / oneDay));
    setDaysRemaining(diffDays + '');
  }, [database]);

  const addIconsToEvent = () => {
    const iconsArray = [];
    const iconCount = window.innerWidth < 500 ? 10 : window.innerWidth < 900 ? 30 : 50;
    for (let i = 0; i < iconCount; i++) {
      const iconNo = Math.floor(Math.random() * 9) + 1;
      iconsArray.push({
        key: 'key' + i,
        iconNo,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`,
          animationName: i % 2 === 0 ? 'tada' : 'swing',
          animationDuration: `${Math.random() * 5 + 2}s`,
        },
      });
    }

    setIcons(iconsArray);
  };

  const shareWishes = () => {
    if (typeof likeCount !== 'string') {
      const isLiked = localStorage.getItem('isLiked');
      setLikeAnimation(true);
      window.navigator.vibrate && window.navigator.vibrate(200);
      setTimeout(() => {
        setLikeAnimation(false);
      }, 1000);
      if (!isLiked) {
        set(ref(database, 'likes'), likeCount + 1);
      }
      localStorage.setItem('isLiked', 'true');
      if (!audio.paused) {
        audio.pause();
      } else {
        audio.play();
      }
    }
  };

  return (
    <>
      <Head>
        <title>Aswani Weds Vishnu</title>
        <meta name="description" content="We loved with a love that was more than love." />
      </Head>
      <div className="page" onDoubleClick={shareWishes}>
        <section className="landing">
   
          <h1 className="landing__name">Vishnu</h1>
          <h1 className="landing__name">Aswani</h1>

          <div className={`landing__likes ${likeAnimation ? 'landing__likes-active' : ''}`}>
            <div className="landing__likes-count">{likeCount}</div>
            <div className="landing__likes-icon">
              <Image src="/images/heart.svg" width="36" height="30" alt="likes" />
            </div>
          </div>

          <div className="landing__actions">
            <button className="landing__action-btn">
              <div>
                <a href="https://maps.app.goo.gl/h5QvKCrQV9i4FtSY9" className="" target="_blank" rel="noreferrer">
                  <Image src="/images/map.svg" width="32" height="32" alt="location" />
                </a>
              </div>
            </button>
            <div className="landing__action-countdown">
              <span className="landing__action-text">{daysRemaining} days</span>
              <span className="landing__action-text">Feb 6</span>
            </div>
          </div>
          <div className="waves__container">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className="parallax">
                <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(27, 155, 252,0.7" />
                <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(27, 155, 252,0.5)" />
                <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(27, 155, 252,0.3)" />
                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#1b9bfc" />
              </g>
            </svg>
          </div>
             <a 
        className="calendar_banner"
        rel="noopener noreferrer" target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MDN2Ymk3M3ZtbzhicWQ0YWg5cHRtNGIxb3IgYzBkMGhkOGQ2bjk3cDIzNWJmc3JnNGxlcTRAZw&tmsrc=c0d0hd8d6n97p235bfsrg4leq4%40group.calendar.google.com">
          <Image 
          src="/calendar_banner.png" 
          alt="Add to calendar"
          width="180"
          height="140"
          className='calendar_banner_icon'
          ></Image>
        </a>
        </section>

        <section className="youtube_embed_container">
          <iframe className="youtube_embed" src="https://www.youtube.com/embed/gsvtQwAkhF8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </section>

        <section className="save">
          {icons.map((icon: any) => (
            <Icon iconNo={icon.iconNo} key={icon.key} style={icon.style} />
          ))}

          <div className="save__text">
            <div className="save__text-left">Save the date</div>
            <div className="save__text-right">
              <span className="save__text-place">Near Ernakulam Siva Temple</span>
              <span className="save__text-date">Feb 6, 2022</span>
              <span className="save__text-event">they&apos;re getting married</span>
            </div>
          </div>
        </section>
      
        <footer className="footer">
        <a 
        className="add_to_calendar"
        rel="noopener noreferrer" target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=MDN2Ymk3M3ZtbzhicWQ0YWg5cHRtNGIxb3IgYzBkMGhkOGQ2bjk3cDIzNWJmc3JnNGxlcTRAZw&tmsrc=c0d0hd8d6n97p235bfsrg4leq4%40group.calendar.google.com">
          <Image 
          src="/addtocalendar.png" 
          alt="Add to calendar"
          width="76"
          height="76"
          className='calendar_icon'
          ></Image>
        </a>
          <div className="footer-wishes">
            Best wishes
            <span>-Ajay, Anjali &amp; Preveenraj</span>
          </div>
        </footer>

        <div className={`like-icon__outer ${likeAnimation ? 'like-icon__outer--active' : ''}`}>
          <Image src={'/images/like-heart-outer.svg'} alt="Like Animation" width={714} height={603} />
        </div>
        <div className={`like-icon__inner ${likeAnimation ? 'like-icon__inner--active' : ''}`}>
          <Image src={'/images/like-heart-inner.svg'} alt="Like Animation" width={592} height={468} />
        </div>
      </div>

      <audio className="audio"></audio>
    </>
  );
};

export default Home;
