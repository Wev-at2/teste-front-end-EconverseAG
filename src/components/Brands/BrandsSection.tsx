import React from 'react';
import styles from './BrandsSection.module.scss';
import brandImage from '../../assets/images/Logo.svg';

const BrandsSection: React.FC = () => {
  return (
    <section id="brands" className={styles.brandsSection}>
      <h2 className={styles.sectionTitle}>Navegue por marcas</h2>
      <div className={styles.brandsGrid}>
        <div className={styles.brandItem}>
          <div className={styles.brandLogoContainer}>
            <img src={brandImage} alt="brand logo part" />
          </div>
        </div>
        <div className={styles.brandItem}>
          <div className={styles.brandLogoContainer}>
            <img src={brandImage} alt="brand logo part" />
          </div>
        </div>
        <div className={styles.brandItem}>
          <div className={styles.brandLogoContainer}>
            <img src={brandImage} alt="brand logo part" />
          </div>
        </div>
        <div className={styles.brandItem}>
          <div className={styles.brandLogoContainer}>
            <img src={brandImage} alt="brand logo part" />
          </div>
        </div>
        <div className={styles.brandItem}>
          <div className={styles.brandLogoContainer}>
            <img src={brandImage} alt="brand logo part" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
