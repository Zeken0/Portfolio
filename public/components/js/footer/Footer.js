import styles from "/_repos/portfolio/styles/css/Footer.module.css";
import Image from "next/image";
import logo from "/_repos/portfolio/public/components/images/logo.jpg";

function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div>
        <ul className={styles.footer_actions}>
          <li>GITHUB</li>
          <li className={styles.footer_line}>|</li>
          <li>LINKEDIN</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
