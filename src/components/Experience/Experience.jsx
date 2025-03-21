import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Experience</h2>
      
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <div key={id} className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p>{skill.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.history}>
        <div className={styles.historyItem}>
          
          <div className={styles.historyItemDetails}>
            <h3>Software Development Engineer Intern</h3>
            <p>CG INFINITY | July 2023 - July 2024</p>
            <ul>
              <li>Conducted manual, UI, and API testing to ensure application functionality.</li>
              <li>Used Postman for API testing and PostgreSQL for database validation.</li>
              <li>Developed and tested RESTful APIs with .NET 6.</li>
              <li>Created responsive UI using React.js, HTML, CSS, and JavaScript.</li>
              <li>Worked with GitHub and Azure DevOps for bug tracking.</li>
              <li>Participated in bootcamp training for front-end technologies.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
