import React from 'react';
import styles from './HeaderNavBar.module.scss';
import crownIcon from '../../assets/images/CrownSimple.svg';

interface HeaderNavBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderNavBar: React.FC<HeaderNavBarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className={`${styles.navBar} ${isMenuOpen ? styles.open : ''}`}>
      <ul className={styles.navList} onClick={toggleMenu}>
        <li><a className={styles.navLink} href="#">Todas Categorias</a></li>
        <li><a className={styles.navLink} href="#">Supermercado</a></li>
        <li><a className={styles.navLink} href="#">Livros</a></li>
        <li><a className={styles.navLink} href="#">Moda</a></li>
        <li><a className={styles.navLink} href="#">Lançamentos</a></li>
        <li><a className={`${styles.navLink} ${styles.ofertas}`} href="#">Ofertas do dia</a></li>
        <li>
          <a href="#" className={`${styles.navLink} ${styles.assinatura}`}>
            <img src={crownIcon} alt="Crown" className={styles.crownIcon} />
            Assinatura
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
