import styles from "/_repos/portfolio/styles/css/Body.module.css";

function Body({ children }) {
  return <div className={styles.body}>{children}</div>;
}

export default Body;
