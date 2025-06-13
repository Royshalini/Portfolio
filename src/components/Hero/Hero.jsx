import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.smallText}>Hi, I'm</span> <br />
          Shalini Roy
        </h1>
        <div className={styles.buttonContainer}>
          <a
            href="mailto:royshalini654@gmail.com"
            className={styles.contactBtn}
          >
            Contact
          </a>

          <a
            href="https://drive.google.com/file/d/1Eo7p3glA4-wDHSKKCJAFKQRZSaZQdh3X/view?usp=sharing"
            target="blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("/assets/hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
