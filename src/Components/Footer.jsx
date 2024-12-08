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
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="text-gray-100"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
            </svg>
            <p className="text-sm">
              Sports Equipment <br />
              Strength and performance since 1992
            </p>
          </aside>

          {/* Social Links */}
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <a className="hover:scale-110 transition-transform">
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
            <a className="hover:scale-110 transition-transform">
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
            <a className="hover:scale-110 transition-transform">
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
