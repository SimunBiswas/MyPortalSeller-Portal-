import React from 'react';
import { Link } from "react-router-dom";
import '../../Components/styles/Banner2.css';

const categories = [
  { id: 1, name: 'TRENDS', href: "https://www.ajio.com/shop/indie" },
  { id: 2, name: 'INDIE', href: "https://www.ajio.com/shop/indie" },
  { id: 3, name: 'HOME', href: "https://www.ajio.com/shop/indie" },
  { id: 4, name: 'AJIO SNIKER HOOD', href: "https://www.ajio.com/shop/indie" },
  { id: 5, name: 'WEDDING STORE', href: "https://www.ajio.com/shop/indie" },
  { id: 6, name: 'SAREE STORE', href: "https://www.ajio.com/shop/indie" },
  { id: 7, name: 'WATCHES', href: "https://www.ajio.com/shop/indie" },
  { id: 8, name: 'WESTERNWEAR', href: "https://www.ajio.com/shop/indie" },
  { id: 9, name: 'ACCESSORIES', href: "https://www.ajio.com/shop/indie" },
  { id: 10, name: 'BEAUTY', href: "https://www.ajio.com/shop/indie" },
  { id: 11, name: 'INTERNATIONAL BRANDS', href: "https://www.ajio.com/shop/indie" },
  { id: 12, name: 'HOMEGROOUN BRANDS', href: "https://www.ajio.com/shop/indie" },
];

const Banner2 = () => {
  const renderCategory = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      return (
        <div key={category.id}>
          <Link className='text-dark' to={category.href}>{category.name}</Link>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div>
        <h2 className='heading'>Discover Online Stores </h2>
        <img className='w-100 animateImg' src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-DiscoverOnlineStores-Z23-ajiogold.jpg" alt="No Image Found" />
      </div>
      <div className="grids">
        {[...Array(12)].map((_, index) => (
          <div key={index + 1} className={`d${index + 1}`}>
            <div>{renderCategory(index + 1)} </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Banner2;
