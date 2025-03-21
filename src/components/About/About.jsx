import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Step Into My World! </h2>
      <div className={styles.singleCard}>
        
        <div className={styles.aboutText}>
          <p>
            I am a Software Engineer, passionate about building responsive and
            optimized web applications, with a strong foundation in Full-Stack
            Development.
          </p>
          <p>
            I completed my B.Tech in Computer Science from Lovely Professional
            University (2024). During my sixth semester (July 2023), I secured
            my first campus offer for a one-year internship at CG Infinity as a
            Software Development Engineer (SDE) Intern. This experience allowed
            me to gain hands-on expertise in both development and testing,
            enhancing my problem-solving skills and deepening my understanding
            of scalable web applications.
          </p>
          <br />
          <p>
            Beyond the tech world, I have a deep passion for painting and
            creative arts, which allows me to express myself beyond code.
            Whether it’s crafting digital experiences or bringing ideas to life
            on a canvas, creativity is at the core of everything I do.
          </p>
        </div>
      </div>
    </section>
  );
};
