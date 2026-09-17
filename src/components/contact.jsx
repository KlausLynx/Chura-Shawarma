import { useState } from "react"
import { MapPinCheck, PhoneCall, MailCheck, ArrowRight, Copy, Check } from "lucide-react"
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa"
import Logo from '../assets/chura_logo.png'

const phone = import.meta.env.VITE_PHONE_NUMBER
const email = "rachaelchidiebere2000@gmail.com"
const displayPhone = "+(234) 810 364 0759"

export const Contact = () => {
    const [copied, setCopied] = useState(null)

    const handleCopy = (text, key) => {
        navigator.clipboard.writeText(text)
        setCopied(key)
        setTimeout(() => setCopied(null), 1500)
    }

    return (
        <section id="Contact" className="container mx-auto px-4 py-8 sm:py-12 scroll-mt-5">
            <header> 
                <h2 className="text-accent font-extrabold text-xl md:text-2xl md:text-center">Contact Us</h2>   
            </header> 
            <div className="flex flex-col md:flex-row gap-6 mt-5 md:mt-10 md:items-center">
                <ul className="flex flex-col md:flex-1 gap-3 mt-5">
                    <li className="flex gap-3">
                        <MapPinCheck size={22}/>
                        <p>Ugwuagor Abakpa Nike Enugu, Nigeria</p>
                    </li>
                    <li className="flex gap-3 items-center">
                        <PhoneCall size={22} />
                        <a href={`tel:+${phone}`} className="hover:text-accent hover:transition-all">{displayPhone}</a>
                        <button onClick={() => handleCopy(displayPhone, 'phone')} aria-label="Copy phone number" className="cursor-pointer hover:text-accent hover:transition-all">
                            {copied === 'phone' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </li>
                    <li className="flex gap-3 items-center">
                        <MailCheck size={22} />
                        <a href={`mailto:${email}`} className="hover:text-accent hover:transition-all">{email}</a>
                        <button onClick={() => handleCopy(email, 'email')} aria-label="Copy email address" className="cursor-pointer hover:text-accent hover:transition-all">
                            {copied === 'email' ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                    </li>   
                </ul>

                <div className="flex md:flex-1 flex-col gap-3 md:mx-auto md:w-96 md:items-center">
                    <figure>
                        <img className="rounded w-[clamp(10rem,10vw,24rem)]" src={Logo} alt="Company Logo"/>
                    </figure>
                    <div>
                        <div>
                            <h2 className="text-accent font-extrabold text-xl md:text-2xl">Reach Us On</h2>
                        </div>
                        <div className="flex gap-5 mt-2">
                            <a href="https://www.facebook.com/DeRama" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={26} className="hover:text-accent hover:scale-110 hover:transition-all"/>
                            </a>
                            <a href="https://www.tiktok.com/@chura_de_rama" target="_blank" rel="noopener noreferrer">
                                <FaTiktok size={26} className="hover:text-accent hover:scale-110 hover:transition-all"/>
                            </a>
                            <a href="https://www.instagram.com/churaderama" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={26} className="hover:text-accent hover:scale-110 hover:transition-all"/>
                            </a>
                            <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={26} className="hover:text-accent hover:scale-110 hover:transition-all"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-1 gap-3 md:items-end">
                    <h2>Quick Links</h2>

                    <div>
                        <ul className="flex flex-col gap-2">
                            <li className="flex gap-3 hover:text-accent hover:cursor-pointer hover:scale-110 hover:transition-all">
                                <ArrowRight />
                                <span><a href="#Menu">Menu</a></span>
                            </li>
                            <li className="flex gap-3 hover:text-accent hover:cursor-pointer hover:scale-110 hover:transition-all">
                                <ArrowRight />
                                <span><a href="#Order">Order</a></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}