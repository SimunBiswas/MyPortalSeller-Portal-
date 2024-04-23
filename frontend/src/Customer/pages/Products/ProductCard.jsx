import React, { useState } from 'react';
import './styles/productCard.css';
import ShopCategory from './ShopCategory';
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
},
{
    "id": "9496d72b-04ec-41f8-9bc3-0a7c9697be8e",
    "category": "Men's Sneaker",
    "name": "4DFWD SHOES",
    "seller": "Addidas",
    "price": 287,
    "stock": 11,
    "ratings": 4,
    "ratingsCount": 799,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
    "shipping": 49,
    "quantity": 0
},
{
    "id": "6e5593d3-557b-43cf-8dab-a5140faedfb0",
    "category": "Men's Sneaker",
    "name": "KAPTIR 2.0 SHOES",
    "seller": "Addidas",
    "price": 138,
    "stock": 19,
    "ratings": 3,
    "ratingsCount": 4372,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
    "shipping": 19,
    "quantity": 0
},
{
    "id": "9c0c13c2-54e4-4001-809b-afbd9d84037d",
    "category": "Men's Sneaker",
    "name": "4DFWD PULSE SHOES",
    "seller": "Addidas",
    "price": 226,
    "stock": 1,
    "ratings": 4,
    "ratingsCount": 2870,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9a8256bb7ca34da49ff8ad5600bb2812_9366/4DFWD_Pulse_Shoes_White_Q46221_01_standard.jpg",
    "shipping": 15,
    "quantity": 0
},
{
    "id": "c9d1f410-d28f-49d9-9b01-d759b5acbeea",
    "category": "Men's Sneaker",
    "name": "ZX 1K BOOST SHOES",
    "seller": "Addidas",
    "price": 319,
    "stock": 7,
    "ratings": 4,
    "ratingsCount": 1360,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e540bae86d5456aa034ada300ebf46c_9366/ZX_1K_Boost_Shoes_Grey_H00430_01_standard.jpg",
    "shipping": 50,
    "quantity": 0
},
{
    "id": "1564a06b-692f-4f2e-8413-9c8a1cc2da77",
    "category": "Men's Sneaker",
    "name": "NMD_R1 V2 SHOES",
    "seller": "Addidas",
    "price": 260,
    "stock": 4,
    "ratings": 5,
    "ratingsCount": 1976,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2a18c4e3f104d52a697ad6a01477bb7_9366/NMD_R1_V2_Shoes_Black_GX6367_01_standard.jpg",
    "shipping": 46,
    "quantity": 0
},
{
    "id": "ac44095f-230e-4502-8816-dea3eaae8320",
    "category": "Men's Sneaker",
    "name": "NMD_R1 PRIMEBLUE SHOES",
    "seller": "Addidas",
    "price": 437,
    "stock": 1,
    "ratings": 4,
    "ratingsCount": 565,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e03e7a2a9cb44dfac2bad6a00f95888_9366/NMD_R1_Primeblue_Shoes_White_GZ9261_01_standard.jpg",
    "shipping": 36,
    "quantity": 0
},
{
    "id": "d0803f97-966f-4296-ad31-a7f70fc86fab",
    "category": "Men's Pants",
    "name": "TIRO TRACK PANTS",
    "seller": "Addidas",
    "price": 146,
    "stock": 15,
    "ratings": 5,
    "ratingsCount": 3702,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
    "shipping": 29,
    "quantity": 0
},
{
    "id": "8a5b4a9c-76ea-4fbb-9c70-9548de4eab01",
    "category": "Men's Pants",
    "name": "TIRO 21 TRACK PANTS",
    "seller": "Addidas",
    "price": 109,
    "stock": 6,
    "ratings": 5,
    "ratingsCount": 1688,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
    "shipping": 48,
    "quantity": 0
},
{
    "id": "b357e19b-4dd9-4fc7-b5c0-9ed5255464ba",
    "category": "Men's Pants",
    "name": "PRIMEBLUE SST TRACK PANTS",
    "seller": "Addidas",
    "price": 63,
    "stock": 46,
    "ratings": 4,
    "ratingsCount": 50,
    "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c7058d8677742ac8519ac3f009cdcf4_9366/Tiro_21_Track_Pants_Black_GH7305_21_model.jpg",
    "shipping": 20,
    "quantity": 0
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

const ProductList = () => {
  const [columns, setColumns] = useState(3); // Default to 3 columns

  const handleColumnChange = (numColumns) => {
    setColumns(numColumns);
  };
  const rows = [];
  for (let i = 0; i < products.length; i += columns) {
    rows.push(products.slice(i, i + columns));
  };

  return (
  <div className='container-fluid '>
    
    <div className='row filter '>
      <div className='col-sm-3 p-5'>
          <ShopCategory/>
          
      </div>
      
      <div className={`col-sm-${12 - 3} p-5`}>
        <div className='grid p-5'><h1 >Fashion</h1>
        <div className="column-buttons">
              <button onClick={() => handleColumnChange(3)}>3 Columns</button>
              <button onClick={() => handleColumnChange(5)}>5 Columns</button>
            </div>
        </div>
        {rows.map((row, index) => (
        <div className={`product-list columns-${columns}`}key={index}>
          {row.map(product => (
        <ProductCard key={product.id} product={product} />
        ))}
        </div>
        ))}
      </div>
    </div>
  </div>
);
};
export default ProductList;
