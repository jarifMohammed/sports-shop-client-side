// import React from "react";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-200 p-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Services */}
          <nav>
            <h6 className="footer-title text-lg font-semibold mb-4 text-gray-100">Services</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Branding</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Design</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Marketing</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Advertisement</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="footer-title text-lg font-semibold mb-4 text-gray-100">Company</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">About Us</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Contact</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Jobs</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Press Kit</a></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="footer-title text-lg font-semibold mb-4 text-gray-100">Legal</h6>
            <ul className="space-y-2">
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Terms of Use</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Privacy Policy</a></li>
              <li><a className="link link-hover text-gray-400 hover:text-gray-100">Cookie Policy</a></li>
            </ul>
          </nav>
        </div>
      </footer>

      <footer className="bg-gray-900 text-gray-200 border-t border-gray-700 px-6 py-4 rounded-b-lg mt-4 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <aside className="flex items-center space-x-4">
          <iframe
            src="https://lottie.host/embed/93dda559-1fa8-4f79-ae62-437cd21e7f28/Cyimimw3DD.lottie"
            className="w-10 h-10"
            title="Logo Animation"
            style={{ pointerEvents: "none" }}
          ></iframe>
            <p className="text-sm">
              Sports Equipment <br />
              
            </p>
          </aside>

          {/* Social Links */}
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/mohammed.jarif.965" className="hover:scale-110 transition-transform">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-blue-500 hover:text-blue-300"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/" className="hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-gray-400 hover:text-gray-200"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/mohammed.jarif.965" className="hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current text-red-600 hover:text-red-400"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
