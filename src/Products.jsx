import React, { useContext } from 'react'
import { ProductContext } from './App';

const Products = () => {
  const items = useContext(ProductContext);

  if(!items) {
    return;
  }

  return (
    <div>
      <h1>Products</h1>
      {items.products.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Products
