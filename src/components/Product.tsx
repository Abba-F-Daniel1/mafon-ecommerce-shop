
import React from 'react';
import ProductCard from './ProductCard'; 
import { menPerfumes, womenPerfumes } from '../data/data';

function Product() {
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {menPerfumes.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
      {womenPerfumes.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
}

export default Product;
