import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/Logo.svg';
import socialInstragram from '../../assets/images/socialInstagram.svg';
import socialFacebook from '../../assets/images/socialFacebook.svg';
import socialLinkedin from '../../assets/images/socialLinkedin.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerAbout}>
          <a href="#" className={styles.footerLogo}>
            <div className={styles.footerLogoContainer}>
              <img src={logo} alt="logo part" />
            </div>
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className={styles.socialLinks}>
            <a href="#">
              <img src={socialInstragram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={socialFacebook} alt="Facebook" />
            </a>
            <a href="#">
              <img src={socialLinkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linksColumn}>
            <h3>Institucional</h3>
            <ul>
              <li><a className={styles.footerLinks} href="#">Sobre Nós</a></li>
              <li><a className={styles.footerLinks} href="#">Movimento</a></li>
              <li><a className={styles.footerLinks} href="#">Trabalhe conosco</a></li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <h3>Ajuda</h3>
            <ul>
              <li><a className={styles.footerLinks} href="#">Suporte</a></li>
              <li><a className={styles.footerLinks} href="#">Fale Conosco</a></li>
              <li><a className={styles.footerLinks} href="#">Perguntas Frequentes</a></li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <h3>Termos</h3>
            <ul>
              <li><a className={styles.footerLinks} href="#">Termos e Condições</a></li>
              <li><a className={styles.footerLinks} href="#">Política de Privacidade</a></li>
              <li><a className={styles.footerLinks} href="#">Troca e Devolução</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
