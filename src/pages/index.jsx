import { AnnouncementBar } from "../layouts/announcementBar"
import { Header } from "../layouts/header"
import { HeroSection } from "../components/HeroSection"
import { Menu } from "../components/menu"
import { FindUs } from "../components/findUs"
import { Footer } from "../layouts/footer"
function IndexPage () {
    return (
        <div className="bg-brand">  
            <AnnouncementBar/>
            <Header/>
            <HeroSection/>
            <Menu/>
            <FindUs/>
            <Footer/>
        </div>
    )
}

export default IndexPage