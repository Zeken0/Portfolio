import "/_repos/portfolio/styles/css/Header.module.css";
import logo from "/_repos/portfolio/components/images/logo.jpg";
import Image from "next/image";

function Header() {
  return (
    <div className="header">
      <Image className="header_logo" src={logo} alt="logo" />
      <div className="header_actions">
        <ul>
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
