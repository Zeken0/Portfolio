import Head from "next/head";
import Body from "../components/body/Body";
import Heading from "../components/heading/Heading";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import GlobalStyle from "../styles/globals";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ahmed J. Jibril | Frontend-developer</title>
      </Head>
      <Body>
        <Header>heading seaction</Header>
        <Main>Main Section</Main>
        <Footer>footer section</Footer>
      </Body>
    </div>
  );
}
