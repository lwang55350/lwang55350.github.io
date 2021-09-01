const MenuItems = [
    {
        title: 'Home',
        url: 'https://lxwang.net',
        cName: 'nav-link'
    }, 
    {
        title: 'Resume',
        url: 'LWangWebsiteResume.pdf',
        cName: 'nav-link'
    }, 
    // {
    //     title: 'Photos',
    //     url: '#',
    //     cName: 'nav-link'
    // }, 
    {
        title: 'Contact',
        url: 'mailto:lxwang183@gmail.com',
        cName: 'nav-link'
    }
]

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="lwlogo.png" alt="LWang" style={{height: "70px"}}/>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}

                
            </ul>
        </nav>
    )
};

export default Navbar;