import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const plants = [
    { name: 'Snake Plant', cost: '$15', image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg', description: 'Produces oxygen at night' },
    { name: 'Spider Plant', cost: '$12', image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg', description: 'Filters formaldehyde' },
  ];

  return (
    <div>
      {!showCart ? (
        <div className="product-grid">
          {plants.map((plant) => (
            <div className="product-card" key={plant.name}>
              <img src={plant.image} alt={plant.name} />
              <h3>{plant.name}</h3>
              <p>{plant.description}</p>
              <p>{plant.cost}</p>
              <button onClick={() => dispatch(addItem(plant))}>Add to Cart</button>
            </div>
          ))}
          <button onClick={() => setShowCart(true)}>View Cart</button>
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;

