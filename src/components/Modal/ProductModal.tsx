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
  // Fechar modal com tecla ESC
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button 
          className={styles.modalClose} 
          onClick={onClose}
          aria-label="Fechar"
          title="Fechar (ESC)"
        >
          ×
        </button>

        {/* Navegação */}
        <button 
          className={styles.modalPrev} 
          onClick={onPrev}
          aria-label="Produto anterior"
          title="Anterior"
        >
          ‹
        </button>
        <button 
          className={styles.modalNext} 
          onClick={onNext}
          aria-label="Próximo produto"
          title="Próximo"
        >
          ›
        </button>

        {/* Grid 2 colunas - 1 coluna em mobile */}
        <div className={styles.modalGrid}>
          {/* Esquerda: imagem */}
          <div className={styles.modalImageWrapper}>
            <img 
              src={product.image} 
              alt={product.name} 
              className={styles.modalImage} 
              loading="lazy"
            />
          </div>

          {/* Direita: infos */}
          <div className={styles.modalInfo}>
            <h2 className={styles.productTitle}>{product.name}</h2>
            <p className={styles.productPrice}>R$ {(product.newPrice / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <p className={styles.productDescription}>
              {product.description || "Descrição não disponível"}
            </p>
            <a href="#" className={styles.productDetailsLink}>
              Veja mais detalhes do produto &gt;
            </a>

            <div className={styles.productActions}>
              <div className={styles.quantitySelector}>
                <button 
                  className={styles.quantityBtn} 
                  aria-label="Diminuir quantidade"
                >
                  −
                </button>
                <span className={styles.quantityValue}>01</span>
                <button 
                  className={styles.quantityBtn} 
                  aria-label="Aumentar quantidade"
                >
                  +
                </button>
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
