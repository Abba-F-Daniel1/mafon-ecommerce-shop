import React from 'react';
import ProductCard from './ProductCard'; 
import { menPerfumes, womenPerfumes } from '../data/data';

function Product() {
  const menCount = menPerfumes.length;
  const womenCount = womenPerfumes.length;

  return (
    <div className="m-2">
      <div>
        <h3 className="mb-2 mx-2 text-[#800020]">For Men <span className='text-[#595959]'>({menCount} products)</span></h3>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {menPerfumes.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-2 mx-2 text-[#800020]">For Women <span className='text-[#595959]'>({womenCount} products)</span></h3>
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {womenPerfumes.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
