import { useEffect } from "react"

export const FilterBar = ({category, onSelect, activeCategory}) => {
    // console.log(category)
    const uniqueCat = ['All', ...new Set(category)]
    // console.log(uniqueCat)

    useEffect(() => {
        console.log(activeCategory)
    }, [activeCategory])
    
    return (
        <div>
            <div className="bg-sec p-2 ">
                <span>Filter by Categories:</span>
                <ul className="mt-1 flex capitalize md:gap-3 text-text text-[13.5px] md:text-xl  cursor-pointer">
                    {uniqueCat.map(cat => (
                        <li className={`hover:scale-75 ${activeCategory === cat ? 'bg-accent' : 'bg-none'} p-2 rounded-2xl`} key={cat} onClick={ () => onSelect(cat)}>
                            {cat}
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}