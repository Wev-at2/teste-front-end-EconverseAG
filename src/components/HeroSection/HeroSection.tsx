import React from 'react';
import styles from './HeroSection.module.scss';
import heroImg from '../../assets/images/Rectangle 251.png';

const HeroSection: React.FC = () => {
  return (
    <div className={styles.heroSection}>
      <img
        src={heroImg}
        alt="Hero Background"
        className={styles.heroImage}
      />
      <div className={styles.heroContent}>
        <h1>Venha conhecer nossas promoções</h1>
        <p><strong>50% Off</strong> nos produtos</p>
        <button className={styles.btnPrimary}>Ver produto</button>
      </div>
    </div>
  );
};

export default HeroSection;
