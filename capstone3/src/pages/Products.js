import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import AdminProducts from '../pages/AdminProducts';
import '../styles/Products.css';

export default function Products() {
  // Token
  const token = localStorage.getItem('token');
  const isAdmin = token ? JSON.parse(atob(token.split('.')[1])).isAdmin : false;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/products/active')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  console.log(products);

  return (
    <>
      {isAdmin && <AdminProducts />}
      {!isAdmin && (
        <div className="products">
          {products.map(product => (
            <ProductCard key={product._id} ProductProp={product} />
          ))}
        </div>
      )}
    </>
  );
}