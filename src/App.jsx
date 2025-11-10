import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showHome, setShowHome] = useState(true);
  const handleHomeClick = () => setShowHome(true);

  return (
    <div className="App">
      {showHome ? (
        <ProductList onHomeClick={handleHomeClick} />
      ) : (
        <h1>Welcome to Paradise Nursery</h1>
      )}
    </div>
  );
}

export default App;



