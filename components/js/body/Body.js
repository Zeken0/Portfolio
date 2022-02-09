import styles from "../../../styles/css/Body.module.css";

function Body({ children }) {
  return <div className={styles.body}>{children}</div>;
}

export default Body;
