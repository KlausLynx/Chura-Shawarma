import { AnnouncementBar } from "../layouts/announcementBar"
import { Header } from "../layouts/Header"
import { Footer } from "../layouts/footer"
import { About, CartModal, Contact, FindUs, HeroSection, Menu, ScrollToTop } from "../components"
import { ErrorBoundary } from "react-error-boundary";
import { useState,useEffect, useRef } from "react";

function IndexPage () {
    const [addedToCart, setAddToCart] = useState(false)
    const [selectedMenus, setSelectedMenus] = useState([])
    const MenuRef = useRef(null);
    useEffect(() => {
        console.log(selectedMenus)
    }, [selectedMenus])

    const scrollToMenu = () => {
        if(MenuRef.current) {
            MenuRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', '#Menu');
        }
    }

    return (
        <div className="bg-brand">  
            <AnnouncementBar/>
            <Header scroll={scrollToMenu} />
            <HeroSection/>
            <ErrorBoundary fallback={<div className="text-center text-red-500">Something went wrong. Please try again later.</div>}>
                <Menu ref={MenuRef} cartItem={selectedMenus} onChange={setSelectedMenus} modalState={addedToCart} setModalState={setAddToCart}/>
            </ErrorBoundary>
            <FindUs/>
            <Contact/>
            <About/>
            <CartModal scrolltomenu={scrollToMenu} isOpen={addedToCart} onView={setAddToCart} cartItems={selectedMenus} onChange={setSelectedMenus}/>
            <ScrollToTop/>
            <Footer/>
        </div>
    )
}

export default IndexPage