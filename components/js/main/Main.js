import homeBgImg from "/_repos/portfolio/components/images/logo.jpg";
import contactBgImg from "/_repos/portfolio/components/images/logo.jpg";
import Image from "next/image";
import "/_repos/portfolio/styles/css/Main.module.css";

function Main() {
  return (
    <section className="main">
      <section className="main_home">Home</section>
      <section className="main_about">about</section>
      <section className="main_works">work</section>
      <section className="main_contact">contact</section>
    </section>
  );
}

export default Main;
