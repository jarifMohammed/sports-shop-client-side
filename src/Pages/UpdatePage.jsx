import { useContext, useState } from "react";
import NavBar from "../Components/NavBar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const {
    itemName,
    categoryName,
    description,
    price,
    image,
    rating,
    customization,
    processingTime,
    stockStatus,
    userEmail,
    userName,
  } = product;

  // Rename state variables to avoid conflict
  const [imageState, setImage] = useState(image);
  const [itemNameState, setItemName] = useState(itemName);
  const [categoryNameState, setCategoryName] = useState(categoryName);
  const [descriptionState, setDescription] = useState(description);
  const [priceState, setPrice] = useState(price);
  const [ratingState, setRating] = useState(rating);
  const [customizationState, setCustomization] = useState(customization);
  const [processingTimeState, setProcessingTime] = useState(processingTime);
  const [stockStatusState, setStockStatus] = useState(stockStatus);
  const [userEmailState] = useState(userEmail); // Static example email (can be dynamic)
  const [userNameState] = useState(userName); // Static example name (can be dynamic)

  const handleUpdate = (e) => {
    e.preventDefault(); // Prevent the default form submission

    const updatedProduct = {
      itemName: itemNameState,
      categoryName: categoryNameState,
      description: descriptionState,
      price: priceState,
      image: imageState,
      rating: ratingState,
      customization: customizationState,
      processingTime: processingTimeState,
      stockStatus: stockStatusState,
      userEmail: userEmailState,
      userName: userNameState,
    };

    // Send to the server
    fetch(`https://equi-sport-server.vercel.app/product/${product._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Parse JSON if request is successful
        } else {
          throw new Error("Failed to update product");
        }
      })
      .then((data) => {
        // Show success alert
        Swal.fire({
          title: "Success!",
          text: "Product has been updated successfully.",
          icon: "success",
          confirmButtonText: "Okay",
        });
      })
      .catch((error) => {
        // Show error alert if there was an issue
        Swal.fire({
          title: "Error!",
          text: "There was an issue updating the product. Please try again.",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <>
      <div className="w-11/12 mx-auto mt-5">
        <NavBar></NavBar>
      </div>
      <div className="w-11/12 mt-5 rounded-xl container mx-auto bg-slate-300 p-7">
        <h2 className="text-2xl font-semibold text-center mb-6">Update Item</h2>
        <form
          onSubmit={handleUpdate}
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
              value={imageState}
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
              value={itemNameState}
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
              value={priceState}
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
              value={categoryNameState}
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
              value={descriptionState}
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
              value={ratingState}
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
              value={customizationState}
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
              value={processingTimeState}
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
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdatePage;
