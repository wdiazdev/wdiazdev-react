import '../Styles/Main.css';
import { FaGithub, FaLinkedin, FaAngleDoubleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';

export default function Main() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {

        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div className='main' id='home'>

            <a href='#' className='fixed--email text-focus-in'>wdiazdev@gmail.com</a>
            <div className='divider--right text-focus-in'></div>
            <div className='divider--left text-focus-in'></div>

            <div className='fixed--icons text-focus-in'>
                <ul>
                    <li>
                        <a
                            href='https://github.com/WDiazDev'
                            target='blank'>
                            <FaGithub />
                        </a>
                    </li>

                    <li>
                        <a
                            href='https://www.linkedin.com/in/wdiazdev/'
                            target='blank'
                        >
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
            </div>

            <div className='main--content'>
                <h3>Hi there, I'm</h3>
                <h1>Wilfredo Diaz</h1>
                <p>I am a Front-End Software Engineer based in Tampa Florida.</p>
                <p>I'm passionate about turning ideas into real-life products.</p>
            </div>

            {!visible && (<div
                className='welcome--to text-focus-in'
                id='welcome--to'
            >
                <FaAngleDoubleDown className='bounce' />
                <h5>Welcome to my little corner of the internet</h5>
                <FaAngleDoubleDown className='bounce' />
            </div>)}

            <div
                className='top--icon text-focus-in'
                style={{ display: visible ? 'inline' : 'none' }}
            >
                <ul>
                    <li>
                        <a
                            href='#'
                            className='bounce'
                            id='top--icon'
                        >
                            <FaAngleUp />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
