import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  const images: ReadonlyArray<ReactImageGalleryItem> = [
    {
      original: "/images/gallery/1.jpg",
    },
    {
      original: "/images/gallery/2.jpg",
    },
    {
      original: "/images/gallery/3.jpg",
    },
    {
      original: "/images/gallery/4.jpg",
    },
    {
      original: "/images/gallery/5.jpg",
    },
    {
      original: "/images/gallery/6.jpg",
    },
    {
      original: "/images/gallery/7.jpg",
    },
    {
      original: "/images/gallery/8.jpg",
    },
    {
      original: "/images/gallery/9.jpg",
    },
  ];

  const [msgBoxVisible, setMsgBoxVisible] = React.useState<boolean>();

  const onClickCopy = async (id: string) => {
    const ta = document.querySelector("#copy") as HTMLInputElement;
    ta.value = document.querySelector(`#${id}`).innerHTML;
    ta.focus();
    ta.select();
    document.execCommand("copy");
    if (window.getSelection) window.getSelection().removeAllRanges();

    setMsgBoxVisible(true);

    setTimeout(() => {
      setMsgBoxVisible(false);
    }, 1000);
  };

  return (
    <main className={styles["section-parent"]}>
      <section id="splash" className={`${styles.splash} ${styles.flex}`}>
        <h1>ASKOP</h1>
        <h2>Usługi koparko-ładowarką</h2>
        <button
          onClick={() => {
            document
              .querySelector("#info")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className={styles["continue-button"]}
        >
          Informacje
        </button>
      </section>
      <section id="info" className={`${styles.info} ${styles.flex}`}>
        <div>
          <p>
            Nasza firma od wielu lat oferuje usługi sprzętem budowlanym.
            Pracujemy na koparko-ładowarkach JCB 3cx oraz JCB 4cx.
          </p>
          <p>
            Ciągle się rozwijamy a nasze wieloletnie doświadczenie pozwala na
            świadczenie szerokiej gamy usług związanych z robotami ziemnymi czy
            pracami drogowymi.
          </p>
          <p>
            Zatrudniamy tylko operatorów z doświadczaniem – z nami nie tracisz
            czasu.
          </p>
          <p>
            Usługi wykonujemy na terenie Olsztyna i okolic. Zapraszamy do
            współpracy.
          </p>
          <p>
            Nasze koparko-ładowarki posiadają łyżki na szybko-złączu 40;50;60;90
            oraz skarpową 150cm.
          </p>
        </div>
        <div className={styles.images}>
          <ImageGallery showThumbnails={false} items={images}></ImageGallery>
        </div>
      </section>
      <section className={`${styles.info} ${styles.offer} ${styles.flex}`}>
        <div>
          <h1>Wykonujemy:</h1>
          <ul>
            <li>przygotowanie terenu pod budowę</li>
            <li>niwelacje terenu</li>
            <li>wykopy pod fundamenty, szamba</li>
            <li>zasypywanie fundamentów</li>
            <li>wykopy pod sieci wod-kan</li>
            <li>załadunki i rozładunki na widłach</li>
            <li>załadunek i wywóz ziemi.</li>
          </ul>
          <p>
            W sezonie zimowym zajmujemy się również odśnieżaniem oraz wywozem
            śniegu.
          </p>
          <p>
            Prace wykonujemy dla klientów indywidualnych jak i firm. Zapewniamy
            terminowość zadawanych prac, solidne i fachowe wykonanie.
          </p>
          <p>Wycena usług po kontakcie telefonicznym bądź mailowym.</p>
        </div>
        <div>
          <video controls src="/videos/video.mp4"></video>
        </div>
      </section>

      <section className={`${styles.info} ${styles.contact} ${styles.flex}`}>
        <div>
          <h1>Kontakt:</h1>
          <p>
            Adres email:{" "}
            <a
              id="copyable_email"
              onClick={() => {
                onClickCopy("copyable_email");
              }}
              className="copyable"
            >
              kontakt@askopolsztyn.pl
            </a>
          </p>
          <p>
            Nr telefonu:{" "}
            <a
              id="copyable_phone"
              onClick={() => {
                onClickCopy("copyable_phone");
              }}
              className="copyable"
            >
              608 570 575
            </a>
          </p>
          <h6>(Kliknij, aby skopiować)</h6>
        </div>
        <div>
          <img className="ad" src="./images/adb.jpg" />
        </div>
      </section>
      <footer>&copy; 2021 ASKOP Olsztyn</footer>

      <textarea id="copy"></textarea>

      <div
        id="msgbox"
        className={msgBoxVisible ? "msgbox-fadein" : "msgbox-fadeout"}
        onClick={() => {
          setMsgBoxVisible(false);
        }}
      >
        <span>Skopiowano do schowka</span>
      </div>
    </main>
  );
};
export default Home;
