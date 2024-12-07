import { div } from "framer-motion/client";
import React, { useState, useEffect } from "react";

const Categories = () => {
  const [products, setProducts] = useState([]); // Holds all fetched products
  const [category, setCategory] = useState("cricket"); // Selected category

  // Fetch all products once
  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Filter products based on selected category
  const filteredProducts = products.filter(
    (product) => product.categoryName === category
  );

  const categories = ["cricket", "tennis", "football"];

  return (
    <div className="w-11/12  justify-center p-4 mx-auto">
        <h2 className="text-center text-3xl mt-2 font-extrabold text-lime-600 ">Sports Categories</h2>
        <div className="p-6">
        
        {/* Category Buttons */}
        <div className="flex gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded ${
                category === cat
                  ? "bg-gray-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
  
        {/* Display Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filteredProducts.length ? (
    filteredProducts.map((product) => (
      <div
        key={product._id}
        className="border rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">
            Category: {product.categoryName}
          </p>
          <p className="text-sm text-gray-700 mt-2">{product.description}</p>
          <p className="text-md font-semibold text-blue-600 mt-3">
            Price: ${product.price}
          </p>
          <p className="text-sm text-gray-500">Stock: {product.stock} available</p>
        </div>

        {/* Action Buttons */}
        <div className="p-4 flex justify-between">
          <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
            Add to Cart
          </button>
          <button className="px-4 py-2 bg-gray-200 text-sm rounded hover:bg-gray-300">
            View Details
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-gray-500">No products found for {category}</p>
  )}
</div>

      </div>
    </div>
    
  );
};

export default Categories;
