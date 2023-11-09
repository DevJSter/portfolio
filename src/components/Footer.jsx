import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto px-4 sm:px-6 ">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200 md:mt-36">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <p>Vivek Sahu </p>
              <p className=" text-gray-500">Your own web developer😊</p>
            </div>
          </div>

          {/* 4th block
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Quick Links</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link 
                  to="/"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/category"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Category
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/trendy"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Trendy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="ContactUs"
                  className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div> */}

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Any Queries?</h6>
            <p className="text-sm text-gray-600 mb-4">
              Wanna stay updated with my work? drop your email here.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 border rounded-lg focus:border-gray-500  focus:outline-none px-3 py-2 pr-12 text-sm"
                      placeholder="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute inset-0 left-auto"
                      aria-label="Subscribe"
                    >
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom area */}
        <div className="flex flex-col md:flex-row items-center justify-center py-4 md:py-8 border-t border-gray-200">
          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a
                href="https://www.linkedin.com/in/vwakesahu/"
                target="_blank"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-sm shadow transition duration-150 ease-in-out text-xl"
                aria-label="Twitter"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.github.com/vwakesahu"
                target="_blank"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900  rounded-full shadow transition duration-150 ease-in-out text-xl"
                aria-label="Github"
              >
                <AiOutlineGithub />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.instagram.com/viveksahu___"
                target="_blank"
                className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out text-xl"
                aria-label="Facebook"
              >
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>

          <div className="text-sm text-center text-gray-600 mr-4">
            Thanks for visiting my portfolio 😊. Sending love from bottom of my
            heart ❤️
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
