
export const About = () => {
    return (
        <section className="container mx-auto px-4 py-8 sm:py-12 scroll-mt-10" id="About">
            <header>
                <h2 className="text-accent font-extrabold text-xl md:text-2xl md:text-center">About Us</h2>
            </header>

            <div className="mt-5 md:max-w-2xl md:mx-auto">
                <p className="text-base md:text-xl mb-3 leading-relaxed"> Chura Shawarma brings real, authentic shawarma to the streets 😊 fresh ingredients, bold flavor, and a wrap that actually fills you up. Every roll is made fresh, every sauce made in-house. That's why customers keep coming back.</p>

                <div>
                    <details>
                        <summary className="hover:text-accent cursor-pointer text-xl">
                            My Story
                        </summary>
                            <p className="p-3 rounded-2xl border-l-5 border-accent mt-05 md:mt-3 bg-amber-100 leading-relaxed">
                                Chura Shawarma was founded in 2020 with a simple dream 💛 to bring the warm, authentic taste of real shawarma to our community, one wrap at a time. Every day, i hand-stack fresh, marinated meat and slow-roast it to juicy perfection on the spinner, letting the edges crisp up just right. Then it's all wrapped in soft, warm flatbread with crisp veggies, a splash of house-made sauces, and a whole lot of love. I believe great food should feel like home, and that's exactly what i pour into every shawarma i make. 😊
                            </p>
                    </details>
                </div>
                
            </div>
        </section>
    )
}