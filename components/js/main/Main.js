import homeBgImg from "/_repos/portfolio/components/images/hero-bg.jpg";
import contactBgImg from "/_repos/portfolio/components/images/contact-bg.jpg";
import Image from "next/image";
import styles from "../../../styles/css/Main.module.css";

function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.main_home}>
        <Image
          alt="travel"
          src={homeBgImg}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={styles.main_about}>about</div>
      <div className={styles.main_work}>work</div>
      <div className={styles.main_contact}>contact</div>
    </section>
  );
}

export default Main;
