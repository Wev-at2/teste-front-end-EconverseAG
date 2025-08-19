import React from 'react';
import styles from './CategoriesSection.module.scss';
import CategoryCard from './CategoryCard';
import iconTecnologia from '../../assets/images/categories-tecnologia.png';
import iconSupermercado from '../../assets/images/categories-supermercados.png';
import iconBebidas from '../../assets/images/categories-bebidas.png';
import iconFerramentas from '../../assets/images/categories-ferramentas.png';
import iconSaude from '../../assets/images/categories-saude.png';
import iconEsportes from '../../assets/images/categories-esportes_fitness.png';
import iconModa from '../../assets/images/categories-moda.png';

const categories = [
  { id: 1, name: 'Tecnologia', icon: iconTecnologia },
  { id: 2, name: 'Supermercado', icon: iconSupermercado },
  { id: 3, name: 'Bebidas', icon: iconBebidas },
  { id: 4, name: 'Ferramentas', icon: iconFerramentas },
  { id: 5, name: 'Saúde', icon: iconSaude },
  { id: 6, name: 'Esportes e Fitness', icon: iconEsportes },
  { id: 7, name: 'Moda', icon: iconModa },
];

const CategoriesSection: React.FC = () => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.sectionTitle}>Categorias</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((cat) => (
          <CategoryCard key={cat.id} name={cat.name} icon={cat.icon} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
