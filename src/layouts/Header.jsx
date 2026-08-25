import { AnnouncementBar } from "./announcementBar";
import logo from "../assets/suyaLogo.jpg"
import './Header.css'
import { NavBar } from "./Navbar";

export const Header = () => {
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

            <div className="bg-brand flex flex-col md:flex-row text-xs md:text-base justify-between p-6 ">
                <div className="m-auto">
                    <figure>
                        <img className=" rounded w-[clamp(6rem,10vw,12rem)] " src={logo} alt="shawarma Logo"  />
                        <figcaption><em className="tracking-wide text-accent font-bold">Chura's Shawarama</em></figcaption>
                    </figure>
                </div>
                <div className="flex flex-col m-2 md:w-7/12">
                    <div className="gooey-wrapper flex flex-col items-center mb-3 justify-end">
                        <button className="gooey-button bg-sec rounded-md cursor-pointer text-xs md:text-base text-text px-3 py-1.5 whitespace-nowrap w-50 ">See Menu & Order</button>
                    </div>
                    <div className="w-full border border-text"></div>
                    <NavBar/>
                </div>
            </div>
        </header>
    )
    
}