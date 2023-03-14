import '../Styles/Navbar.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function Navbar() {

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);

    const [navColor, setNavColor] = useState(false);

    const changeNavBg = () => {
        if (window.scrollY >= 50) {
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    };

    window.addEventListener('scroll', changeNavBg)

    return (
        <nav className={navColor ? 'navbar--container navbar--bg' : 'navbar--container'}>
            <h3>WD</h3>
            <div className={click ? 'nav--menu active' : 'nav--menu'}>
                <a onClick={handleClick} className='focus-in-expand' href='#home'>Home</a>
                <a onClick={handleClick} className='focus-in-expand' href='#about'>About Me</a>
                <a onClick={handleClick} className='focus-in-expand' href='#projects'>Projects</a>
                <a onClick={handleClick} className='focus-in-expand' href='#skills'>Skills</a>
                <a onClick={handleClick} className='focus-in-expand' href='#contact'>Contact</a>
            </div>
            <div className='hamburger--menu' onClick={handleClick}>
                {click ? (<FaTimes size={35} />) : (<FaBars size={35} />)}
            </div>
        </nav >
    )
}
