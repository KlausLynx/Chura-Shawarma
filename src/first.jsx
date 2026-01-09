import React, { useState, useRef } from 'react';
import { ShoppingCart, Phone, MapPin, Clock, Star, Heart } from 'lucide-react';
import heroImage from './assets/beef-suya-roadside-night-1024x768.jpg';


const SuyaWebApp = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [quantities, setQuantities] = useState({});
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const menuRef = useRef(null);
  const orderRef = useRef(null)

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
      image: 'https://images.unsplash.com/photo-1725013936336-0121addb2c53?w=800&q=80'
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

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

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const getSpiceIndicator = (level) => {
    return Array(level).fill('🌶️').join('');
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const whatsappNumber = "2347067179435";

  const sendWhatsAppOrder = () => {
    let message = "🔥 *New Suya Order from Angel Flame HTX* 🔥%0A%0A";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}%0A`;
      message += `   Quantity: ${item.quantity}%0A`;
      message += `   Price: $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}%0A%0A`;
    });
    
    message += `*Total: $${cartTotal.toFixed(2)}*%0A%0A`;
    message += "Please confirm my order...Send your acct details for transaction... Thank you! 🙏";
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const quickWhatsAppContact = () => {
    const message = "Hi! I'd like to learn more about your menu and place an order. 🌶️";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-red-700 via-orange-600 to-red-600">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-amber-400 text-red-600 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 animate-pulse">
              🔥 NOW OPEN IN HOUSTON
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              Where Every Bite Tells a Story
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-orange-100">
              Authentic African suya, grilled fresh daily with our secret family recipe
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <div className="bg-orange-400 shadow-md sticky top-0 z-40" data-menu-section>
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Filter:</span>
            <div className="grid grid-cols-3 sm:flex gap-2 sm:gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 sm:px-6 py-2 rounded-full text-xs sm:text-base font-semibold transition ${
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
      </div>

      {/* Location Section */}
      <section id="order" ref={orderRef} className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4">
              📍 FIND US
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">Visit Us in Houston</h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl px-4">Come taste authentic African suya right in Houston</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Google Map */}
              <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-2xl">
                <div className="w-full rounded-xl overflow-hidden" style={{height: '560px'}}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221094.10623322314!2d-95.66907934179688!3d29.817178799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Suya Spot Houston Location"
                  ></iframe>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-3 sm:space-y-4">
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border-l-4 border-red-600">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-red-100 p-2 sm:p-3 rounded-full shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-900 mb-1 sm:mb-2">Location</h4>
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg font-semibold">Houston, Texas</p>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-1">Serving all of Houston area</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border-l-4 border-orange-600">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-orange-100 p-2 sm:p-3 rounded-full shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-900 mb-1 sm:mb-2">Open Weekends</h4>
                      <p className="text-gray-700 text-sm sm:text-base lg:text-lg">Saturday - Sunday</p>
                      <p className="text-gray-900 font-bold text-base sm:text-lg lg:text-xl mt-1">3:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-green-100 p-2 sm:p-3 rounded-full shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-900 mb-1 sm:mb-2">Call or Text</h4>
                      <button 
                        onClick={quickWhatsAppContact}
                        className="text-green-600 text-sm sm:text-base lg:text-lg xl:text-xl font-bold hover:text-green-700 transition break-all"
                      >
                        +(234) 706 717 9435
                      </button>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-1">WhatsApp available</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={quickWhatsAppContact}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:from-green-700 hover:to-green-600 transition transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3 shadow-xl"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  Order Now via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid - Added id="menu" for navigation */}
      <section id="menu" ref={menuRef} className="container mx-auto px-4 py-8 sm:py-12 scroll-mt-20">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Our Menu</h3>
          <p className="text-xs sm:text-sm lg:text-base xl:text-lg px-4">All meats are halal certified and grilled fresh to order</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 relative">
              {item.popular && (
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-amber-400 text-red-600 px-2 sm:px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  POPULAR
                </div>
              )}
              
              <button 
                onClick={() => toggleFavorite(item.id)}
                className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full z-10 hover:scale-110 transition"
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${favorites.has(item.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>

              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-orange-200 to-red-200">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1">{item.name}</h4>
                    {item.spiceLevel > 0 && (
                      <span className="text-xs sm:text-sm">{getSpiceIndicator(item.spiceLevel)}</span>
                    )}
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-red-600">${item.price}</span>
                </div>

                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{item.description}</p>

                <div className="flex gap-2 sm:gap-3">
                  <select
                    value={quantities[item.id] || 1}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="border-2 border-gray-200 rounded-lg px-2 sm:px-3 py-2 text-zinc-950 text-xs sm:text-sm focus:outline-none focus:border-red-500 cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>Qty: {num}</option>
                    ))}
                  </select>

                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-2 sm:px-4 rounded-lg text-xs sm:text-sm lg:text-base font-bold hover:from-red-700 hover:to-orange-700 transition transform hover:scale-105 flex items-center justify-center gap-1 sm:gap-2"
                  >
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Add</span>
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
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 sm:p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                  Your Cart ({cart.length})
                </h3>
                <button 
                  onClick={() => setShowCartModal(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition text-xl"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto" style={{maxHeight: 'calc(90vh - 250px)'}}>
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-base sm:text-lg">Your cart is empty</p>
                  <button 
                    onClick={() => setShowCartModal(false)}
                    className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-xl">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-sm sm:text-base text-gray-900 truncate">{item.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">Quantity: {item.quantity}</p>
                        <p className="text-red-600 font-bold text-sm sm:text-base mt-1">
                          ${item.price} × {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-600 hover:bg-red-50 px-2 sm:px-3 rounded-lg transition self-start text-xs sm:text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t p-4 sm:p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg sm:text-xl font-bold text-gray-900">Total:</span>
                  <span className="text-2xl sm:text-3xl font-black text-red-600">${cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    sendWhatsAppOrder();
                    setShowCartModal(false);
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:from-green-700 hover:to-green-600 transition flex items-center justify-center gap-2 sm:gap-3"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Order via WhatsApp
                </button>
                <p className="text-center text-gray-600 text-xs sm:text-sm mt-3">
                  Your order will be sent to our WhatsApp for confirmation
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Cart Summary */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-green-600 to-green-500 text-white p-3 sm:p-4 lg:p-6 rounded-2xl shadow-2xl z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm">
          <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-2">Cart Summary</h4>
          <div className="mb-2 sm:mb-3 max-h-20 sm:max-h-32 overflow-y-auto">
            {cart.map((item, idx) => (
              <div key={idx} className="text-xs sm:text-sm mb-1">
                {item.quantity}x {item.name}
              </div>
            ))}
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl font-black mb-2 sm:mb-3 lg:mb-4">${cartTotal.toFixed(2)}</p>
          <button 
            onClick={() => setShowCartModal(true)}
            className="w-full bg-white text-green-600 py-2 sm:py-3 rounded-lg text-xs sm:text-sm lg:text-base font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            <span className="hidden sm:inline">View Cart</span>
            <span className="sm:hidden">Cart</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SuyaWebApp;