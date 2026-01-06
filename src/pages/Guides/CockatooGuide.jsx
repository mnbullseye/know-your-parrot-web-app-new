import React from 'react';
import styles from './CockatielGuide.module.css'; // Reusing the same CSS file for consistency

const CockatooGuide = () => {
  return (
    <div className={styles.outerBody}>
      <h2 className={styles.pageHeading}>Cockatoo</h2>

      <div className={styles.mainImageContainer}>
        <img 
          src="/Project Assets/cockatoo-main.jpg" 
          alt="A majestic cockatoo" 
          className={styles.mainImage} 
        />
      </div>

      <div className={styles.pageContainer}>
        {/* General Info */}
        <section className={styles.infoSection}>
          <h2 className={styles.mainHeading}>General Cockatoo Information</h2>
          <div className={styles.generalInfoGrid}>
            <div className={styles.temperamentBox}>
              <h3 className={styles.subHeading}>Temperament</h3>
              <ul className={styles.parrotList}>
                <li>Extremely social, needy, and "cuddly" parrots.</li>
                <li>Often referred to as "velcro birds" due to their high emotional demands.</li>
                <li>Very loud; they use powerful screams to communicate or get attention.</li>
                <li>Highly intelligent; capable of solving complex puzzles and opening locks.</li>
                <li>Prone to separation anxiety if left alone for long periods.</li>
                <li>Vocalization: Loud shrieks, mimicry, and distinct "dancing" movements.</li>
              </ul>
            </div>
            <div className={styles.materialSafetyGrid}>
              <div className={styles.infoCard}>
                <p className={styles.cardLabel}>Average Lifespan</p>
                <p className={styles.cardValue}>40–70+ years (depending on species)</p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.cardLabel}>Size</p>
                <p className={styles.cardValue}>12–27 inches (species dependent)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cage Requirements */}
        <section className={styles.infoSection}>
          <h2 className={styles.mainHeading}>Cockatoo Cage Requirements</h2>
          <div className={styles.cageRequirementsGrid}>
            <div className={styles.cageTableWrapper}>
              <h3 className={styles.subHeading}>Material and Safety</h3>
              <table className={styles.guideTable}>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Requirement</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Material</td>
                    <td>Heavy-duty wrought iron or stainless steel.</td>
                    <td>Cockatoos have massive beak strength; they can snap thin wires.</td>
                  </tr>
                  <tr>
                    <td>Bar Spacing</td>
                    <td>1 inch to 1.5 inches.</td>
                    <td>Must be wide enough to be strong but narrow enough to prevent escape.</td>
                  </tr>
                  <tr>
                    <td>Door Lock</td>
                    <td>Padlocks or complex mechanical latches.</td>
                    <td>Cockatoos are famous "escape artists" who can watch you use a key.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.sizeDetails}>
              <h3 className={styles.subHeading}>Minimum Size</h3>
              <p className={styles.cageDescription}>Cockatoos need massive amounts of space to prevent feather plucking.</p>
              <div className={styles.sizeCard}>
                <p className={styles.cardLabel}>Large Cockatoo (e.g. Moluccan)</p>
                <p className={styles.cardValue}>Min: 40" L x 30" W x 65" H</p>
              </div>
              <h3 className={styles.subHeading}>Essential Furnishings</h3>
              <ul className={styles.parrotList}>
                <li><span className={styles.highlight}>Destructible Toys:</span> Thick wood blocks for chewing.</li>
                <li><span className={styles.highlight}>Perches:</span> Natural dragonwood or manzanita.</li>
                <li><span className={styles.highlight}>Foraging:</span> Devices that hide food to keep their minds busy.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Diet section */}
        <section className={styles.infoSection}>
          <h2 className={styles.mainHeading}>Cockatoo Diet & Nutrition</h2>
          <div className={styles.dietFlex}>
            <div className={styles.dietTableWrapper}>
              <h3 className={styles.subHeading}>What to Give</h3>
              <table className={styles.dietTable}>
                <thead>
                  <tr>
                    <th>Food Group</th>
                    <th>Amount</th>
                    <th>Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pellets</td>
                    <td>50% - 60%</td>
                    <td>Organic, low-sugar parrot pellets.</td>
                  </tr>
                  <tr>
                    <td>Veg & Fruits</td>
                    <td>30% - 40%</td>
                    <td>Sweet potatoes, leafy greens, berries, sprouts.</td>
                  </tr>
                  <tr>
                    <td>Nuts/Seeds</td>
                    <td>10% (Treats)</td>
                    <td>Walnuts, almonds (use for training).</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.waterNote}>💧 Water: Bathing is essential! Offer a spray bath or large bowl daily.</p>
            </div>
            <div className={styles.toxicFoodsBox}>
              <h3 className={styles.toxicHeading}>☠️ Toxic Foods</h3>
              <ul className={styles.toxicList}>
                <li>Caffeine & Alcohol</li>
                <li>Salty/Fried Foods</li>
                <li>Fruit Pits (Cherry, Peach)</li>
                <li>Mushrooms</li>
                <li>High-fat Junk Food</li>
              </ul>
            </div>
          </div>
        </section>

        <div className={styles.imageGallery}>
          <img src="/Project Assets/cockatoo-playing.jpg" alt="Cockatoo Playing" />
          <img src="/Project Assets/cockatoo-crest.jpeg" alt="Cockatoo Crest" />
        </div>
      </div>
    </div>
  );
};

export default CockatooGuide;