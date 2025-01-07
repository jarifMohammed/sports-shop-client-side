import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FeaturedEquipment = () => {
  const navigate = useNavigate();
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    // Fetch all products
    fetch("https://equi-sport-server.vercel.app/product")
      .then((response) => response.json())
      .then((data) => {
        // Sort products by rating in descending order
        const sortedProducts = data.sort((a, b) => b.rating - a.rating);

        // Select the top 4 products (or any number you prefer)
        const topFeaturedItems = sortedProducts.slice(0, 4);

        // Set the top rated products as featured items
        setFeaturedItems(topFeaturedItems);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="">
      <div className="container bg-orange-100 opacity-80 rounded-xl p-5 mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-500 mb-8">
          Featured Equipment
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredItems.map((item) => (
            <div
              key={item._id}
              className="text-gray rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.itemName}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  {item.itemName}
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {item.categoryName}
                </p>
                <p className="text-lg font-medium text-red-600">
                  ${item.price}
                </p>
              </div>
              <div className="p-6">
                <button
                  onClick={() => navigate(`/details/${item._id}`)}
                  className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEquipment;
