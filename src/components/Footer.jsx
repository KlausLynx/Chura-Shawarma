import React, { useState, useRef } from 'react';
import {MapPin, PhoneCall, Mail, Facebook, Instagram} from 'lucide-react';
import {FaWhatsapp, FaMailBulk} from 'react-icons/fa'
import SuyaLogo from '../assets/suyaLogo.jpg';

export default function Footer()  {
    const [suggestion, setSuggestion] = useState('');

    const handleSuggestionSubmit = (e) => {
        e.preventDefault();
        if (suggestion.trim()) {
            const message = `📝 *New Feedback from Angel's Flame Website*%0A%0A${encodeURIComponent(suggestion)}`;
            window.open(`https://wa.me/2347067179435?text=${message}`, '_blank');
            setSuggestion('');
        }
    };

    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    

    return (
        <footer className='bg-gray-800 text-white p-8 md:p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div id='contact' ref={contactRef}>
                    <h3 className='text-lg font-bold mb-4 text-orange-400'>Contact Us</h3>
                    <ul className='space-y-3'>
                     <li className='flex gap-3 items-center hover:text-orange-400 transition-colors'>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className='flex gap-3 items-center'>
                            <MapPin size={20} className='shrink-0' />
                            <span>Houston, Texas</span>
                        </a>
                    </li>

                    <li className='flex gap-3 items-center hover:text-orange-400 transition-colors'>
                        <a href="tel:+19876573432" className='flex gap-3 items-center'>
                            <PhoneCall size={20} className='shrink-0' />
                            <span>+234 (706) 717-9435</span>
                        </a>
                    </li>

                    <li className='flex gap-3 items-center hover:text-orange-400 transition-colors'>
                        <a href="mailto:onyiavitus@gmail.com" className='flex gap-3 items-center'>
                            <Mail size={20} className='shrink-0' />
                            <span>onyiavitus@gmail.com</span>
                        </a>
                    </li>
                    </ul>
                </div>

                {/* About Us Section */}
                <div className='lg:col-span-1'>
                    <div className='flex flex-col items-center mb-6'>
                        <figure className="mb-4">
                            <img src={SuyaLogo} alt="shopLogo" width={110} height={110} className='rounded-lg'/>
                            <figcaption className="leading-tight mt-2 text-center">
                                <span className="text-red-500 font-bold text-lg">Angel's Flame</span>
                                <p className="text-gray-300"><small>Suya Spot</small></p>
                            </figcaption>
                        </figure>
                        
                        {/* Social Media Icons */}
                        <div className='flex justify-center items-center gap-4 mb-6'>
                            <a 
                                href="https://www.facebook.com/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='hover:scale-110 transition-transform'
                            >
                                <Facebook fill='#1877F2' size={28} className='cursor-pointer' />
                            </a>
                                
                            <a 
                                href="https://www.instagram.com/klaus.lynx/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='hover:scale-110 transition-transform'
                            >
                                <Instagram fill='#E4405F' size={28} className='cursor-pointer' />
                            </a>

                            <a 
                                href="https://wa.me/2347067179435?text=Hello%20I%20would%20like%20to%20make%20a%20reservation" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='hover:scale-110 transition-transform'
                            >
                                <FaWhatsapp fill='#25D366' size={28} className='cursor-pointer' />
                            </a>
                        </div>
                    </div>
                    
                    <div id='about' className='text-sm text-gray-300' ref={aboutRef}>
                        <h3 className='text-lg font-bold mb-3 text-orange-400'>About Us</h3>
                        <p className='mb-2'>Angel's Flame Suya Spot brings authentic West African flavors to Houston, Texas.</p>
                        <p className='mb-3'><dfn className='font-semibold text-white'>Suya</dfn> is a spicy grilled meat dish popular in West Africa.</p>
                        
                        <details className="mt-3 cursor-pointer">
                            <summary className="font-semibold text-white hover:text-orange-400 transition-colors">
                                What makes our suya special?
                            </summary>
                            <p className="mt-2 pl-4 border-l-2 border-orange-400">
                                We use traditional charcoal grilling methods and premium quality meats seasoned with our authentic yaji spice blend. Each skewer is carefully prepared to deliver the perfect balance of smoky flavor and spicy heat.
                            </p>
                        </details>
                        
                        <p className="mt-3 text-xs italic">
                            Whether you're craving beef, chicken, or ram suya, our skilled grill masters ensure every bite captures the true essence of Nigerian street food culture.
                        </p>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className='flex flex-col items-start md:items-center'>
                    <h3 className='text-lg font-bold mb-4 text-orange-400'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li className='hover:text-orange-400 transition-colors cursor-pointer' >
                            <a href="#menu" className='flex items-center gap-2'>
                                <span className='text-orange-400'>→</span> Menu
                            </a>
                        </li>
                       
                        <li className='hover:text-orange-400 transition-colors'>
                            <a href="#order" className='flex items-center gap-2'>
                                <span className='text-orange-400'>→</span> Order
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Suggestions Section */}
            <div className='border-t border-gray-700 pt-6 mt-6'>
                <div className='max-w-2xl mx-auto'>
                    <div className='flex items-center gap-3 mb-4'>
                        <FaMailBulk size={24} className='text-orange-400' />
                        <h3 className='text-lg font-bold text-orange-400'>We Value Your Feedback</h3>
                    </div>
                    
                    <details className='bg-gray-700 rounded-lg p-4 mb-4'>
                        <summary className='cursor-pointer font-semibold hover:text-orange-400 transition-colors'>
                            Write Your Suggestions
                        </summary>
                        <div className='mt-3 text-sm text-gray-300'>
                            We take all suggestions <strong className='text-white'>seriously</strong>. 
                            Your feedback helps us improve our service and better serve you!
                        </div>
                    </details>
                       
                    <form onSubmit={handleSuggestionSubmit} className='flex flex-col gap-3'>
                        <textarea 
                            name="suggestion" 
                            id="suggestion" 
                            rows="4"
                            value={suggestion}
                            onChange={(e) => setSuggestion(e.target.value)}
                            className='border-2 border-orange-400 bg-gray-700 text-white rounded-md p-3 w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 resize-none' 
                            placeholder='Share your thoughts, suggestions, or feedback...'
                            required
                        ></textarea>
                        <button 
                            type="submit" 
                            className='bg-orange-400 hover:bg-orange-500 text-gray-900 font-bold py-2 px-6 rounded-md transition-colors self-start'
                        >
                            Send Feedback
                        </button>
                    </form>
                </div>
            </div>

            <div className='border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400'>
                <p>&copy; {new Date().getFullYear()} Angel's Flame Suya Spot. All rights reserved. Made with ❤️ and 🌶️</p>
            </div>
        </footer>
    )
}