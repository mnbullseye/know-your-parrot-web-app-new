import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Guides.module.css';

const Guides = () => {
  // Static data array based on your HTML
  const guideData = [
    {
      id: 1,
      title: "Cockatiel",
      text: "Buy your bird some toys",
      image: "/Project Assets/Cockatiel sittign on perch.png",
      link: "/parrot-guide/cockatiel"
    },
    {
      id: 2,
      title: "Cockatoo",
      text: "Buy your bird some yummy treats",
      image: "/Project Assets/cockatoo cute.png",
      link: "/parrot-guide/cockatoo"
    }
  ];

  return (
    <section className={styles.guidesContent}>
      <h1 className={styles.mainTitle}>Guides</h1>
      <h2 className={styles.subtitle}>Because raising a parrot is more than just a tweet...</h2>

      <div className={styles.cardContainer}>
        {guideData.map((guide) => (
          <Link to={guide.link} key={guide.id} className={styles.guideLink}>
            <div className={styles.guideCard}>
              <div className={styles.cardImagePlaceholder}>
                <img src={guide.image} alt={guide.title} />
              </div>
              <h3 className={styles.cardTitle}>{guide.title}</h3>
              <p className={styles.cardText}>{guide.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Guides;