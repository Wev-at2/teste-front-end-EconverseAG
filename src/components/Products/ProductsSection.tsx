import React, { useState } from 'react';
import Slider from "react-slick";
import styles from './ProductsSection.module.scss';
import productImage from '../../assets/images/productImage.png';
import ProductCard from './ProductCard';
import ProductModal from '../Modal/ProductModal';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  id: number;
  image: string;
  name: string;
  oldPrice: number;
  newPrice: number;
  installments: string;
  shipping: string;
  description?: string;
}

const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      image: productImage,
      name: "Produto 1",
      oldPrice: 30.90,
      newPrice: 28.90,
      installments: "ou 2x de R$ 14,45 sem juros",
      shipping: "Frete grátis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 2,
      image: productImage,
      name: "Produto 2",
      oldPrice: 30.90,
      newPrice: 28.90,
      installments: "ou 2x de R$ 14,45 sem juros",
      shipping: "Frete grátis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      image: productImage,
      name: "Produto 3",
      oldPrice: 30.90,
      newPrice: 28.90,
      installments: "ou 2x de R$ 14,45 sem juros",
      shipping: "Frete grátis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 4,
      image: productImage,
      name: "Produto 4",
      oldPrice: 30.90,
      newPrice: 28.90,
      installments: "ou 2x de R$ 14,45 sem juros",
      shipping: "Frete grátis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 5,
      image: productImage,
      name: "Produto 5",
      oldPrice: 30.90,
      newPrice: 28.90,
      installments: "ou 2x de R$ 14,45 sem juros",
      shipping: "Frete grátis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
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
