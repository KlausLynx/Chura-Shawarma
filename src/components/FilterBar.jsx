import { useEffect } from "react"

export const FilterBar = ({category, onSelect, activeCategory}) => {
    // console.log(category)
    const uniqueCat = ['All', ...new Set(category)]
    // console.log(uniqueCat)

    useEffect(() => {
        console.log(activeCategory)
    }, [activeCategory])
    
    return (
        <div className="sticky top-0 z-10">
            <div className="bg-sec p-2 ">
                <span className="text-base md:text-xl">Filter:</span>
                <ul className="mt-1 grid grid-cols-4 justify-items-center md:flex md:justify-center md:gap-3 capitalize text-text text-base md:text-xl cursor-pointer">
                    {uniqueCat.map(cat => (
                        <li
                        className={`hover:scale-75 text-center ${activeCategory === cat ? 'bg-accent' : 'bg-none'} p-2 rounded-2xl`}
                        key={cat}
                        onClick={() => onSelect(cat)}
                        >
                        {cat}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}