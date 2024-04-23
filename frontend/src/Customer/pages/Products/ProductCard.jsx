import React from 'react'
import './styles/productCard.css';
const products =[{
  id: "124e13b9-2d54-4b2f-a74d-a77b362d6ead",
  category: "Men's Sneaker",
  name: "ULTRABOOST 22 SHOES",
  seller: "Adidas",
  price: 420,
  stock: 20,
  ratings: 4,
  ratingsCount: 3725,
  img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
  shipping: 1,
  quantity: 0
},
{
  id: "13cbc7ed-a61b-4883-9d42-82d7d8642b86",
  category: "Men's Sneaker",
  name: "LUNAR NEW YEAR ULTRABOOST DNA SHOES",
  seller: "Adidas",
  price: 196,
  stock: 19,
  ratings: 5,
  ratingsCount: 4355,
  img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
  shipping: 14,
  quantity: 0
},
{
  id: "307f166f-1d04-4573-bc37-2f461ea9d4f7",
  category: "Men's Sneaker",
  name: "SUPERNOVA SHOES",
  seller: "Adidas",
  price: 245,
  stock: 20,
  ratings: 4,
  ratingsCount: 3972,
  img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
  shipping: 1,
  quantity: 0
}

];
const ProductCard = ({ product })=> {
  return (
    <div className='container-fluid'>
      
         <div className=" product-card">
           <img src={product.img} alt={product.name} className="product-image" />
           <div className="product-details">
             <h2 className="product-title">{product.name}</h2>
             <p className="product-price">$Price: {product.price}</p>
             <button className="add-to-cart-button">Add to Cart</button>
           </div>
         </div>
      </div>
  
  );
};

const ProductList = () => (
    <div className="product-list">
      {products.map(product => (
       <ProductCard key={product.id} product={product} />
     ))}
    </div>
);

export default ProductList;
