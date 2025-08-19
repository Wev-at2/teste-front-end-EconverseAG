import React from 'react';
import styles from '../Products/ProductsSection.module.scss';

interface Product {
  id: number;
  name: string;
  image: string;
  newPrice: number;
  description?: string;
}

interface Props {
  product: Product;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProductModal: React.FC<Props> = ({ product, onClose, onNext, onPrev }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>×</button>

        {/* Navegação */}
        <button className={styles.modalPrev} onClick={onPrev}>‹</button>
        <button className={styles.modalNext} onClick={onNext}>›</button>

        {/* Grid 2 colunas */}
        <div className={styles.modalGrid}>
          {/* Esquerda: imagem */}
          <div className={styles.modalImageWrapper}>
            <img src={product.image} alt={product.name} className={styles.modalImage} />
          </div>

          {/* Direita: infos */}
          <div className={styles.modalInfo}>
            <h2 className={styles.productTitle}>{product.name}</h2>
            <p className={styles.productPrice}>R$ {product.newPrice}</p>
            <p className={styles.productDescription}>
              {product.description || "Descrição não disponível"}
            </p>
            <a href="#" className={styles.productDetailsLink}>
              Veja mais detalhes do produto &gt;
            </a>

            <div className={styles.productActions}>
              <div className={styles.quantitySelector}>
                <button className={styles.quantityBtn} aria-label="Diminuir quantidade">-</button>
                <span className={styles.quantityValue}>01</span>
                <button className={styles.quantityBtn} aria-label="Aumentar quantidade">+</button>
              </div>
              <button className={styles.buyButton}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
