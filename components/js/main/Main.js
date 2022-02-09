import homeBgImg from "/_repos/portfolio/components/images/hero-bg.jpg";
import contactBgImg from "/_repos/portfolio/components/images/contact-bg.jpg";
import Image from "next/image";
import styles from "../../../styles/css/Main.module.css";

function Main() {
  return (
    <section className={styles.main}>
      <section className={styles.main_home}></section>
      <section className="main_about">about</section>
      <section className="main_works">work</section>
      <section className="main_contact">contact</section>
    </section>
  );
}

export default Main;
