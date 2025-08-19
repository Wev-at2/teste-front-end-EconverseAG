import React, { useState } from 'react';
import styles from './Header.module.scss';
import HeaderTopBar from './HeaderTopBar';
import HeaderMainBar from './HeaderMainBar';
import HeaderNavBar from './HeaderNavBar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.siteHeader}>
      <HeaderTopBar />
      <HeaderMainBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeaderNavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
