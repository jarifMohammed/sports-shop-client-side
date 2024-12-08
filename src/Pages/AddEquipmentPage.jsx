import { useContext, useState } from "react";
import NavBar from "../Components/NavBar";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import Loading from "./Loading"; // Import the loading component

const AddEquipmentPage = () => {
  const { user } = useContext(AuthContext); // Get user from AuthContext
  const [image, setImage] = useState("");
  const [itemName, setItemName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [customization, setCustomization] = useState("");
  const [processingTime, setProcessingTime] = useState("");
  const [stockStatus, setStockStatus] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    setLoading(true); // Set loading to true when starting the submission process

    // Create the form data payload
    const newProduct = {
      itemName,
      categoryName,
      description,
      price,
      image,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    // console.log(newProduct);

    // Send to the server
    fetch("https://equi-sport-server.vercel.app/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Parse JSON if request is successful
        } else {
          throw new Error("Failed to add item");
        }
      })
      .then((data) => {
        // console.log(data);
        setLoading(false); // Stop loading when the data is received
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "The item has been successfully added.",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        setLoading(false); // Stop loading even if there was an error
        // Show error alert if there was an issue
        Swal.fire({
          title: "Error!",
          text: "There was an issue adding the item. Please try again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <>
      <div className="w-11/12 mx-auto mt-5">
        <NavBar />
      </div>
      <div className="w-11/12 mt-5 rounded-xl container mx-auto bg-slate-300 p-7">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add New Item
        </h2>

        {/* Show Loading spinner when loading is true */}
        {loading ? (
          <Loading /> // Display the loading spinner
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* User Email (Read-only) */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                User Email
              </label>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="mt-2 block w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            {/* User Name (Read-only) */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                User Name
              </label>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="mt-2 block w-full p-2 border border-gray-300 rounded bg-gray-100"
              />
            </div>

            {/* Image */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter image URL"
                required
              />
            </div>

            {/* Item Name */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Item Name
              </label>
              <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter item name"
                required
              />
            </div>

            {/* Price */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter price"
                required
              />
            </div>

            {/* Category Name */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Category Name
              </label>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter category"
                required
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter item description"
                required
              />
            </div>

            {/* Rating */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter rating"
                required
              />
            </div>

            {/* Customization */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Customization
              </label>
              <input
                type="text"
                value={customization}
                onChange={(e) => setCustomization(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter customization options"
              />
            </div>

            {/* Processing Time */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Processing Time
              </label>
              <input
                type="text"
                value={processingTime}
                onChange={(e) => setProcessingTime(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter delivery time"
                required
              />
            </div>

            {/* Stock Status */}
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700">
                Stock Status
              </label>
              <select
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="inStock">In Stock</option>
                <option value="outOfStock">Out of Stock</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center mt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-500 text-white py-2 px-6 rounded"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Adding..." : "Add Item"}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default AddEquipmentPage;
