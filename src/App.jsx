import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import TopRatedClothes from "./Components/pages/topRatedClothes";
import Contact from "./Components/pages/Contact";
import KidsWear from "./Components/pages/KidsWear"
import MensWear from "./Components/pages/MensWear";


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero handleOrderPopup={handleOrderPopup} />
                <Products />
                <TopProducts handleOrderPopup={handleOrderPopup} />
                <Banner />
                <Subscribe />
                <Testimonials />
                <Footer />
                <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
              </>
            }
          />
          {/* About Page */}
          <Route path="/clothes" element={<TopRatedClothes />} />
          {/* Contact Page */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/kidswear" element={<KidsWear />} />
          <Route path="/menswear" element={<MensWear />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
