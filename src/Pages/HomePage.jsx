import { useLoaderData, useNavigate } from "react-router-dom";
// import ReactTooltip from 'react-tooltip';


const HomePage = () => {
  const products = useLoaderData(); // Get data passed from the loader
  const navigate = useNavigate(); // For navigation to the details page

  return (
    <div className="container mx-auto mt-6">
      <h2 className="text-3xl font-bold text-center mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow rounded-lg p-4 transition-all transform hover:scale-105 hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.itemName}
              className="w-full h-48 object-cover rounded transition-all hover:opacity-90"
            />

            {/* Item Info */}
            <h3 className="text-lg font-semibold mt-3">{product.itemName}</h3>
            <p className="text-sm text-gray-500">Category: {product.categoryName}</p>
            <p className="text-sm text-gray-500">Price: ${product.price || "N/A"}</p>
            <p className="text-sm text-gray-500">Rating: {product.rating}⭐</p>

            {/* View Details Button */}
            <button
              onClick={() => navigate(`/details/${product._id}`)}
              className="mt-3 bg-gray-500 text-white py-1 px-4 rounded transition-all transform hover:bg-gray-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
