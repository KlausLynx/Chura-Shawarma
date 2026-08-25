export const FilterBar = ({category, onSelect}) => {
    console.log(category)
    const uniqueCat = ['All', ...new Set(category)]
    console.log(uniqueCat)
    
    return (
        <div>
            <div className="bg-sec px-3 ">
                <span>Filter by Categories:</span>
                <ul className="flex capitalize gap-3 text-text text-base md:text-xl  cursor-pointer">
                    {uniqueCat.map(cat => (
                            <li className="hover:scale-75" key={cat} onClick={ () => onSelect(cat)}>
                                {cat}
                            </li>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}