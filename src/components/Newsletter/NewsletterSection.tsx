import React from 'react';
import styles from './NewsletterSection.module.scss';

const NewsletterSection: React.FC = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={`container ${styles.newsletterContainer}`}>
        <div className={styles.newsletterText}>
          <h2>Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form className={styles.newsletterForm}>
          <div className={styles.formInputs}>
            <input type="text" placeholder="Digite seu nome" />
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit" className={styles.btnSubmit}>INSCREVER</button>
          </div>
          <div className={styles.formTerms}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
