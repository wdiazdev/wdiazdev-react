import DevImage from '../Components/DevImage';
import Header from '../Components/Header';
import '../Styles/About.css';

export default function About() {
    return (
        <>
            <div className='about' id='about'>

                <Header
                    header={'About Me'}
                    subHeader={''}
                />

                <div className='about--container'>

                    <div className='info'>

                        <p data-aos="fade-up" data-aos-duration='1000'>
                            Hi, my name is <span>Wilfredo Diaz</span>. My interest in web
                            development started back in 2020 when I discovered my passion
                            for technology, from software engineering to UI/UX. I decided to
                            learn Python as my first programming language and managed to
                            continue to learn other languages, frameworks, and libraries.
                        </p>

                        <p data-aos="fade-up" data-aos-duration='1000'>
                            My goal is to stay on the cutting edge of technological advancements.
                            I have enhanced my <span>technical abilities</span> and cultivated a
                            reputation as a major contributor through <span>problem-solving </span>
                            and <span>teamwork</span>.
                        </p>

                        <p data-aos="fade-up" data-aos-duration='1000'>
                            My focus these days is building responsive websites that are easy
                            to use and built with the best practices. My main area of expertise
                            is front-end development. I spend my free time on travel
                            adventures, health and fitness, and learning about new technologies.
                        </p>

                    </div>

                    <div>
                        <DevImage />
                    </div>

                </div>

            </div>
        </>
    )
}
