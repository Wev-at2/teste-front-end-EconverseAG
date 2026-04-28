import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import styles from './ProductsSection.module.scss';
import ProductCard from './ProductCard';
import ProductModal from '../Modal/ProductModal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const productUrl = '/api/produtos';

    fetch(productUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Falha ao carregar produtos: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (!data.success || !Array.isArray(data.products)) {
          throw new Error('Dados de produtos inválidos.');
        }

        const parsedProducts: Product[] = data.products.map((item: RemoteProduct, index: number) => ({
          id: index + 1,
          image: item.photo,
          name: item.productName,
          newPrice: item.price,
          description: item.descriptionShort,
          installments: 'ou 2x sem juros',
          shipping: 'Frete grátis'
        }));

        setProducts(parsedProducts);
      })
      .catch(fetchError => {
        setError(fetchError instanceof Error ? fetchError.message : String(fetchError));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

  // Configurações do slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={`${styles.productsSection} container`}>
      <div className={styles.sectionTitleContainer}>
        <div className={styles.line}></div>
        <h2 className={styles.sectionTitle}>Produtos Relacionados</h2>
        <div className={styles.line}></div>
      </div>
      <div>
      </div>

      {/* Slider aqui */}
      {isLoading ? (
        <div className={styles.loadingMessage}>Carregando produtos...</div>
      ) : error ? (
        <div className={styles.errorMessage}>Erro ao carregar produtos: {error}</div>
      ) : products.length === 0 ? (
        <div className={styles.emptyMessage}>Nenhum produto disponível no momento.</div>
      ) : (
        <Slider {...sliderSettings} className={styles.productsCarouselWrapper}>
          {products.map((product, index) => (
            <div key={product.id}>
              <ProductCard
                product={product}
                onOpen={() => openModal(index)}
              />
            </div>
          ))}
        </Slider>
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
