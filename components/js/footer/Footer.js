import styles from "../../../styles/css/Footer.module.css";
import Image from "next/image";
import logo from "/_repos/portfolio/components/images/logo.jpg";

function Footer() {
  return (
    <section className={styles.footer}>
      <Image className={styles.footer_logo} src={logo} alt="logo" />
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
