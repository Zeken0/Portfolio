import Head from "next/head";
import Body from "../public/components/js/body/Body.js";
import Header from "../public/components/js/header/Header.js";
import Main from "../public/components/js/main/Main.js";
import Footer from "../public/components/js/footer/Footer.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ahmed J. Jibril | Frontend-developer</title>
      </Head>
      <Body>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Body>
    </div>
  );
}
