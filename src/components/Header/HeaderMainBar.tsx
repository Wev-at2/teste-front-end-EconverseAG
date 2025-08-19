import React from 'react';
import styles from './HeaderMainBar.module.scss';
import logo from '../../assets/images/Logo.svg';
import searchIcon from '../../assets/images/MagnifyingGlass.svg';
import packageIcon from '../../assets/images/package.svg';
import heartIcon from '../../assets/images/heart.svg';
import userIcon from '../../assets/images/userCircle.svg';
import shoppingCartIcon from '../../assets/images/shoppingCart.svg';

interface HeaderMainBarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderMainBar: React.FC<HeaderMainBarProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={styles.mainBar}>
      <img src={logo} alt="Logo" className={styles.logo} />

      <button
        className={`${styles.burgerButton} ${isMenuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        aria-label="Abrir menu"
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>

      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="O que você está buscando?"
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <img src={searchIcon} alt="Search" />
        </button>
      </div>

      <ul className={styles.userActions}>
        <li><a href="#"><img src={packageIcon} alt="Pedidos" /></a></li>
        <li><a href="#"><img src={heartIcon} alt="Wishlist" /></a></li>
        <li><a href="#"><img src={userIcon} alt="User" /></a></li>
        <li><a href="#"><img src={shoppingCartIcon} alt="Cart" /></a></li>
      </ul>
    </div>
  );
};

export default HeaderMainBar;
