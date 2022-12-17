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
                <NavLink className='focus-in-expand'>Home</NavLink>
                <NavLink className='focus-in-expand'>About</NavLink>
                <NavLink className='focus-in-expand'>Skills</NavLink>
                <NavLink className='focus-in-expand'>Work</NavLink>
                <NavLink className='focus-in-expand'>Contact</NavLink>
            </div>
            <div className='hamburger--menu' onClick={handleClick}>
                {click ? (<FaTimes size={35} />) : (<FaBars size={35} />)}
            </div>
        </nav>
    )
}
