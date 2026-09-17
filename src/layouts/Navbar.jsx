export const NavBar = () => {
    const NavLinks = ['Home', 'Menu', 'Contact', 'About']

    return (
        <nav className="flex gap-4 items-center justify-center mt-3">
            {NavLinks.map((nav) => {
                const href = nav === 'Home' ? '/' : `#${nav}`
                return (
                    <button className="group relative" key={nav}>
                        <a href={href} className="relative inline-block">
                            {nav}
                            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                    </button>
                )
            })}
        </nav>
    )
}