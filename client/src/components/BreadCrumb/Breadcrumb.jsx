import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './Breadcrumb.scss';

const Breadcrumb = () => {
  const location = useLocation();
  const params = useParams();
  const [productTitle, setProductTitle] = useState('');

  useEffect(() => {
    if (location.pathname.includes('/product/')) {
      const fetchProductTitle = async (id) => {
        const response = await fetch(`/api/products/${id}`);
        const product = await response.json();
        setProductTitle(product.title);
      };

      fetchProductTitle(params.id);
    }
  }, [location.pathname, params.id]);

  const getTitle = (path, params) => {
    if (path === `/products/${params.id}`) {
      return 'Products';
    }
    if (path === `/product/${params.id}`) {
      return productTitle || 'Loading...';
    }
    if (path === '/products') {
      return 'Products';
    }
    return 'Page Title';
  };

  return (
    <div className='breadcrumb flex justify-center items-center'>
      <h1>{getTitle(location.pathname, params)}</h1>
    </div>
  );
};

export default Breadcrumb;
