import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Salut, c'est Antoine.</h1>
        <p className={styles.description}>
          Après 13 années dans le milieu culturel rennais 🎭, dont 7 en tant que
          directeur et manager, j'ai décidé de me reconvertir dans le
          développement web 💻. Passionné d'informatique depuis toujours, je
          suis enthousiaste à l'idée d'apprendre et de développer de nouvelles
          compétences dans ce domaine.
        </p>
        <p className={styles.description}>
          🚀 En quête d'une opportunité d'alternance en Développement
          d'application pour la rentrée septembre 2024
        </p>
        <a
          href="mailto:cormier.antoine@gmail.com"
          target="_blank"
          className={styles.contactBtn}
        >
          Me contacter
        </a>
        <a
          href="/CV Antoine Cormier - Alternance Dev.pdf"
          download="CV Antoine Cormier - Alternance Dev.pdf"
          className={styles.contactBtn}
        >
          Télécharger mon CV
        </a>
      </div>

      <img
        src={getImageUrl("hero/avatar.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
