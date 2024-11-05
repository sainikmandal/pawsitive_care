import React from 'react';
import { Heart, ShoppingBag, MessageCircle, PawPrint } from 'lucide-react';
import './App.css';

// Header Component
const Header = () => (
  <header className="border-b">
    <div className="container mx-auto px-4 py-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <PawPrint className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold text-indigo-600">PawsitiveCare</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="header-nav-link">Home</a>
          <a href="#" className="header-nav-link">Services</a>
          <a href="#" className="header-nav-link">Shop</a>
          <a href="#" className="header-nav-link">Contact</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-primary">Consult Now</button>
          <ShoppingBag className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>
      </nav>
    </div>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="footer mt-20 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <PawPrint className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-indigo-600">PawsitiveCare</span>
          </div>
          <p className="text-gray-600">Your trusted partner in pet healthcare</p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">About Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Shop</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Online Consultation</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Pet Store</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Health Check</a></li>
            <li><a href="#" className="text-gray-600 hover:text-indigo-600">Emergency Care</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="text-gray-600">support@pawsitivecare.com</li>
            <li className="text-gray-600">+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t text-center text-gray-600">
        <p>&copy; 2024 PawsitiveCare. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Pet Care At Your Fingertips
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with verified veterinarians instantly and shop premium pet products.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Consult a Vet Now
                </button>
                <button className="btn-secondary">
                  Visit Store
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="service-card p-6 rounded-xl border hover:shadow-lg">
                <MessageCircle className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Online Consultation</h3>
                <p className="text-gray-600">Connect with experienced vets from the comfort of your home</p>
              </div>
              <div className="service-card p-6 rounded-xl border hover:shadow-lg">
                <ShoppingBag className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Pet Store</h3>
                <p className="text-gray-600">Premium food, toys, and accessories for your furry friends</p>
              </div>
              <div className="service-card p-6 rounded-xl border hover:shadow-lg">
                <Heart className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Health Check</h3>
                <p className="text-gray-600">AI-powered preliminary health assessment tool</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;