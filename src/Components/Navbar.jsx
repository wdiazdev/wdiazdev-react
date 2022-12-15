import '../Styles/Navbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function Navbar() {

    const [click, setClick] = useState(false);

    const [navColor, setNavColor] = useState(false);

    const handleClick = () => setClick(!click);

    const changeNavBgOnScroll = () => {
        if (window.scrollY >= 100) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    };

    // window.addEventListener('scroll', changeNavBg)

    return (
        <nav className={navColor ? 'navbar--container navbar--bg' : 'navbar--container'}>
            <NavLink to='/'><h3>WD</h3></NavLink>
            <div className={click ? 'nav--menu active' : 'nav--menu'}>
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Skills</NavLink>
                <NavLink>Work</NavLink>
                <NavLink>Contact</NavLink>
            </div>
            <div className='hamburger--menu' onClick={handleClick}>
                {click ? (<FaTimes size={35} />) : (<FaBars size={35} />)}
            </div>
        </nav>
    )
}
