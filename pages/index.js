import Head from "next/head";
import Body from "../components/js/body/Body";
import Header from "../components/js/header/Header";
import Main from "../components/js/main/Main";
import Footer from "../components/js/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ahmed J. Jibril | Frontend-developer</title>
      </Head>
      <Body>
        <Header></Header>
        <Main>Main Section</Main>
        <Footer>footer section</Footer>
      </Body>
    </div>
  );
}
