import '../Styles/Main.css';
import { FaGithub, FaLinkedin, FaAngleDoubleDown } from 'react-icons/fa';

export default function Main() {

    const welcomeTo = document.querySelector("#welcome-to");

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            welcomeTo.classList.add("welcome-to-hidden");
        } else {
            welcomeTo.classList.remove("welcome-to-hidden");
        }
        lastScrollY = window.scrollY;
    });

    return (
        <div className='main'>

            <a href='#' className='fixed--email text-focus-in'>wdiazdev@gmail.com</a>
            <div className='divider--right text-focus-in'></div>
            <div className='divider--left text-focus-in'></div>

            <div className='fixed--icons text-focus-in'>
                <ul>
                    <li>
                        <a
                            href='https://github.com/WDiazDev'
                            className='icon' target='blank'>
                            <FaGithub />
                        </a>
                    </li>

                    <li>
                        <a
                            href='https://www.linkedin.com/in/wdiazdev/'
                            className='icon' target='blank'>
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

            <div class="welcome-to" id="welcome-to">
                <FaAngleDoubleDown className='bounce' />
                <h5>Welcome to my little corner of the internet</h5>
                <FaAngleDoubleDown className='bounce' />
            </div>

        </div>
    )
}
