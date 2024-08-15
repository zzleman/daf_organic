import React from 'react';

const Category = () => {
  return (
    <div className='grid grid-cols-6 w-11/12 mx-auto gap-10 py-32 text-center'>
      <a href="#" className="relative block group">
        <img className="rounded-2xl transition-transform duration-300 ease-in-out h-48 object-cover" src="https://html.merku.love/herbalist/img/index2/category01.jpg" alt="Category"/>
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl">
        <p className="text-white text-xl font-bold">Seeds</p>
        </div>
      </a>
      <a href="#" className="relative block group">
        <img className="rounded-2xl transition-transform duration-300 ease-in-out h-48 object-cover" src="https://html.merku.love/herbalist/img/index2/category02.jpg" alt="Category"/>
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl">
        <p className="text-white text-xl font-bold">Flower</p>
        </div>
      </a>
      <a href="#" className="relative block group">
        <img className="rounded-2xl transition-transform duration-300 ease-in-out h-48 object-cover" src="https://html.merku.love/herbalist/img/index2/category03.jpg" alt="Category"/>
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl">
        <p className="text-white text-xl font-bold">Cartridges</p>
        </div>
      </a>
      <a href="#" className="relative block group">
        <img className="rounded-2xl transition-transform duration-300 ease-in-out h-48 object-cover" src="https://html.merku.love/herbalist/img/index2/category04.jpg" alt="Category"/>
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl">
        <p className="text-white text-xl font-bold">Concentrates</p>
        </div>
      </a>
      <a href="#" className="relative block group">
        <img className="rounded-2xl transition-transform duration-300 ease-in-out h-48 object-cover" src="https://html.merku.love/herbalist/img/index2/category05.jpg" alt="Category"/>
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl">
        <p className="text-white text-xl font-bold">Oil</p>
        </div>
      </a>
      <a href="#" className="relative block group">
        <img className="rounded-2xl transition-transform duration-300 ease-in-out h-48 object-cover" src="https://html.merku.love/herbalist/img/index2/category06.jpg" alt="Category"/>
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-2xl">
        <p className="text-white text-xl font-bold">Edible</p>
        </div>
      </a>
    </div>
  );
}

export default Category;
