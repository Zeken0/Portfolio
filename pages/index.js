import Head from "next/head";
import Body from "../public/components/js/body/Body";
import Header from "../public/components/js/header/Header";
import Main from "../public/components/js/main/Main";
import Footer from "../public/components/js/footer/Footer";

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
