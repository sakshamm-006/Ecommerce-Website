"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ShoppingCart, Eye, Star, Heart } from "lucide-react"
import "./TopRatedClothes.css"
import Footer_top from "./Footer_top"

const topRatedClothes = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "₹399",
    rating: 4.5,
    reviews: 120,
    colors: ["white", "black", "gray"],
    description: "A timeless classic that never goes out of style. Made from 100% organic cotton for ultimate comfort.",
  },
  {
    id: 2,
    name: "Denim Jacket",
    image:
      "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "₹799",
    rating: 4.8,
    reviews: 95,
    colors: ["blue", "black"],
    description:
      "Versatile denim jacket that pairs well with any outfit. Features a modern fit and durable construction.",
  },
  {
    id: 3,
    name: "Summer Dress",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "₹999",
    rating: 4.7,
    reviews: 180,
    colors: ["red", "blue", "green"],
    description: "Light and breezy summer dress perfect for warm days. Made from a breathable fabric blend.",
  },
  {
    id: 4,
    name: "Black Leather Jacket",
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "₹1299",
    rating: 4.9,
    reviews: 230,
    colors: ["black"],
    description: "Sleek and stylish leather jacket that adds an edge to any outfit. Made from premium quality leather.",
  },
]

const bannerSlides = [
  {
    id: 1,
    title: "Summer Collection 2025",
    subtitle: "Discover the hottest trends of the season",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    cta: "Shop Now",
    color: "from-purple-600 to-pink-500",
  },
  {
    id: 2,
    title: "Exclusive Discounts",
    subtitle: "Up to 50% off on premium brands",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    cta: "View Offers",
    color: "from-blue-600 to-indigo-500",
  },
  {
    id: 3,
    title: "New Arrivals",
    subtitle: "Be the first to wear our latest designs",
    image:
      "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    cta: "Explore",
    color: "from-emerald-500 to-teal-400",
  },
]

const SlidingBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerSlides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="sliding-banner">
      <div className="banner-container">
        {bannerSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`banner-slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className={`banner-content bg-gradient-to-r `}>
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <button className="slide-cta">{slide.cta}</button>
            </div>
          </div>
        ))}
      </div>
      <button className="banner-nav prev" onClick={goToPrevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="banner-nav next" onClick={goToNextSlide}>
        <ChevronRight size={24} />
      </button>
      <div className="banner-indicators">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

const AnimatedHeading = () => {
  return (
    <div className="animated-heading">
      <h1 className="heading-text">
        <span className="gradient-text">Premium Top-Rated Collection</span>
      </h1>
      <p className="heading-description">
        Discover our curated collection of most-loved fashion pieces, handpicked for style and quality.
      </p>
    </div>
  )
}

const FeaturedItem = ({ item }) => (
  <div className="featured-item compact">
    <div className="featured-badge">
      <span>Featured</span>
    </div>
    <div className="featured-content">
      <div className="featured-image-container">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="featured-image" />
        <div className="featured-overlay">
          <button className="featured-quick-view">
            <Eye size={20} /> Quick View
          </button>
        </div>
      </div>
      <div className="featured-details">
        <h3 className="featured-title">{item.name}</h3>
        <p className="featured-description">{item.description}</p>
        <div className="featured-rating">
          <StarRating rating={item.rating} />
          <span className="review-count">
            {item.rating} ({item.reviews} reviews)
          </span>
        </div>
        <p className="featured-price">{item.price}</p>
        <ColorPicker colors={item.colors} selectedColor={item.colors[0]} onColorChange={() => {}} />
        <button className="featured-cta">
          <ShoppingCart size={18} /> Add to Cart
        </button>
      </div>
    </div>
  </div>
)

const ColorPicker = ({ colors, selectedColor, onColorChange }) => (
  <div className="color-picker">
    <span className="color-label">Colors:</span>
    {colors.map((color) => (
      <button
        key={color}
        className={`color-option ${selectedColor === color ? "selected" : ""}`}
        style={{ backgroundColor: color }}
        onClick={() => onColorChange(color)}
        aria-label={`Select ${color} color`}
      />
    ))}
  </div>
)

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < Math.floor(rating) ? "star filled" : "star"}>
        <Star size={16} className={i < Math.floor(rating) ? "filled" : ""} />
      </span>
    ))}
    {rating % 1 > 0 && (
      <span className="star half-filled">
        <Star size={16} className="half-filled" />
      </span>
    )}
  </div>
)

const QuickViewModal = ({ item, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <h2 className="modal-title">{item.name}</h2>
      <img src={item.image || "/placeholder.svg"} alt={item.name} className="modal-image" />
      <p className="modal-description">{item.description}</p>
      <p className="modal-price">{item.price}</p>
      <div className="modal-rating">
        <StarRating rating={item.rating} />
        <span className="modal-reviews">
          {item.rating} ({item.reviews} reviews)
        </span>
      </div>
      <ColorPicker colors={item.colors} selectedColor={item.colors[0]} onColorChange={() => {}} />
      <div className="modal-actions">
        <button className="modal-add-to-cart">
          <ShoppingCart size={18} /> Add to Cart
        </button>
        <button className="modal-wishlist">
          <Heart size={18} /> Add to Wishlist
        </button>
      </div>
    </div>
  </div>
)

const TopRatedClothes = () => {
  const [selectedColor, setSelectedColor] = useState({})
  const [quickViewItem, setQuickViewItem] = useState(null)

  return (
    <div className="top-rated-clothes">
      <SlidingBanner />

      <div className="container">
        <AnimatedHeading />

        <FeaturedItem item={topRatedClothes[0]} />

        <div className="collection-header">
          <h2 className="collection-title">Our Collection</h2>
          <div className="collection-decoration">
            <span className="decoration-dot"></span>
            <span className="decoration-line"></span>
            <span className="decoration-dot"></span>
          </div>
        </div>

        <div className="clothes-grid">
          {topRatedClothes.map((item) => (
            <div key={item.id} className="clothes-card">
              <div className="card-image-container">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="card-image" />
                <div className="card-overlay">
                  <button className="card-quick-view" onClick={() => setQuickViewItem(item)}>
                    <Eye size={18} />
                  </button>
                  <button className="card-wishlist">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-price">{item.price}</p>
                <div className="card-rating">
                  <StarRating rating={item.rating} />
                  <span className="card-reviews">({item.reviews})</span>
                </div>
                <ColorPicker
                  colors={item.colors}
                  selectedColor={selectedColor[item.id] || item.colors[0]}
                  onColorChange={(color) => setSelectedColor({ ...selectedColor, [item.id]: color })}
                />
                <button className="card-add-to-cart">
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {quickViewItem && <QuickViewModal item={quickViewItem} onClose={() => setQuickViewItem(null)} />}
        <Footer_top />
    </div>

  )
}

export default TopRatedClothes

