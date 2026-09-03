import { MapPin, Clock, Phone } from 'lucide-react'
import { quickOrderViaWhatsApp } from '../utils/helper'
export const FindUs = () => {

    return (
        <div className="">
            <div className='mt-10 mx-auto '>
                <div className="text-center">
                    <h3 className="bg-sec inline-block pe-2 ps-0.5 py-1 rounded font-bold mb-3">📍 Find Us</h3>  
                    <p className="text-xl font-bold mb-1">Visit Us @ Enugu Abakpa</p>
                    <p className="mb-3 italic md:text-2xl ">Grab a Bite of Chura's Shawarma right here in Abakpa </p>
                </div>

                <div className=''>
                    <div className='max-w-5xl md:mx-auto mx-3 flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-6 md:p-6'>
                        <div className='bg-text p-4 rounded-2xl shadow-2xl '>
                            <div className='w-full overflow-hidden rounded-xl'
                            style={{height: '560px'}} >
                                <iframe 
                                src="https://www.google.com/maps?q=6.4889046,7.5263501&z=18&output=embed"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen="" 
                                loading="lazy" 
                                title="Shawarma Spot Abakpa Location"
                                ></iframe>

                            </div>
                        </div>
                        <div className='flex flex-col gap-4 justify-between'>
                            <div>
                                <div className='flex items-start border-l-6 border-l-accent rounded-2xl p-3 gap-3 bg-amber-100 w-full
                                '>
                                    <div className="bg-sec p-2 sm:p-3 rounded-full shrink-0">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text" />
                                    </div>
                            
                                    <div>
                                        <p className='md:text-2xl font-medium mb-2'>Location</p>
                                        <p className='md:text-xl font-light mb-2'>Enugu, Abakpa</p>
                                        <p className='mb-2'>Serving all of Enugu</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-start border-l-6 border-l-accent rounded-2xl p-3 gap-3 bg-amber-100
                                '>
                                    <div className="bg-sec p-2 sm:p-3 rounded-full shrink-0">
                                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text"/>
                                    </div>

                                    <div>
                                        <p className='md:text-2xl font-medium mb-2'>Booking/Serving Hours</p>
                                        <p className='md:text-xl font-light mb-2'>Saturday - Sunday</p>
                                        <p className='mb-2'>9:00AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-start border-l-6 border-l-accent rounded-2xl p-3 gap-3 bg-amber-100
                                '>
                                    <div className="bg-green-200 p-2 sm:p-3 rounded-full shrink-0">
                                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text"/>
                                    </div>

                                    <div>
                                        <p className='md:text-2xl font-medium mb-2'>Call or Text</p>
                                        <button className='cursor-pointer' onClick={quickOrderViaWhatsApp}>
                                            <p className='md:text-xl font-light mb-2'>+(234) 706 717 9435</p>
                                            <p className='mb-2'>WhatsApp available</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center cursor-pointer justify-center rounded-2xl p-3 gap-3 bg-amber-100 hover:bg-amber-200 hover:-translate-y-0.5 hover:scale-105 transition duration-300 ease-in-out ' >
                                <div className="p-2 sm:p-3 shrink-0">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-text"/>
                                </div>
                                <button className='cursor-pointer' onClick={quickOrderViaWhatsApp}>Order Now Via Whatsapp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}