import { useState } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Footer_mens from "./Footer_mens"

const bannerItems = [
  {
    id: 1,
    title: "Summer Collection",
    description: "Stylish & Comfortable Wear",
    image:
      "https://img.freepik.com/free-photo/concept-tourism-lifestyle-happy-young-male-tourist-showing-advertisement-pointing-finger-left_1258-154001.jpg?t=st=1739872734~exp=1739876334~hmac=978103ec076596ee00b9daa0cbb46c1b1fb1b001993928f7b1c3ff94364f538e&w=1380",
    color: "bg-blue-100",
  },
  {
    id: 2,
    title: "Office Wear",
    description: "Professional & Elegant",
    image:
      "https://img.freepik.com/free-photo/image-handsome-caucasian-man-party-suit-smiling-pleased-attend-formal-event-standing-whit_1258-154888.jpg?t=st=1739872603~exp=1739876203~hmac=e02e75b9f784ea682e3269dc7d1455bde6bfc3e3c088de00457cb83271c7b529&w=1380",
    color: "bg-gray-100",
  },
  {
    id: 3,
    title: "Casual Wear",
    description: "Relaxed & Trendy Outfits",
    image:
      "https://img.freepik.com/free-photo/confident-macho-man-put-sunglasses-looking-cool-sassy-standing-blue-background_1258-153254.jpg?t=st=1739872405~exp=1739876005~hmac=f3a718619a813cdc95be94a6161024365ce2187f682a4d95e9eafbc0123bc5eb&w=1380",
    color: "bg-green-100",
  },
]

const categories = [
  {
    id: 1,
    name: "Casual Wear",
    image:
      "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?w=1380&t=st=1706701697~exp=1706702297~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    items: "200+ Items",
  },
  {
    id: 2,
    name: "Formal Wear",
    image:
      "https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19720.jpg?w=1380&t=st=1706701745~exp=1706702345~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    items: "150+ Items",
  },
  {
    id: 3,
    name: "Activewear",
    image:
      "https://img.freepik.com/free-photo/muscular-man-doing-push-ups-one-hand_7502-4775.jpg?w=1380&t=st=1706701891~exp=1706702491~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    items: "100+ Items",
  },
  {
    id: 4,
    name: "Outerwear",
    image:
      "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-warm-sweater-fashion-man-posing_158538-4963.jpg?w=1380&t=st=1706701930~exp=1706702530~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    items: "80+ Items",
  },
  {
    id: 5,
    name: "Accessories",
    image:
      "https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?w=1380&t=st=1706701972~exp=1706702572~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    items: "120+ Items",
  },
]

const mensClothes = [
  {
    id: 1,
    name: "Classic White Shirt",
    image:
      "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-white-shirt-fashion-man-posing_158538-4970.jpg?w=1380&t=st=1706702052~exp=1706702652~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    price: "$45",
    rating: 4.8,
    reviews: 120,
    colors: ["white", "blue", "black"],
    description: "A timeless classic white shirt for any occasion.",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    image:
      "https://img.freepik.com/free-photo/jeans_1203-8093.jpg?w=1380&t=st=1706702090~exp=1706702690~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    price: "$65",
    rating: 4.6,
    reviews: 95,
    colors: ["blue", "black", "gray"],
    description: "Comfortable and stylish slim fit jeans for everyday wear.",
  },
  {
    id: 3,
    name: "Casual Blazer",
    image:
      "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-elegant-suit-fashion-man_158538-5023.jpg?w=1380&t=st=1706702129~exp=1706702729~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    price: "$120",
    rating: 4.7,
    reviews: 78,
    colors: ["navy", "gray", "black"],
    description: "A versatile casual blazer for both formal and informal occasions.",
  },
  {
    id: 4,
    name: "Polo Shirt",
    image:
      "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?w=1380&t=st=1706702165~exp=1706702765~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    price: "$35",
    rating: 4.5,
    reviews: 110,
    colors: ["red", "blue", "green"],
    description: "Classic polo shirt for a smart-casual look.",
  },
  {
    id: 5,
    name: "Leather Jacket",
    image:
      "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-leather-jacket-fashion-man-posing_158538-5024.jpg?w=1380&t=st=1706702203~exp=1706702803~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    price: "$180",
    rating: 4.9,
    reviews: 65,
    colors: ["black", "brown"],
    description: "Stylish leather jacket for a bold and edgy look.",
  },
  {
    id: 6,
    name: "Chino Pants",
    image:
      "https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19722.jpg?w=1380&t=st=1706702239~exp=1706702839~hmac=4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b4f0a4c7f4a7c9a8d7c8f5f9b5f8d7c6b",
    price: "$55",
    rating: 4.6,
    reviews: 88,
    colors: ["khaki", "navy", "olive"],
    description: "Comfortable and versatile chino pants for various occasions.",
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
        className={`w-6 h-6 rounded-full border-2 ${selectedColor === color ? "border-blue-600" : "border-transparent"}`}
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
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-blue-600 text-blue-600" : "fill-gray-300 text-gray-300"}`}
      />
    ))}
  </div>
)

const MensWear = () => {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [selectedColor, setSelectedColor] = useState({})

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerItems.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerItems.length) % bannerItems.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-gray-100">
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
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="container h-full flex items-center relative z-10">
                <div className="w-1/2 space-y-4">
                  <h2 className="text-4xl font-bold text-white">{item.title}</h2>
                  <p className="text-xl text-white/90">{item.description}</p>
                  <Button className="bg-white hover:bg-white/90 text-blue-600">Shop Now</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="h-6 w-6 text-blue-600" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="h-6 w-6 text-blue-600" />
        </button>
      </div>

      {/* Categories Section */}
      <section className="bg-gradient-to-r from-blue-200 to-gray-200">
        <div className="container">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Shop by Category</h2>
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
                  <h3 className="text-sm font-semibold mb-1 text-blue-600">{category.name}</h3>
                  <p className="text-xs text-blue-600/70">{category.items}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-15 bg-gradient-to-br from-blue-100 to-gray-100">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mensClothes.map((product) => (
              <Card key={product.id} className="group">
                <CardContent>
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 text-blue-600">{product.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-blue-600/90">{product.price}</span>
                    <div className="flex items-center gap-2">
                      <StarRating rating={product.rating} />
                      <span className="text-sm text-blue-600/70">({product.reviews})</span>
                    </div>
                  </div>
                  <ColorPicker
                    colors={product.colors}
                    selectedColor={selectedColor[product.id] || product.colors[0]}
                    onColorChange={(color) => setSelectedColor({ ...selectedColor, [product.id]: color })}
                  />
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer_mens />
    </div>
  )
}

export default MensWear

