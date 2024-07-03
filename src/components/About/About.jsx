import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Formations</h2>
      <div className={styles.content}>
        <img
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDE1eGtiMmQ1MzNkeHN6cXhtdG45bGhzcXcxdmQwZ3hsYWtmNGU5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif"
          alt="Avatar d'Antoine avec un ordinateur"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3> Développeur Web et Web mobile Bac +2</h3>
              <p>
                Formé à la 3W Academy avec une spécialisation en HTML/CSS,
                Javascript, React et PHP.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Engineer</h3>
              <p>
                Parcours professionnel de 150 heures complété sur Codecademy,
                couvrant le développement full-stack.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Autodidacte</h3>
              <p>
                Apprentissage autonome grâce aux ressources en ligne variées.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
