import HeroImage from '../assets/beef-suya-roadside-night-1024x768.jpg'
export const HeroSection = () => {
    return (
        <div>
            <section className="text-accent relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-linear-to-br from-red-700 via-orange-600 to-red-600">
                <div className="absolute bg-cover bg-center inset-0" style={{backgroundImage: `url(${HeroImage})`, backgroundPosition: 'center'}}>
                    <div className='absolute inset-0 bg-black/60' />
                </div>

                <div className='relative mx-auto container'>
                    <div className='text-center'>
                        <span className='inline-block text-xs md:text-base lg:text-2xl animate-pulse bg-sec px-3 rounded-2xl text-xs sm:text-sm font-bold mb-4'>Now Open @ Abakpa Enugu</span>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6'>Where Every Bite Asks For More</h1>
                        <p className='text-base sm:text-lg lg:text-xl mb-6 sm:mb-8'>Nothing beats a Chura de Rama's shawarma...Get yours now!!!!!</p>
                    </div>
                </div>
            </section>
        </div>
    )
}