import React from "react";
import { Link } from 'react-router-dom'
import SuyaLogo from '../assets/suyaLogo.jpg'
import './Header.css';

export default function Header() {

    const [activeLink, setActiveLink] = React.useState('home');


    const clickToScroll = (e) => {
        e.preventDefault();
        const menuSection = document.getElementById('menu');
        if (menuSection){
            menuSection.scrollIntoView({behavior:"smooth", block: 'start'})
        }

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({behavior: "smooth", block: 'start'})
        }

        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    return (
        <header>
            {/* SVG Filter for gooey effect */}
            <svg style={{visibility: 'hidden', position: 'absolute'}} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />    
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                </defs>
            </svg>

            <div className="bg-red-600 p-1">
                <p className="text-center text-sm md:text-base">Special Offer: 15% Instant discount (Instant Pickup)</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:pl-52 md:pr-24 mt-6 md:mt-10" style={{width: '100%'}}>
                <figure className="mb-6 md:mb-0">
                    <img src={SuyaLogo} alt="shopLogo" width={110} height={110}/>
                    <figcaption className="leading-tight mt-0.5">
                        <span className="text-red-600">Angel's Flame</span>
                        <p className="text-center"><small>Suya Spot</small></p>
                    </figcaption>
                </figure>
                
                <div className="flex flex-col flex-1 items-center md:items-end w-full">
                    <div className="pb-8 mb-8 border-b-2 w-full md:w-4/5 border-gray-600">
                        <div className="gooey-wrapper flex flex-col sm:flex-row gap-6 sm:gap-2 justify-center md:justify-end">
                            <button 
                                onClick={clickToScroll}
                                className="gooey-button bg-orange-400 p-2 rounded-md text-sm md:text-base whitespace-nowrap w-full sm:w-auto"
                            >
                                See Menu & Order
                            </button>
                        </div>
                    </div>
                                        
                    <div className="w-full overflow-x-auto">
                        <nav className="flex flex-wrap justify-center md:justify-end gap-y-2">
                            <Link to="/" className={`px-2 py-1.5 text-sm md:text-base whitespace-nowrap ${activeLink === 'home' ? 'text-orange-400' : '' }`}onClick={() => setActiveLink('home')}>Home</Link>
                            <div className="border-l-2 border-gray-600"></div>
                            <a 
                                href="#menu" 
                                onClick={() => {setActiveLink('menu'); clickToScroll();}}
                                className={`px-2 py-1.5 text-sm md:text-base whitespace-nowrap cursor-pointer ${activeLink === 'menu' ? 'text-orange-400' : ''}`}
                            >
                                Menu
                            </a>
                            <div className="border-l-2 border-gray-600"></div>
                            <a href="#contact" onClick={() => {setActiveLink('contact'); clickToScroll();}} className={`px-2 py-1.5 text-sm md:text-base whitespace-nowrap cursor-pointer ${activeLink === 'contact' ? 'text-orange-400' : ''} `}>Contact Us</a>
                            <div className="border-l-2 border-gray-600"></div>
                            <a href="#about" onClick={() => {setActiveLink('about'); clickToScroll();}} className={`px-2 py-1.5 text-sm md:text-base whitespace-nowrap cursor-pointer ${activeLink === 'about' ? 'text-orange-400' : ''}`}>About Us</a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}