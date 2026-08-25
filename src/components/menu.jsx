import { useEffect, useState } from 'react'
import data from '../data/menu.json'
import { FilterBar } from './FilterBar'
import { ShoppingCart} from 'lucide-react'
export const Menu = () => {
    const MENU_CATEGORY = data.map(menu => {
        console.log( menu)
        return menu.category
    })
    const [categories, setCategories] = useState(MENU_CATEGORY)
    console.log(categories)

    const [selectedCategory, setSelectedCategory] = useState('All')

    const handleMenu = (cat) => {
        console.log(cat)
        setSelectedCategory(cat)
    }

    const FILTERED_MENU = selectedCategory === 'All' ? data : data.filter(menu => menu.category === selectedCategory)

    console.log(FILTERED_MENU)

    return (
        <section className='bg-amber-100'>
            <FilterBar category={categories} onSelect={handleMenu}/>
            <div className='mt-10'>
                <div >
                    <div className='text-center'>
                        <h3 className='font-bold text-text text-3xl mb-2'>Our Menu</h3>
                        <p className='italic text-base font-italic '>Certified and Orderly Made</p>
                    </div>
                </div>
                <MenuGrid> 
                    <MenuCard filtered={FILTERED_MENU}/>
                </MenuGrid>
            </div>
        </section>
    )
}

const MenuGrid = ({children}) => {
    return  (
        <div className='container mx-auto px-4 py-8 sm:py-12 '>
            {children}
        </div>
    )
}

const MenuCard = ({filtered}) => {
    const [menuQuantity, setMenuQuantity] = useState({})
    const [selectedMenus, setSelectedMenus] = useState([])
    
    useEffect(()=> {
        console.log(menuQuantity)
        console.log(selectedMenus)
    },[menuQuantity, selectedMenus])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6'>
            {
                filtered.map(({name, category, price, size, popular, description, image}) => {

                    const addToCart = () => {
                        let qty = menuQuantity[name] || 1
                        setSelectedMenus((prev) => {
                            const existing = prev.find((item) =>  item.name === name)
                            if(existing) {
                                return prev.map((item) => item.name === name ? {...item, qty: item.qty + qty} : item)
                            }
                            return [...prev,
                        { name, category, price, size, popular, description, image, qty }
                        ]});
                    }

                    const handleSelectedMenu = (e) => {
                        const qty = Number(e.target.value)
                        setMenuQuantity((prev) => ({...prev, [name]: qty}))
                    }
                    return (
                    <div key={name} className='shadow-lg overflow-hidden hover:shadow-brand transition transform hover:-translate-y-1 rounded-2xl bg-sec'>
                        <div className="h-48 sm:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-orange-200 to-red-200">
                            <img 
                            src={image} 
                            alt={name}
                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                            />
                        </div>
                        <div className='p-6'>
                            <div className='flex justify-between mb-3'>
                                <p className='text-base md:text-xl font-black text-text'>{name}</p>
                                <p className='text-base md:text-xl font-black '>&#8358;{price}</p>
                            </div>
                            <p>Size: {size}</p>
                            <p className='text-base text-text mb-3'>{description}</p>
                            <div className='my-2 flex justify-between'>
                                <select className='
                                border
                                p-2
                                rounded-md
                                border-text
                                focus:outline-none
                                focus:border-amber-100
                                cursor-pointer' 
                                onChange={handleSelectedMenu} 
                                value={menuQuantity[name] || 1}
                                >
                                    {
                                        [1,2,3,4,5,6,7,8,9,10].map(num => (
                                            <option
                                            key={num}
                                            value={num}>
                                                Qty: {num}
                                            </option>
                                        ))
                                    }
                                </select>

                                <button 
                                className='bg-accent 
                                cursor-pointer px-3 
                                rounded-2xl w-7/12
                                hover:bg-amber-100
                                hover:text-text
                                flex
                                items-center
                                justify-center
                                gap-4 
                                '
                                onClick={addToCart}
                                >
                                    <ShoppingCart/>
                                    <span> Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )})
            }
        </div>
    )
}