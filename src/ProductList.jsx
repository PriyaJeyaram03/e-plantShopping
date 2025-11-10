import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      name: "Aloe Vera",
      description: "A medicinal plant known for its healing properties.",
      cost: "$10",
      image: "https://cdn.pixabay.com/photo/2016/04/13/21/26/aloe-vera-1329134_1280.jpg",
      category: "Medicinal",
    },
    {
      name: "Lavender",
      description: "An aromatic plant that promotes relaxation.",
      cost: "$12",
      image: "https://cdn.pixabay.com/photo/2017/08/01/08/29/lavender-2561150_1280.jpg",
      category: "Aromatic",
    },
    {
      name: "Mint",
      description: "A refreshing plant used in beverages and cooking.",
      cost: "$8",
      image: "https://cdn.pixabay.com/photo/2015/05/11/21/50/mint-762331_1280.jpg",
      category: "Aromatic",
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant, index) => (
        <div className="product-card" key={index}>
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p className="price">{plant.cost}</p>
          <button
            className={`add-to-cart ${addedToCart[plant.name] ? "added" : ""}`}
            disabled={addedToCart[plant.name]}
            onClick={() => handleAddToCart(plant)}
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

