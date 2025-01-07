import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../Components/NavBar";

const MyEquipmentListPage = () => {
  const products = useLoaderData();
  const navigate = useNavigate();

  // Function to handle delete
  const handleDelete = async (id) => {
    // Use SweetAlert for confirmation
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const response = await fetch(
        `https://equi-sport-server.vercel.app/product/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Success Alert
        Swal.fire({
          title: "Success!",
          text: "The item has been successfully deleted.",
          icon: "success",
          confirmButtonText: "Okay",
        }).then(() => {
          window.location.reload(); // Reload to refresh the list
        });
      } else {
        // Error Alert
        Swal.fire({
          title: "Error!",
          text: "Failed to delete the item. Please try again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      }
    }
  };

  return (
    <>
      {/* Fixed NavBar */}
      <div className="fixed top-0 w-11/12 md:ml-20 px-4  z-50">
        <NavBar />
      </div>

      {/* Content Section */}
      <div className="container mx-auto mt-24 pt-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          My Equipment List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.itemName}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                  {product.rating}⭐
                </div>
              </div>

              {/* Item Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.itemName}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Category: {product.categoryName}
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Price:{" "}
                  <span className="text-gray-800 font-medium">
                    ${product.price || "N/A"}
                  </span>
                </p>
              </div>

              {/* Buttons */}
              <div className="border-t border-gray-200 flex justify-between items-center p-4 bg-gray-50">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded text-sm"
                  onClick={() => navigate(`/update/${product._id}`)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyEquipmentListPage;
