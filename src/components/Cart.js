import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name} - Rs. {item.price}</h4>
          <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
        </div>
      ))}
      <h3>Total: Rs. {cartItems.reduce((total, item) => total + item.price, 0)}</h3>
    </div>
  );
}

export default Cart;
