import React from "react"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer_top = () => {
  return (
    <footer className="bg-gradient-to-r from-primary/20 to-secondary/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Top Rated Products</h3>
            <p className="text-sm text-primary/70">Discover our most loved items, chosen by parents and adored by kids!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-primary/80">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "Categories", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary/70 hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Customer Service</h4>
            <ul className="space-y-2">
              {["FAQ", "Returns", "Shipping", "Size Guide", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-primary/70 hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Newsletter</h4>
            <p className="text-sm text-primary/70 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 text-sm font-semibold rounded-r-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary/20 text-center">
          <p className="text-sm text-primary/60">© {new Date().getFullYear()} KidsVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer_top

