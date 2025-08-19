import React from 'react';
import styles from './CategoryCard.module.scss';

interface Props {
  name: string;
  icon: string;
  isActive?: boolean; 
}

const CategoryCard: React.FC<Props> = ({ name, icon, isActive = false }) => {
  return (
    <div className={`${styles.categoryItem} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.categoryIconWrapper} ${isActive ? styles.active : ''}`}>
        <img 
          src={icon} 
          alt={name}
          className={styles.categoryIcon}
        />
      </div>
      <p className={`${styles.categoryName} ${isActive ? styles.active : ''}`}>
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
