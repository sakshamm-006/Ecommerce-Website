import React, { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Footer_kids from "./Footer_kids"

const bannerItems = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Light & Comfortable Wear",
    image: "https://img.freepik.com/premium-photo/baby-is-sitting-suitcase-getting-ready-travel_73944-18534.jpg?w=1380",
    color: "bg-indigo-100",
  },
  {
    id: 2,
    title: "Back to School",
    description: "Uniforms & Accessories",
    image: "https://img.freepik.com/premium-photo/happy-teen-european-girl-with-backpack-points-finger-abstract-cloud-with-inscription-back_116547-69371.jpg?w=1380",
    color: "bg-purple-100",
  },
  {
    id: 3,
    title: "Party Wear",
    description: "Stylish Outfits for Special Occasions",
    image:
      "https://img.freepik.com/premium-photo/sad-unpleased-kid-with-curly-hair-hat-point-finger-copy-space-teen-girl-red-background-portrait-child-wearing-warm-clothes-express-emotion-winter-fashion_474717-149758.jpg?w=1380",
    color: "bg-pink-100",
  },
]

const categories = [
  {
    id: 1,
    name: "Casual Wear",
    image: "https://img.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall_155003-13446.jpg?t=st=1738085367~exp=1738088967~hmac=9ad52c0d8b2c694864230f5351275136835d17abda6f2c989b2d811205b4be4d&w=1060",
    items: "150+ Items",
  },
  {
    id: 2,
    name: "Party Wear",
    image: "https://img.freepik.com/free-photo/full-shot-teenager-posing_23-2149273208.jpg?ga=GA1.1.252232774.1737719175&semt=ais_hybrid",
    items: "80+ Items",
  },
  {
    id: 3,
    name: "School Uniforms",
    image: "https://img.freepik.com/free-psd/school-boy-isolated_23-2151852931.jpg?ga=GA1.1.252232774.1737719175&semt=ais_hybrid",
    items: "100+ Items",
  },
  {
    id: 4,
    name: "Sports Wear",
    image: "https://img.freepik.com/free-photo/smiling-young-handsome-sporty-boy-wearing-headband-wristbands-with-dental-braces-looking-camera-jumping-rope-isolated-white-background_141793-77366.jpg?ga=GA1.1.252232774.1737719175&semt=ais_hybrid",
    items: "90+ Items",
  },
  {
    id: 6,
    name: "Winter Wear",
    image: "https://img.freepik.com/free-photo/expressive-teenage-girl-is-posing_176474-60633.jpg?ga=GA1.1.252232774.1737719175&semt=ais_hybrid",
    items: "70+ Items",
  },  
]

const kidsClothes = [
  {
    id: 1,
    name: "Colorful T-Shirt Set",
    image: "https://img.freepik.com/free-photo/front-view-cute-boy-white-t-shirt-yellow-jeans-holding-green-skateboard-blue-space_179666-970.jpg?uid=R185040050&ga=GA1.1.252232774.1737719175&semt=ais_hybrid",
    price: "$25",
    rating: 4.7,
    reviews: 89,
    colors: ["indigo", "purple", "blue"],
    description: "A set of vibrant and comfortable t-shirts perfect for active kids.",
    ageGroup: "4-8 years",
  },
  {
    id: 2,
    name: "Denim Overalls",
    image: "/placeholder.svg?height=500&width=500",
    price: "$35",
    rating: 4.5,
    reviews: 62,
    colors: ["blue", "indigo"],
    description: "Cute and durable denim overalls with adjustable straps.",
    ageGroup: "2-6 years",
  },
  {
    id: 3,
    name: "Princess Dress",
    image: "/placeholder.svg?height=500&width=500",
    price: "$40",
    rating: 4.8,
    reviews: 105,
    colors: ["purple", "indigo", "pink"],
    description: "A magical princess dress with tulle skirt and glitter details.",
    ageGroup: "3-8 years",
  },
  {
    id: 4,
    name: "Dinosaur Pajama Set",
    image: "/placeholder.svg?height=500&width=500",
    price: "$30",
    rating: 4.6,
    reviews: 78,
    colors: ["green", "blue", "purple"],
    description: "Cozy pajama set with fun dinosaur prints.",
    ageGroup: "3-10 years",
  },
  {
    id: 5,
    name: "Sporty Tracksuit",
    image: "/placeholder.svg?height=500&width=500",
    price: "$45",
    rating: 4.4,
    reviews: 56,
    colors: ["blue", "indigo", "red"],
    description: "Comfortable tracksuit for active kids and sports enthusiasts.",
    ageGroup: "6-12 years",
  },
  {
    id: 6,
    name: "Floral Summer Dress",
    image: "/placeholder.svg?height=500&width=500",
    price: "$38",
    rating: 4.9,
    reviews: 92,
    colors: ["purple", "blue", "pink"],
    description: "Light and breezy summer dress with beautiful floral patterns.",
    ageGroup: "4-10 years",
  },
]

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
    {children}
  </button>
)

const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>
    {children}
  </div>
)

const ColorPicker = ({ colors, selectedColor, onColorChange }) => (
  <div className="flex gap-2">
    {colors.map((color) => (
      <button
        key={color}
        className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-primary" : "border-transparent"}`}
        style={{ backgroundColor: color }}
        onClick={() => onColorChange(color)}
      />
    ))}
  </div>
)

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
          }`}
      />
    ))}
  </div>
)

const KidsWear = () => {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [selectedColor, setSelectedColor] = useState({})

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerItems.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerItems.length) % bannerItems.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Top Banner Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentBanner * 100}%)` }}
        >
          {bannerItems.map((item) => (
            <div key={item.id} className={`w-full flex-shrink-0 ${item.color} relative h-[400px]`}>
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: item.id === 3 ? "center 20%" : "center" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="container h-full flex items-center relative z-10">
                <div className="w-1/2 space-y-4">
                  <h2 className="text-4xl font-bold text-white">{item.title}</h2>
                  <p className="text-xl text-white/90">{item.description}</p>
                  <Button className="bg-white hover:bg-white/90 text-primary">Shop Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="h-6 w-6 text-primary" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="h-6 w-6 text-primary" />
        </button>
      </div>

      {/* Categories Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Shop by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div key={category.id} className="w-[calc(50%-0.5rem)] max-w-[200px] group cursor-pointer">
                <div className="bg-white rounded-lg p-4 text-center transition-shadow hover:shadow-md">
                  <div className="aspect-square relative mb-3 rounded-full overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 text-primary">{category.name}</h3>
                  <p className="text-xs text-primary/70">{category.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-15 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidsClothes.map((product) => (
              <Card key={product.id} className="group">
                <CardContent>
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-primary">{product.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-primary/90">{product.price}</span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={product.rating} />
                      <span className="text-sm text-primary/70">({product.reviews})</span>
                    </div>
                  </div>
                  <ColorPicker
                    colors={product.colors}
                    selectedColor={selectedColor[product.id] || product.colors[0]}
                    onColorChange={(color) => setSelectedColor({ ...selectedColor, [product.id]: color })}
                  />
                  <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer_kids />
    </div>
  )
}

export default KidsWear

