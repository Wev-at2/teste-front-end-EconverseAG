import React from 'react';
import styles from './PartnersSection.module.scss';
import partnerImage from '../../assets/images/partnerImage.png';

const PartnersSection: React.FC = () => {
  return (
    <section className={`${styles.partnersSection} container`}>
      <div className={styles.partnerBanner}>
        <img
          src={partnerImage}
          alt="Partner background"
          className={styles.partnerBg}
        />
        <div className={styles.partnerOverlay}>
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#" className={styles.btnSecondary}>Confira</a>
        </div>
      </div>
      <div className={styles.partnerBanner}>
        <img
          src={partnerImage}
          alt="Partner background"
          className={styles.partnerBg}
        />
        <div className={styles.partnerOverlay}>
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#" className={styles.btnSecondary}>Confira</a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
