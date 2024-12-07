import React from 'react';

const Member = () => {
    return (
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Become a Premium Member & Save 10%!
            </h2>
            <div className="bg-gray-700 text-white p-8 rounded-3xl shadow-xl mx-auto w-full md:w-3/4 lg:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                Special Offer Just for You
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Buy 5 products and become a premium member card holder to unlock a 10% discount on all future purchases. 
                Get exclusive benefits like faster shipping, early access to new arrivals, and more!
              </p>
              <p className="text-lg font-semibold text-gray-100 mb-6">
                Don't miss out on this amazing deal.
              </p>
              <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition">
                Become a Premium Member Now
              </button>
            </div>
          </div>
        </section>
      );
};

export default Member;