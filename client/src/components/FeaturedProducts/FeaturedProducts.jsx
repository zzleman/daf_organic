import React from 'react';
import Slider from 'react-slick';
import Card from '../Card/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedProducts.scss";

const FeaturedProducts = () => {
  const data = [
    {
      id: 1,
      img: "https://html.merku.love/herbalist/img/shop/14.webp",
      title: "Chem Dawg",
      isNew: true,
      oldPrice: 10.97,
      price: 6.97,
    },
    {
      id: 2,
      img: "https://html.merku.love/herbalist/img/shop/13.webp",
      title: "Coconut Based Tinctures",
      isNew: true,
      oldPrice: 10.97,
      price: 7.97,
    },
    {
      id: 3,
      img: "https://html.merku.love/herbalist/img/shop/07.webp",
      title: "Witchcraft Cannabis",
      isNew: false,
      oldPrice: 11.97,
      price: 7.97,
    },
    {
      id: 4,
      img: "https://html.merku.love/herbalist/img/shop/10.webp",
      title: "Coconut Based Tinctures",
      isNew: false,
      oldPrice: 9.97,
      price: 7.97,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="featuredProducts">
      <div className="top">
        <h2>Featured Products</h2>
        <p>
          Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis egestas
          maecenas pharetra convallis posuere.
        </p>
      </div>
      <div className="bottom mx-10">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="card-wrapper">
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProducts;
