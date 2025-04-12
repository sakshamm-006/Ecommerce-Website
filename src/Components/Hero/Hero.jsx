import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Elevate your style with our premium men's collection. Explore the latest trends and timeless classics.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Discover the perfect outfit for every occasion. Our women's collection offers a wide range of styles and sizes.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Don't miss out on our biggest sale of the year! Get incredible discounts on all your favorite products.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
  };

  return (
    <div className="relative h-[600px] bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${ImageList[0].img})` }}></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="h-full flex items-center">
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight transition-transform transform hover:scale-105 duration-300">
                    {data.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed transition-opacity duration-300 hover:opacity-80">
                    {data.description}
                  </p>
                  <button
                    onClick={handleOrderPopup}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl"
                  >
                    Order Now
                  </button>
                </div>
                <div className="hidden md:block">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="max-w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
                    style={{ maxHeight: "400px", margin: "0 auto" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;