import React, { useState } from 'react';
import { ShoppingCart, Phone, MapPin, Clock, ChevronDown, Star, Flame, Heart } from 'lucide-react';
import heroImage from './assets/beef-suya-roadside-night-1024x768.jpg';

const SuyaWebApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState({});
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);

  const categories = ['all', 'beef', 'chicken', 'goat', 'combos', 'sides'];

  const menuItems = [
    {
      id: 1,
      name: 'Classic Beef Suya',
      category: 'beef',
      price: 15,
      description: 'Tender beef strips marinated in authentic yaji spice blend, flame-grilled to perfection',
      spiceLevel: 3,
      popular: true,
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80'
    },
    {
      id: 2,
      name: 'Spicy Chicken Suya',
      category: 'chicken',
      price: 12,
      description: 'Juicy chicken thighs with extra hot pepper blend, grilled over open flame',
      spiceLevel: 4,
      popular: true,
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=800&q=80'
    },
    {
      id: 3,
      name: 'Premium Goat Suya',
      category: 'goat',
      price: 18,
      description: 'Traditional Nigerian favorite - succulent goat meat with aromatic spices',
      spiceLevel: 3,
      popular: false,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80'
    },
    {
      id: 4,
      name: 'Mixed Grill Combo',
      category: 'combos',
      price: 25,
      description: 'Beef, chicken, and goat suya platter - perfect for sharing or solo feast',
      spiceLevel: 3,
      popular: true,
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80'
    },
    {
      id: 5,
      name: 'Mild Beef Suya',
      category: 'beef',
      price: 15,
      description: 'Perfect for beginners - all the flavor with gentle heat',
      spiceLevel: 1,
      popular: false,
      image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80'
    },
    {
      id: 6,
      name: 'Extra Hot Chicken',
      category: 'chicken',
      price: 13,
      description: 'For the heat seekers - loaded with scotch bonnet peppers',
      spiceLevel: 5,
      popular: false,
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80'
    },
    {
      id: 7,
      name: 'Family Feast',
      category: 'combos',
      price: 45,
      description: 'Feeds 4-6 people - assorted meats, sides, and extra suya spice',
      spiceLevel: 3,
      popular: true,
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80'
    },
    {
      id: 8,
      name: 'Fried Plantain',
      category: 'sides',
      price: 5,
      description: 'Sweet ripe plantains fried to golden perfection',
      spiceLevel: 0,
      popular: true,
      image: 'https://images.unsplash.com/photo-1587334206799-c4e7f6c03b26?w=800&q=80'
    },
    {
      id: 9,
      name: 'Jollof Rice',
      category: 'sides',
      price: 8,
      description: 'Nigerian party rice - smoky, spicy, and incredibly flavorful',
      spiceLevel: 2,
      popular: true,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80'
    },
    {
      id: 10,
      name: 'Fresh Garden Salad',
      category: 'sides',
      price: 6,
      description: 'Cabbage, tomatoes, onions, and cucumbers with house dressing',
      spiceLevel: 0,
      popular: false,
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const updateQuantity = (id, quantity) => {
    setQuantities({...quantities, [id]: quantity});
  };

  const addToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    setCart([...cart, { ...item, quantity }]);
    setQuantities({...quantities, [item.id]: 1});
  };

  const getSpiceIndicator = (level) => {
    return Array(level).fill('🌶️').join('');
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const whatsappNumber = "17135559876"; // Houston number format

  const sendWhatsAppOrder = () => {
    let message = "🔥 *New Suya Order from Suya Spot HTX* 🔥%0A%0A";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}%0A`;
      message += `   Quantity: ${item.quantity}%0A`;
      message += `   Price: ${item.price} x ${item.quantity} = ${(item.price * item.quantity).toFixed(2)}%0A%0A`;
    });
    
    message += `*Total: ${cartTotal.toFixed(2)}*%0A%0A`;
    message += "Please confirm my order. Thank you! 🙏";
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const quickWhatsAppContact = () => {
    const message = "Hi! I'd like to learn more about your menu and place an order. 🌶️";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const openGoogleMaps = () => {
    // Opens Google Maps with Houston, TX
    const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Houston,TX";
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                <Flame className="w-7 h-7 text-red-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Suya Spot HTX</h1>
                <p className="text-xs text-orange-100">Authentic Nigerian Grills</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>11AM - 10PM</span>
              </div>
              <button 
                onClick={() => setShowCartModal(true)}
                className="relative bg-amber-400 text-red-600 p-3 rounded-full hover:bg-amber-300 transition"
              >
                <ShoppingCart className="w-5 h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,  // ✅ CORRECT - With {}
            backgroundPosition: 'center'
          }}
        >
          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)'}}></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-amber-400 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              🔥 NOW OPEN IN HOUSTON
            </span>
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Where Every Bite Tells a Story
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Authentic Nigerian suya, grilled fresh daily with our secret family recipe
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button 
                onClick={quickWhatsAppContact}
                className="bg-amber-400 text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-300 transition transform hover:scale-105 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Order: (713) 555-9876
              </button>
              <button 
                onClick={openGoogleMaps}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition flex items-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Find Us in Houston
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="bg-white shadow-md sticky top-20 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 overflow-x-auto">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filter:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GOOGLE MAP SECTION - RIGHT AFTER FILTERS */}
      <section className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              📍 FIND US
            </span>
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Visit Us in Houston</h3>
            <p className="text-gray-700 text-xl">Come taste authentic Nigerian suya at our location</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* GOOGLE MAP */}
              <div className="bg-white p-4 rounded-2xl shadow-2xl">
                <div className="w-full rounded-xl overflow-hidden" style={{height: '450px'}}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221094.10623322314!2d-95.66907934179688!3d29.817178799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Suya Spot Houston Location Map"
                  ></iframe>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <MapPin className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-gray-900 mb-2">Location</h4>
                      <p className="text-gray-700 text-lg font-semibold">Houston, Texas</p>
                      <p className="text-gray-600 mt-1">Serving all of Houston area</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Clock className="w-8 h-8 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-gray-900 mb-2">Open Daily</h4>
                      <p className="text-gray-700 text-lg">Monday - Sunday</p>
                      <p className="text-gray-900 font-bold text-xl mt-1">11:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Phone className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-2xl text-gray-900 mb-2">Call or Text</h4>
                      <button 
                        onClick={quickWhatsAppContact}
                        className="text-green-600 text-2xl font-bold hover:text-green-700 transition"
                      >
                        (713) 555-9876
                      </button>
                      <p className="text-gray-600 mt-1">WhatsApp available</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={quickWhatsAppContact}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-5 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-600 transition transform hover:scale-105 flex items-center justify-center gap-3 shadow-xl"
                >
                  <Phone className="w-6 h-6" />
                  Order Now via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-3">Our Menu</h3>
          <p className="text-gray-600 text-lg">All meats are halal certified and grilled fresh to order</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 relative">
              {item.popular && (
                <div className="absolute top-4 left-4 bg-amber-400 text-red-600 px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  POPULAR
                </div>
              )}
              
              <button 
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full z-10 hover:scale-110 transition"
              >
                <Heart className={`w-5 h-5 ${favorites.has(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>

              <div className="h-64 overflow-hidden bg-gradient-to-br from-orange-200 to-red-200">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h4>
                    {item.spiceLevel > 0 && (
                      <span className="text-sm">{getSpiceIndicator(item.spiceLevel)}</span>
                    )}
                  </div>
                  <span className="text-2xl font-black text-red-600">${item.price}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

                <div className="flex gap-3">
                  <select
                    value={quantities[item.id] || 1}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>Qty: {num}</option>
                    ))}
                  </select>

                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 rounded-lg font-bold hover:from-red-700 hover:to-orange-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowCartModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6" />
                  Your Cart ({cart.length} items)
                </h3>
                <button 
                  onClick={() => setShowCartModal(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-96">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">Your cart is empty</p>
                  <button 
                    onClick={() => setShowCartModal(false)}
                    className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-red-600 font-bold mt-1">
                          ${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-600 hover:bg-red-50 px-3 rounded-lg transition self-start"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-3xl font-black text-red-600">${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    sendWhatsAppOrder();
                    setShowCartModal(false);
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-600 transition flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Send Order via WhatsApp
                </button>
                <p className="text-center text-gray-600 text-sm mt-3">
                  Your order will be sent to our WhatsApp for confirmation
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-2xl shadow-2xl z-50 max-w-sm">
          <h4 className="font-bold text-lg mb-2">Cart Summary</h4>
          <div className="mb-3 max-h-32 overflow-y-auto">
            {cart.map((item, idx) => (
              <div key={idx} className="text-sm mb-1">
                {item.quantity}x {item.name}
              </div>
            ))}
          </div>
          <p className="text-3xl font-black mb-4">${cartTotal.toFixed(2)}</p>
          <button 
            onClick={() => setShowCartModal(true)}
            className="w-full bg-white text-green-600 py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            View Cart & Checkout
          </button>
        </div>
      )}

      {/* Location Section with Google Map */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Visit Us</h3>
            <p className="text-gray-600 text-lg">Come experience authentic Nigerian suya in Houston</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221094.10623322314!2d-95.66907934179688!3d29.817178799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suya Spot Houston Location"
              ></iframe>
            </div>

            {/* Location Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <MapPin className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Our Location</h4>
                  <p className="text-gray-700 mb-1">Houston, Texas</p>
                  <p className="text-gray-600 text-sm">Serving the greater Houston area</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <Clock className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Hours</h4>
                  <p className="text-gray-700">Monday - Sunday</p>
                  <p className="text-gray-700 font-semibold">11:00 AM - 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <Phone className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl text-gray-900 mb-2">Contact</h4>
                  <button 
                    onClick={quickWhatsAppContact}
                    className="text-red-600 font-semibold hover:text-red-700 transition"
                  >
                    (713) 555-9876
                  </button>
                  <p className="text-gray-600 text-sm mt-1">Click to message us on WhatsApp</p>
                </div>
              </div>

              <button
                onClick={quickWhatsAppContact}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-xl font-bold hover:from-red-700 hover:to-orange-700 transition transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Get Directions & Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 mt-0">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h5 className="font-bold text-lg mb-3 text-amber-400">Location</h5>
              <p className="text-gray-300">Houston, Texas</p>
              <p className="text-gray-400 text-sm mt-2">Serving the greater Houston area</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3 text-amber-400">Hours</h5>
              <p className="text-gray-300">Monday - Sunday</p>
              <p className="text-gray-300">11:00 AM - 10:00 PM</p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-3 text-amber-400">Contact</h5>
              <button 
                onClick={quickWhatsAppContact}
                className="text-gray-300 hover:text-amber-400 transition"
              >
                (713) 555-9876
              </button>
              <p className="text-gray-300">info@suyaspothtx.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Suya Spot Houston. All rights reserved. Made with ❤️ and 🌶️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SuyaWebApp;