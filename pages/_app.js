import GlobalStyle from "../styles/globals";
import "../styles/css/Header.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
