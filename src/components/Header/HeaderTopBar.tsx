import React, { useEffect, useState } from 'react';
import styles from './HeaderTopBar.module.scss';

// ícones
import shieldIcon from '../../assets/images/ShieldCheck.svg';
import truckIcon from '../../assets/images/Truck.svg';
import creditCardIcon from '../../assets/images/CreditCard.svg';

const items = [
  { icon: shieldIcon, text: <>Compra <span className={styles.bold}>100% segura</span></> },
  { icon: truckIcon, text: <><span className={styles.bold}>Frete grátis</span> acima de R$ 200</> },
  { icon: creditCardIcon, text: <><span className={styles.bold}>Parcele</span> suas compras</> },
];

const HeaderTopBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [offset, setOffset] = useState(0);

  // Detecta se está no mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Faz o scroll automático só no mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 1) % (items.length * 200)); // controla a velocidade
    }, 20);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className={styles.topBar}>
      <ul
        className={styles.sliderTrack}
        style={isMobile ? { transform: `translateX(${offset}px)` } : {}}
      >
        {(isMobile ? items.concat(items) : items).map((item, i) => (
          <li className={styles.infoItem} key={i}>
            <img src={item.icon} alt="icon" className={styles.infoIcon} />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderTopBar;
