import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10"> {/* Changed text-left to text-center */}
          <p className="text-sm text-primary">Top Rated Products for You</p>
          <h1 className="text-3xl font-bold">Best Products</h1>
          <p className="text-xs text-gray-400">
            Discover our top-rated products that you will love!
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black relative shadow-lg duration-300 group max-w-[300px] overflow-hidden"
            >
              {/* Image section */}
              <div className="h-[200px] flex items-center justify-center">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-w-[140px] block mx-auto transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center">
                {/* Star rating */}
                <div className="w-full flex items-center justify-center gap-1 mb-2">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-gray-300" /> {/* Optional fifth star */}
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-gray-800 duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:bg-blue-600 duration-300 text-white py-2 px-4 rounded-full mt-4 transition-transform transform hover:scale-105"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;