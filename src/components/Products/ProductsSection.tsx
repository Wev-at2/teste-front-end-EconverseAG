import React, { useEffect, useRef, useState } from 'react';
import styles from './ProductsSection.module.scss';
import ProductCard from './ProductCard';
import ProductModal from '../Modal/ProductModal';

interface Product {
  id: number;
  image: string;
  name: string;
  oldPrice?: number;
  newPrice: number;
  installments?: string;
  shipping?: string;
  description?: string;
}

interface RemoteProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const API_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/produtos');

        if (!response.ok) {
          throw new Error(`Erro: ${response.status}`);
        }

        const data = await response.json();

        // ⚠️ defesa contra formato inesperado
        const list = data?.products ?? data ?? [];

        const parsedProducts: Product[] = list.map(
          (item: RemoteProduct, index: number) => ({
            id: index + 1,
            image: item.photo,
            name: item.productName,
            newPrice: item.price,
            description: item.descriptionShort,
            installments: 'ou 2x sem juros',
            shipping: 'Frete grátis',
          })
        );

        setProducts(parsedProducts);
      } catch (err) {
        console.error(err);
        setError('Erro ao carregar produtos');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.offsetWidth * 0.8;

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentIndex(null);
  };

  const nextProduct = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % products.length);
    }
  };

  const prevProduct = () => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + products.length) % products.length);
    }
  };

  return (
    <section className={`${styles.productsSection} container`}>
      <div className={styles.sectionTitleContainer}>
        <div className={styles.line}></div>
        <h2 className={styles.sectionTitle}>Produtos Relacionados</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.productTags}>
        <a className={`${styles.tagItem} ${styles.active}`}>CELULAR</a>
        <a className={styles.tagItem}>ACESSÓRIOS</a>
        <a className={styles.tagItem}>FONES</a>
        <a className={styles.tagItem}>SMARTWATCH</a>
        <a className={styles.tagItem}>PROMOÇÕES</a>
        <a className={styles.tagItem}>VER TODOS</a>
      </div>

      {isLoading ? (
        <div>Carregando...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className={styles.carouselWrapper}>
          <button onClick={() => scroll('left')} className={styles.arrow}>
            ◀
          </button>

          <div className={styles.carousel} ref={carouselRef}>
            {products.map((product, index) => (
              <div key={product.id} className={styles.cardWrapper}>
                <ProductCard
                  product={product}
                  onOpen={() => openModal(index)}
                />
              </div>
            ))}
          </div>

          <button onClick={() => scroll('right')} className={styles.arrow}>
            ▶
          </button>
        </div>
      )}

      {isModalOpen && currentIndex !== null && (
        <ProductModal
          product={products[currentIndex]}
          onClose={closeModal}
          onNext={nextProduct}
          onPrev={prevProduct}
        />
      )}
    </section>
  );
};

export default ProductsSection;