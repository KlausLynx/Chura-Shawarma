export const NavBar = () => {
    const NavLinks = ['Home', 'Menu', 'Contact', 'About']

    return (
        <nav className="flex gap-4 items-center justify-center mt-3">
            {NavLinks.map((nav) => {
                if( nav === 'Home') {
                    return (
                        <button className="" key={nav}>
                            <a href="/">{nav}</a>
                        </button>
                    )
                } else {
                    return <button className="" key={nav}>
                        <a href={`#${nav}`}>{nav}</a>
                    </button>
                }
            })}
        </nav>
    )
}