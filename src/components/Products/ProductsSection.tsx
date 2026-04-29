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
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const fetchProducts = async () => {
      try {
        console.log('📦 Iniciando fetch de produtos...');
        const response = await fetch(productUrl);
        
        if (!response.ok) {
          throw new Error(`Falha ao carregar produtos: ${response.status}`);
        }

        const data = await response.json();
        console.log('✅ Dados recebidos:', data);

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

        console.log('🎯 Produtos parseados:', parsedProducts.length);

        if (isMounted) {
          setProducts(parsedProducts);
          setError(null);
          setIsLoading(false);
          console.log('✨ Produtos carregados com sucesso');
        }
      } catch (fetchError) {
        console.error('❌ Erro ao carregar:', fetchError);
        if (retryCount < maxRetries && isMounted) {
          retryCount++;
          console.log(`🔄 Retry ${retryCount}/${maxRetries} em ${1000 * retryCount}ms`);
          setTimeout(fetchProducts, 1000 * retryCount);
        } else if (isMounted) {
          const errorMsg = fetchError instanceof Error ? fetchError.message : String(fetchError);
          setError(errorMsg);
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 2400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.1,
          centerMode: true,
          centerPadding: "10px"
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
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

        <div className={styles.productTags}>
          <a href="#" className={`${styles.tagItem} ${styles.active}`}>CELULAR</a>
          <a href="#" className={styles.tagItem}>ACESSÓRIOS</a>
          <a href="#" className={styles.tagItem}>FONES</a>
          <a href="#" className={styles.tagItem}>SMARTWATCH</a>
          <a href="#" className={styles.tagItem}>PROMOÇÕES</a>
          <a href="#" className={styles.tagItem}>VER TODOS</a>
        </div>
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
            <div key={product.id} className={styles.slideItem}>
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
