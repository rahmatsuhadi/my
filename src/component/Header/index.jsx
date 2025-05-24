
import { FaHamburger } from 'react-icons/fa'
import logoHeader from '../../assets/logo.png'
import moon from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import Hero from '../Hero'
import "./index.css"
import { BiMenu } from 'react-icons/bi'
import { useState } from 'react'
import { useEffect } from 'react'
// import viteLogo from '/vite.svg'


const menu = [
    {
        href: "#projects",
        label: "PROJECTS"
    },
    {
        href: "#",
        label: "CONTACT"
    },
    {
        href: "#blog",
        label: "BLOG"
    }

]


const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const switchTheme = (e) => {
        const isDark = e.target.checked;
        setDarkTheme(isDark);
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme === "dark") {
            setDarkTheme(true);
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            setDarkTheme(false);
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);




    return (
        <header id="hero">
            <nav className="navbar">
                <div className="container">
                    {/* <!-- Logo --> */}
                    <h1 id="logo">
                        <a target="" href="#"
                        >
                            <h1 className="">m.mattz_</h1>
                            {/* <img src={logoHeader} alt="Your Logo" /> */}
                        </a>
                    </h1>
                    {/* <!-- Navbar links --> */}
                    <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
                        {menu.map((item, i) => (
                            <li key={i}><a className="nav-link" href={item.href}>{item.label}</a></li>
                        ))}
                        <li>
                            <a
                                className="nav-link btn btn-primary"
                                href="/my/cv.pdf"
                            >RESUME <i className="fas fa-arrow-right"></i></a>
                        </li>

                        {/* <!-- Toggle switch --> */}
                        <div className="theme-switch">
                            <input type="checkbox" id="switch" checked={darkTheme}
                                onChange={switchTheme} />
                            <label className="toggle-icons" htmlFor="switch">
                                {darkTheme ? 
                                
                                <img className="sun" src={sun} />
                                : 
                                <img className="moon" src={moon} />
                            }
                            </label>
                        </div>
                        {/* <!-- Hamburger menu --> */}
                    </ul>
                    <div

                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
                        className={`hamburger ${menuActive ? "active" : ""}`}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>

                </div>
            </nav>

            <Hero />

        </header>
    )
}

export default Header
