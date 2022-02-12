import styles from "/_repos/portfolio/styles/css/Main.module.css";

function Main() {
  return (
    <section className={styles.main}>
      <div className={styles.main_home}>
        <div className={styles.overlay}></div>
        <div className={styles.shadow_overlay}></div>
        <div className={styles.home_top_content}>
          <div className={styles.home_top_left_content}>
            <div>
              <div className={styles.home_hero_line}></div>
              <span>HELLO THERE</span>
            </div>
          </div>
          <div className={styles.home_top_right_content}></div>
        </div>
        <div className={styles.home_bottom_content}></div>
      </div>
      <div className={styles.main_about}>about</div>
      <div className={styles.main_work}>work</div>
      <div className={styles.main_contact}>contact</div>
    </section>
  );
}

export default Main;
