import React from "react";
import BannerImg from "../../assets/4547829.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image section */}
          <div className="flex justify-center">
            <img
              src='https://img.freepik.com/free-vector/spring-sale-concept_52683-56424.jpg?uid=R185040050&ga=GA1.1.252232774.1737719175&semt=ais_hybrid'
              alt="Winter Sale"
              className="max-w-[400px] h-[390px] w-full mx-auto object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
            />
          </div>

          {/* Text detail section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Winter Sale Up to 50% Off
            </h1>
            <p className="text-sm text-gray-600 tracking-wide leading-5">
              Discover amazing deals on our winter collection. Don't miss out on quality products at unbeatable prices!
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <GrSecure className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p className="text-gray-700">Quality Products</p>
              </div>
              <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <IoFastFood className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p className="text-gray-700">Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p className="text-gray-700">Easy Payment Method</p>
              </div>
              <div className="flex items-center gap-4 transition-transform duration-300 hover:scale-105">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p className="text-gray-700">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;