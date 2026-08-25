import { useLocation} from 'react-router-dom'
export const NavBar = () => {
    const NavLinks = ['Home', 'Menu', 'Contact', 'About us']
    const location = useLocation
    console.log(location.pathname)
    return (
        <nav className="flex gap-2 items-center justify-center mt-3">
            {NavLinks.map(nav => (
                <button className="" key={nav}>
                    <a href={`#${nav}`}>{nav}</a>
                </button>
            ))}
        </nav>
    )
}