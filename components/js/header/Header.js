import styles from "../../../styles/css/Header.module.css";
import logo from "/_repos/portfolio/components/images/logo.jpg";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.header}>
      <Image className={styles.header_logo} src={logo} alt="logo" />
      <div>
        <ul className={styles.header_actions}>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
