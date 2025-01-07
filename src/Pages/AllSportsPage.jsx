import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "../Components/NavBar";

const AllSportsPage = () => {
  const products = useLoaderData(); // Load products from loader
  const navigate = useNavigate(); // For navigation

  const [sortedProducts, setSortedProducts] = useState(products);
  const [isAscending, setIsAscending] = useState(true); // State to toggle sorting order

  // Function to handle sorting by price
  const handleSort = () => {
    const sorted = [...sortedProducts].sort((a, b) => {
      if (isAscending) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    // Toggle the sorting order
    setSortedProducts(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <>
      {/* Fixed NavBar */}
      <div className="fixed top-0 w-11/12 md:ml-20 px-4 mt-5 z-50">
        <NavBar />
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-24 bg-slate-100 ">
        <h2 className="text-3xl font-bold text-center mb-6">All Sports Equipment</h2>

        {/* Sort Button */}
        <div className="mb-4 text-center">
          <button
            onClick={handleSort}
            className="bg-gray-500 text-white py-2 px-4 rounded"
          >
            Sort by Price {isAscending ? "Ascending" : "Descending"}
          </button>
        </div>

        {/* Table for displaying products */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedProducts.map((product) => (
                <tr key={product._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{product.itemName}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.categoryName}</td>
                  <td className="border border-gray-300 px-4 py-2">${product.price || "N/A"}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      className="bg-gray-200 text-black py-1 px-4 rounded"
                      onClick={() => navigate(`/details/${product._id}`)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllSportsPage;
