import React from 'react';
import Category from '../../components/Category/Category';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Hero from "../../components/Hero/Hero"; 
import Questions from '../../components/Questions/Questions';

const Home = () => {
  return (
    <div>
      <Hero /> 
      <Category />
      <FeaturedProducts />
      <Questions />
    </div>
  );
}

export default Home;
