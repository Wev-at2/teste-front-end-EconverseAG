import React from 'react';
import styles from './ProductsSection.module.scss';

interface Product {
  id: number;
  name: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  installments: string;
  shipping: string;
}

interface Props {
  product: Product;
  onOpen: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onOpen }) => {
  return (
    <div className={styles.productCard} onClick={onOpen}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <p className={styles.productDesc}>{product.name}</p>
        <p className={styles.productPriceOld}>R$ {product.oldPrice}</p>
        <p className={styles.productPriceNew}>R$ {product.newPrice}</p>
        <p className={styles.productInstallments}>{product.installments}</p>
        <p className={styles.productShipping}>{product.shipping}</p>
        <button className={styles.btnBuy}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductCard;
