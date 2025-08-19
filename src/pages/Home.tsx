import React from 'react';
import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import CategoriesSection from '../components/Categories/CategoriesSection';
import ProductsSection from '../components/Products/ProductsSection';
import ProductsSectionTwo from '../components/Products/ProductsSectionTwo';
import PartnersSection from '../components/Partners/PartnersSection';
import BrandsSection from '../components/Brands/BrandsSection';
import NewsletterSection from '../components/Newsletter/NewsletterSection';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <PartnersSection />
        <ProductsSectionTwo />
        <PartnersSection />
        <BrandsSection />
        <ProductsSectionTwo />
        <PartnersSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;