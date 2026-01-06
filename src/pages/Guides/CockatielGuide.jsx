import React from 'react';
import styles from './CockatielGuide.module.css';

const CockatielGuide = () => {
  return (
    <div className={styles.outerBody}>
      <h2 className={styles.pageHeading}>Cockatiel</h2>

      <div className={styles.mainImageContainer}>
        <img 
          src="/Project Assets/Cockatiel guide top img.png" 
          alt="A beautiful cockatiel perched" 
          className={styles.mainImage} 
        />
      </div>

      <div className={styles.pageContainer}>
        {/* General Info */}
        <section className={styles.infoSection}>
          <h2 className={styles.mainHeading}>General Cockatiel Information</h2>
          <div className={styles.generalInfoGrid}>
            <div className={styles.temperamentBox}>
              <h3 className={styles.subHeading}>Temperament</h3>
              <ul className={styles.parrotList}>
                <li>Social, affectionate, intelligent.</li>
                <li>Known for their distinct crest, which signals their mood.</li>
                <li>Crest Flat/Slightly Raised: Relaxed, happy.</li>
                <li>Crest Fully Erect: Alert, excited, or cautious.</li>
                <li>Crest Pinned Down: Angry, frightened, or aggressive.</li>
                <li>Vocalization: Whistling, chattering, and simple phrases/songs.</li>
              </ul>
            </div>
            <div className={styles.materialSafetyGrid}>
              <div className={styles.infoCard}>
                <p className={styles.cardLabel}>Average Lifespan</p>
                <p className={styles.cardValue}>15–20 years</p>
              </div>
              <div className={styles.infoCard}>
                <p className={styles.cardLabel}>Size</p>
                <p className={styles.cardValue}>12–14 inches (crest to tail-tip)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cage Requirements */}
        <section className={styles.infoSection}>
          <h2 className={styles.mainHeading}>Cockatiel Cage Requirements</h2>
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
                    <td>Stainless steel or powder-coated metal.</td>
                    <td>Avoid galvanized wire (zinc toxicity) and cheap painted cages.</td>
                  </tr>
                  <tr>
                    <td>Bar Spacing</td>
                    <td>1/2 inch (1.25 cm) or less.</td>
                    <td>Prevents the bird from getting its head or wings stuck.</td>
                  </tr>
                  <tr>
                    <td>Door Lock</td>
                    <td>Bird-proof latch or bolt.</td>
                    <td>Cockatiels can figure out simple sliding locks.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={styles.sizeDetails}>
              <h3 className={styles.subHeading}>Minimum Size</h3>
              <p className={styles.cageDescription}>A spacious cage is essential for your bird to flap its wings.</p>
              <div className={styles.sizeCard}>
                <p className={styles.cardLabel}>Single Cockatiel</p>
                <p className={styles.cardValue}>Min: 24" L x 18" W x 24" H</p>
              </div>
              <h3 className={styles.subHeading}>Essential Furnishings</h3>
              <ul className={styles.parrotList}>
                <li><span className={styles.highlight}>Perches:</span> Variety of diameters. Avoid sandpaper.</li>
                <li><span className={styles.highlight}>Bowls:</span> Stainless steel or ceramic.</li>
                <li><span className={styles.highlight}>Toys:</span> Rotate chewing and foraging toys.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Diet section */}
        <section className={styles.infoSection}>
          <h2 className={styles.mainHeading}>Cockatiel Diet & Nutrition</h2>
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
                    <td>60% - 70%</td>
                    <td>High-quality formulated pellets.</td>
                  </tr>
                  <tr>
                    <td>Vegetables</td>
                    <td>20% - 30%</td>
                    <td>Kale, Broccoli, Carrots, Peppers.</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.waterNote}>💧 Water: Fresh, clean water daily.</p>
            </div>
            <div className={styles.toxicFoodsBox}>
              <h3 className={styles.toxicHeading}>☠️ Toxic Foods</h3>
              <ul className={styles.toxicList}>
                <li>Avocado</li>
                <li>Chocolate</li>
                <li>Onion & Garlic</li>
                <li>Apple Seeds</li>
              </ul>
            </div>
          </div>
        </section>

        <div className={styles.imageGallery}>
          <img src="/Project Assets/Cockatiel eating veggie.png" alt="Eating" />
          <img src="/Project Assets/Cockatiel sittign on perch.png" alt="Perching" />
        </div>
      </div>
    </div>
  );
};

export default CockatielGuide;