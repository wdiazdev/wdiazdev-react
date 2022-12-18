import '../Styles/Navbar.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


export default function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className='navbar--container'>
            <h3>WD</h3>
            <div className={click ? 'nav--menu active' : 'nav--menu'}>
                <a className='focus-in-expand' href='#home'>Home</a>
                <a className='focus-in-expand' href='#about'>About</a>
                <a className='focus-in-expand' href='#skills'>Skills</a>
                <a className='focus-in-expand' href='#work'>Work</a>
                <a className='focus-in-expand' href='#contact'>Contact</a>
            </div>
            <div className='hamburger--menu' onClick={handleClick}>
                {click ? (<FaTimes size={35} />) : (<FaBars size={35} />)}
            </div>
        </nav>
    )
}
