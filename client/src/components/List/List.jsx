import React from 'react';
import Card from '../Card/Card';
import "./List.scss"
const List = () => {
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
    {
      id: 5,
      img: "https://html.merku.love/herbalist/img/shop/07.webp",
      title: "Witchcraft Cannabis",
      isNew: false,
      oldPrice: 11.97,
      price: 7.97,
    },
    {
      id: 6,
      img: "https://html.merku.love/herbalist/img/shop/10.webp",
      title: "Coconut Based Tinctures",
      isNew: false,
      oldPrice: 9.97,
      price: 7.97,
    },
  ];
  return (
    <div className='list grid-cols-3 gap-x-10 gap-y-0'>
      {data?.map(item =>(
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
