import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Loading from "./Loading";

const ViewDetailsPage = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details from the backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://equi-sport-server.vercel.app/product/${id}`
        );
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Re-run the effect if the `id` changes

  if (loading) return <Loading></Loading>
  if (error) return <p>Error: {error}</p>;

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container bg-gradient-to-r from-blue-500 via-purple-200 to-pink-300  p-5 mx-auto mt-6">
      <NavBar></NavBar>
      <h2 className="text-3xl mt-5 font-bold text-center mb-6">
        {product.itemName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.itemName}
            className="w-full h-96 object-cover rounded shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-800 mb-3">
            <span className="font-semibold">Category:</span>{" "}
            {product.categoryName}
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <span className="font-semibold">Price:</span> $
            {product.price || "N/A"}
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <span className="font-semibold">Rating:</span> {product.rating}⭐
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <span className="font-semibold">Description:</span>{" "}
            {product.description || "No description available"}
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <span className="font-semibold">Customization:</span>{" "}
            {product.customization || "Not available"}
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <span className="font-semibold">Processing Time:</span>{" "}
            {product.processingTime || "Not specified"}
          </p>
          <p className="text-lg text-gray-800 mb-3">
            <span className="font-semibold">Stock Status:</span>{" "}
            {product.stockStatus || "Out of stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
