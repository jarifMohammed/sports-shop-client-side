import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-teal-100 to-lime-200">
      <div className="text-center p-8 rounded-xl shadow-lg bg-white w-full max-w-md">
        <motion.h1
          className="text-6xl font-bold text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link to="/" className="btn btn-primary py-2 px-6 rounded-full text-white font-semibold">
            Go Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PageNotFound;
