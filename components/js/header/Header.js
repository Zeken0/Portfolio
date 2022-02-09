import styles from "../../../styles/css/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "/_repos/portfolio/components/images/logo.jpg";
import Image from "next/image";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.header_toggleBtn}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: 30, color: "var(--color-white)" }}
        />
      </div>
      <div className={styles.header_menu}>
        <ul className={styles.header_actions}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">work</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
