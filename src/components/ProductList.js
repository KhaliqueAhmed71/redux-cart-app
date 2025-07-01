import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: 'Headphones', price: 2500 },
  { id: 2, name: 'Smartwatch', price: 4000 },
  { id: 3, name: 'Bluetooth Speaker', price: 3500 },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Available Gadgets</h2>
      {products.map((p) => (
        <div key={p.id}>
          <h4>{p.name} - Rs. {p.price}</h4>
          <button onClick={() => dispatch(addItem(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
