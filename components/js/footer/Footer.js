import Image from "next/image";
import logo from "/_repos/portfolio/components/images/logo.jpg";

function Footer() {
  return (
    <section className="footer">
      <Image className="footer_logo" src={logo} alt="logo" />
      <div className="footer_actions">
        <ul>
          <li>GITHUB</li>
          <li>|</li>
          <li>LINKEDIN</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
